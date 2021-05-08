from fastapi.testclient import TestClient
from server import app

client = TestClient(app)

def test_correct_predict():
    arr = {
        "values": [0, 440, 3, 2, 2, 10, 1, 1, 3000, 4000, 400, 120]
    }
    
    response = client.post(
        '/allocate-value/',
        headers={"X-Token":"coneofsilence"},
        json=arr   
    ) 
    assert response.status_code == 200


def test_number_params_error():
    arr = {
        "values": [0, 440, 3, 2, 2, 10, 1, 1, 3000, 4000, 400]
    }
    
    response = client.post(
        '/allocate-value/',
        headers={"X-Token":"coneofsilence"},
        json=arr   
    ) 
    assert response.status_code == 404
    assert response.json() == {'detail': 'Número de parâmetros inválido!'}

def test_type_params_error():
    arr = {
        "values": [0, 440, 3, 2, 2, 10, 1, 1, 3000, 4000, 400, 'params']
    }
    
    response = client.post(
        '/allocate-value/',
        headers={"X-Token":"coneofsilence"},
        json=arr   
    ) 
    assert response.status_code == 422

def test_median_allocation_value():
    response = client.get(
        '/median-allocation-value/',
        headers={"X-Token":"coneofsilence"}
    ) 

    assert response.status_code == 200

def test_median_city_allocation_value():
    city = 0
    
    dict_city = {
        'city':city
    }
    response = client.get(
        '/median-allocation-value/',
        headers={"X-Token":"coneofsilence"},
        json=dict_city
    ) 

    assert response.status_code == 200
