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