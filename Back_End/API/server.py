from fastapi import Depends, FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

from sqlalchemy.orm import Session

from database.models import Allocation as modelAllocation
from database.schemas import Allocation as schemasAllocation

from database import crud, models, schemas
from database.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

import joblib

import functools as fct

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class Value_Predict(BaseModel):
    values: List[int]

class CityQuery(BaseModel):
    city: int

app = FastAPI()

#carregando modelo de regressao linear treinado
model = joblib.load('linear_model.pkl')




def map_allocation(values, predict):
    model = {
        'city': values[0],
        'area': values[1],
        'rooms':  values[2],
        'bathroom':  values[3],
        'park_space':  values[4],
        'floor':  values[5],
        'animals':  values[6],
        'furtiture':  values[7],
        'hoa':  values[8],
        'alloc_value':  values[9],
        'iptu_value':  values[10],
        'fire_value':   values[11],
        'real_estate_value': predict
    }
    return model


@app.get('/')
def version_api():
    return{"version_api": 1.0}

@app.post('/allocate-value/')
async def predition_model(value:Value_Predict, db: Session = Depends(get_db)):

    #Tratamento para número de parâmetros inválido para a requisição.
    if len(value.values) != 12:
        raise HTTPException(status_code=404, detail="Número de parâmetros inválido!")

    prediction = model.predict([value.values])

    treated_prediction = round(float(prediction[0][0]),2)

    obj_model = map_allocation(value.values, treated_prediction)

    db_allocation = modelAllocation(
        city = obj_model['city'],
        area = obj_model['area'],
        rooms = obj_model['rooms'],
        bathroom = obj_model['bathroom'],
        park_space = obj_model['park_space'],
        floor = obj_model['floor'],
        animals = obj_model['animals'],
        furtiture = obj_model['furtiture'],
        hoa = obj_model['hoa'],
        alloc_value = obj_model['alloc_value'],
        iptu_value = obj_model['iptu_value'],
        fire_value = obj_model['fire_value'],
        real_estate_value = obj_model['real_estate_value']
    )

    crud.create_allocation(db=db, allocation=db_allocation)


    return {'prediction': treated_prediction}

median_value = lambda list_values : round(fct.reduce(lambda x,y: x+y,list_values)/len(list_values),2)

@app.get('/median-all-allocation-value')
async def median_all_allocation_value(db: Session = Depends(get_db)):
   
    value = list(crud.get_allocation_value(db=db))
    list_values = [i[0] for i in value]
    alloc_median = median_value(list_values) #round(fct.reduce(lambda x,y: x+y,list_values)/len(value),2)

    if len(value) <=0:
        raise HTTPException(status_code=404, detail="Não existem registros para se calcular a média!")

    return {
            "median_all_allocation_value":alloc_median,
            "list_all_allocation_values":list_values
            }



@app.post('/city-median-allocation/')
async def median_city_allocation_values(value:CityQuery, db: Session = Depends(get_db)):
    
    values_city = crud.get_city_allocation_values(db=db, opt=value.city)
    list_city_values = [i[0] for i in values_city]    
    
    median_values = median_value(list_city_values)
    
    return{
        'city_query':value.city,
        'values_allocation_city': list_city_values,
        'median_city_values':median_values,
    } 
