from fastapi import FastAPI, HTTPException
from typing import List
from pydantic import BaseModel

import joblib


class Value_Predict(BaseModel):
    values: List[int]

app = FastAPI()

#carregando modelo de regressao linear treinado
model = joblib.load('linear_model.pkl')

@app.get('/')
def version_api():
    return{"version_api": 1.0}

@app.post('/allocate-value/')
async def predition_model(value:Value_Predict):

    #Tratamento para número de parâmetros inválido para a requisição.
    if len(value.values) != 12:
        raise HTTPException(status_code=404, detail="Número de parâmetros inválido!")

    prediction = model.predict([value.values])

    return {'prediction': prediction[0][0]}
