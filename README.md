# Media Management Example
This web app is to upload images/videos and list uploaded files on a table

Technology stack:
[I'm an inline-style link](https://www.google.com)
- Node.JS
- Express.JS
- PostgreSQL
- Sequelize ORM
- Bootstrap
- Bootstrap file-input
- DynaTable

# Installation guide

**PostgreSQL**

Add your DB configurations on `server/config/config.json`


**Add path**

- Windows

`set PATH=%PATH%;C:\Program Files\PostgreSQL\9.4\bin`

- MacOS

`export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"`

- Install Sequelize CLI

`npm install -g sequelize-cli`

- Create database and run migrations

`createdb -U postgres -p 5432 -h localhost media_dev`

`sequelize init sequelize model:create --name Media --attributes title:string`

`sequelize db:migrate`

Run your web application:

`npm start`

Open your favorite browser and go to `http://localhost:3000/`

Enjoy!