# Getting Started with Superhero website
On the command line
```sh
git clone https://github.com/ronaldmanzano02/superheroes.git
cd superheroes
npm install or yarn install
```


Create .env file inside the root folder. Copy and paste below information then fill up its value.

*Note: All Fields are required. Make sure to fill it all up.

```env
# PostgreSQL credentials 
DB_USER = 
DB_PASS = 
DB_HOST = 
DB_PORT = 
DB_NAME = 

# Register in https://superheroapi.com/ to get a token
SUPERHEROAPI_TOKEN =
```

### Run this command to migrate this file :

[/server/database/migrations/20210416170634-create-power-stats.js](/server/database/migrations/20210416170634-create-power-stats.js)
```sh
npx sequelize-cli db:migrate
```
### Run the app in the development mode.
```sh
npm run dev or yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# 
## Default Port:
- 3001 - Server-Api

In case you are using port 3001 for your App. It can be changed by modifying these files:

[/package.json](/package.json)
```js
  ...
  "proxy": "http://localhost:3001",
  ...
```
[/server/index.js](/server/index.js)
```js
...
const PORT = 3001;
...
```