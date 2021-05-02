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

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class Value_Predict(BaseModel):
    values: List[int]

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
