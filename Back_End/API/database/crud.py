from sqlalchemy.orm import Session

from . import models, schemas


def get_allocation(db: Session, allocation_id: int):
    return db.query(models.Allocation).filter(models.Allocation.id == allocation_id).first()

def create_allocation(db: Session, allocation: schemas.Allocation):
    db_allocation = models.Allocation(
        city = allocation.city,
        area = allocation.area,
        rooms = allocation.rooms,
        bathroom = allocation.bathroom,
        park_space = allocation.park_space,
        floor = allocation.floor,
        animals = allocation.animals,
        furtiture = allocation.furtiture,
        hoa = allocation.hoa,
        alloc_value = allocation.alloc_value,
        iptu_value = allocation.iptu_value,
        fire_value = allocation.fire_value,
        real_estate_value = allocation.real_estate_value
    )
    db.add(db_allocation)
    db.commit()
    db.refresh(db_allocation)
    return db_allocation

def get_allocation_value(db:Session):
    return db.query(models.Allocation.alloc_value).all()

"""
    0 - São Paulo
    1 - Porto Alegre
    2 = Rio de Janeiro
    3 - Campinas
    4 - Belo Horizonte
"""

def get_city_allocation_values(db: Session, opt:int):
    return db.query(models.Allocation.alloc_value).filter(models.Allocation.city == opt).all()
