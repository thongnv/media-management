# Media Management Example
This web app is to upload images/videos and list uploaded files on a table

Technology stack:
- [Node.JS](nodejs.org)
- [Express.JS](https://expressjs.com/)
- PostgreSQL
- [Sequelize ORM](http://docs.sequelizejs.com/)
- Bootstrap
- [Bootstrap file-input](http://plugins.krajee.com/file-input)
- [DynaTable](https://www.dynatable.com/)

# Installation guide

### PostgreSQL

Add your DB configurations on `server/config/config.json`


##### Add path

- Windows

`set PATH=%PATH%;C:\Program Files\PostgreSQL\9.4\bin`

- MacOS

`export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"`

##### Install Sequelize CLI

`npm install -g sequelize-cli`

##### Create database and run migrations

`createdb -U postgres -p 5432 -h localhost media_dev`

`sequelize init sequelize model:create --name Media --attributes title:string`

`sequelize db:migrate`

##### Run your web application:

`npm start`

Open your favorite browser and go to `http://localhost:3000/`

That's all.

Enjoy!