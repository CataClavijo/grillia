"""SQLAlchemy database models.

Modelos de base de datos para experimentos, dietas y predicciones.
Implementación completa en Month 8+.
"""

from sqlalchemy import Column, Float, Integer, String, Text, DateTime, func
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


class Experiment(Base):
    """Stores experiment data — both from literature and lab trials.

    Almacena datos de experimentos de literatura científica y ensayos de laboratorio.
    """

    __tablename__ = "experiments"

    id = Column(Integer, primary_key=True, autoincrement=True)
    created_at = Column(DateTime, server_default=func.now())

    # Model inputs (V01-V04, V07-V08)
    tipo_dieta = Column(String(50), nullable=False)
    alimento_g_dia = Column(Float, nullable=False)
    temperatura = Column(Float, nullable=False)
    humedad_ambiental = Column(Float, nullable=False)
    especie = Column(String(100), nullable=False)
    tiempo_desarrollo = Column(Integer, nullable=False)

    # Rearing conditions (V05-V06)
    fotoperiodo = Column(Float, default=12.0)
    densidad = Column(Float)

    # Registration (V09)
    n_grillos_inicio = Column(Integer)

    # Targets (V10-V11)
    proteina_harina = Column(Float)
    lipidos_harina = Column(Float)

    # Viability (V12-V14)
    tasa_supervivencia = Column(Float)
    peso_promedio = Column(Float)
    biomasa_total = Column(Float)

    # Observations
    observaciones = Column(Text)
    fuente = Column(String(200))  # "literatura" o "experimental" + referencia
