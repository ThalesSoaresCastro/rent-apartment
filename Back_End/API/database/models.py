from sqlalchemy import Column, Integer, String, Float

from .database import Base


class Allocation(Base):
    __tablename__ = "allocations"

    id = Column(Integer, primary_key=True, index=True)
    city = Column(Integer)
    area = Column(Float)
    rooms = Column(Integer)
    bathroom = Column(Integer)
    park_space = Column(Integer)
    floor = Column(Integer)
    animals = Column(Integer)
    furtiture = Column(Integer)
    hoa = Column(Integer)
    alloc_value = Column(Float)
    iptu_value = Column(Float)
    fire_value = Column(Float)
    real_estate_value = Column(Float)