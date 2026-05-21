"""initial tables

Revision ID: f6911fb95e73
Revises:
Create Date: 2026-03-22

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = "f6911fb95e73"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "experiments",
        sa.Column("id", sa.Integer(), autoincrement=True, nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(),
            server_default=sa.func.now(),
            nullable=True,
        ),
        # Model inputs (V01-V04, V07-V08)
        sa.Column("tipo_dieta", sa.String(length=50), nullable=False),
        sa.Column("alimento_g_dia", sa.Float(), nullable=False),
        sa.Column("temperatura", sa.Float(), nullable=False),
        sa.Column("humedad_ambiental", sa.Float(), nullable=False),
        sa.Column("especie", sa.String(length=100), nullable=False),
        sa.Column("tiempo_desarrollo", sa.Integer(), nullable=False),
        # Rearing conditions (V05-V06)
        sa.Column("fotoperiodo", sa.Float(), nullable=True),
        sa.Column("densidad", sa.Float(), nullable=True),
        # Registration (V09)
        sa.Column("n_grillos_inicio", sa.Integer(), nullable=True),
        # Targets (V10-V11)
        sa.Column("proteina_harina", sa.Float(), nullable=True),
        sa.Column("lipidos_harina", sa.Float(), nullable=True),
        # Viability (V12-V14)
        sa.Column("tasa_supervivencia", sa.Float(), nullable=True),
        sa.Column("peso_promedio", sa.Float(), nullable=True),
        sa.Column("biomasa_total", sa.Float(), nullable=True),
        # Observations
        sa.Column("observaciones", sa.Text(), nullable=True),
        sa.Column("fuente", sa.String(length=200), nullable=True),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    op.drop_table("experiments")
