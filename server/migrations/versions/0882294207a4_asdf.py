"""asdf

Revision ID: 0882294207a4
Revises: 730cadd7d383
Create Date: 2023-05-15 14:49:15.488177

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0882294207a4'
down_revision = '730cadd7d383'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tab_data', schema=None) as batch_op:
        batch_op.alter_column('time',
               existing_type=sa.INTEGER(),
               type_=sa.Float(),
               existing_nullable=True)
        batch_op.alter_column('duration',
               existing_type=sa.INTEGER(),
               type_=sa.Float(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tab_data', schema=None) as batch_op:
        batch_op.alter_column('duration',
               existing_type=sa.Float(),
               type_=sa.INTEGER(),
               existing_nullable=True)
        batch_op.alter_column('time',
               existing_type=sa.Float(),
               type_=sa.INTEGER(),
               existing_nullable=True)

    # ### end Alembic commands ###
