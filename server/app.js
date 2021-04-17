const express = require('express');
const pino = require('express-pino-logger')();
const app = express();
const path = require('path')

app.use('/api/images', express.static(path.join(__dirname, 'public/images')))

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(pino);

const routes = {
    powerstats: require('./routes/powerstats'),
    // Add more routes here...
};

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
    return async function (req, res, next) {
        try {
            await handler(req, res);
        } catch (error) {
            next(error);
        }
    };
}


// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {
    if (routeController.getAll) {
        app.get(
            `/api/${routeName}`,
            makeHandlerAwareOfAsyncErrors(routeController.getAll)
        );
    }
    if (routeController.searchByName) {
        app.get(
            `/api/${routeName}/search/:name`,
            makeHandlerAwareOfAsyncErrors(routeController.searchByName)
        );
    }
    if (routeController.getById) {
        app.get(
            `/api/${routeName}/:id`,
            makeHandlerAwareOfAsyncErrors(routeController.getById)
        );
    }
    if (routeController.upsert) {
        app.post(
            `/api/${routeName}`,
            makeHandlerAwareOfAsyncErrors(routeController.upsert)
        );
    }
    if (routeController.update) {
        app.put(
            `/api/${routeName}/:id`,
            makeHandlerAwareOfAsyncErrors(routeController.update)
        );
    }
    if (routeController.remove) {
        app.delete(
            `/api/${routeName}/:id`,
            makeHandlerAwareOfAsyncErrors(routeController.remove)
        );
    }
}

module.exports = app;