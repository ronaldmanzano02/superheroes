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

### Run this command to migrate this file : [/server/database/migrations/20210416170634-create-power-stats.js](/server/database/migrations/20210416170634-create-power-stats.js)
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




<!-- 
### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
