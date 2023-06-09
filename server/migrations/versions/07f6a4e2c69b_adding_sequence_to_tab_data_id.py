"""adding sequence to tab_data id

Revision ID: 07f6a4e2c69b
Revises: 86c7b9557ae4
Create Date: 2023-05-24 13:51:23.646301

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07f6a4e2c69b'
down_revision = '86c7b9557ae4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tab_data', schema=None) as batch_op:
        batch_op.drop_constraint('tab_data_id_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('tab_data', schema=None) as batch_op:
        batch_op.create_unique_constraint('tab_data_id_key', ['id'])

    # ### end Alembic commands ###
