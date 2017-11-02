# media-management
Media management: upload images and videos

# Instruction
express --view=ejs media-management

# PostgreSQL

admin/admin

set PATH=%PATH%;C:\Program Files\PostgreSQL\9.4\bin\
createdb -U postgres -p 5432 -h localhost media_dev

sequelize init
sequelize model:create --name Media --attributes title:string

sequelize db:migrate