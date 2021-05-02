from pydantic import BaseModel

    
"""
     Campinas é a cidade com valor 3; 
     Porto Alegre é a cidade com valor 1;
     Belo Horizonte é a cidade com valor 4;
     Rio de Janeiro é a cidade com valor 2;
     São Paulo é a cidade com valor 0;
"""

class Allocation(BaseModel):
    city: int
    area: float
    rooms: int
    bathroom: int
    park_space: int
    floor: int
    animals: int
    furtiture: int
    hoa: int
    alloc_value: float
    iptu_value: float
    fire_value:  float
    real_estate_value: float

    class Config:
        orm_mode = True