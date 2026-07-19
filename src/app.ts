// Configures the setting for the express app object

import express, { Express } from 'express';

import { eventTypeRouter } from './Routers/event-type.router.js';
import { publicEventRouter } from './Routers/public-event.router.js';
import { userRouter } from './Routers/users.router.js';
import { errorhandler } from './Middlewares/error-handler.js';
import { routeNotFound } from './Middlewares/route-not-found.js';

const app: Express = express();

app.use(express.json()); // this will help express to deserialize the request body (JSON) into a JavaScript object
app.use(express.text());
app.use(express.urlencoded());

// Custom routes
app.get('/health', (_req, res) => {
    console.log("Executed health route");
    res.json({
        status: 'ok!',
        timestamp: new Date().toISOString()
    })

});


// Express router based routes
app.use('/api/users', userRouter); // if the route starts with /users, userRouter will handle it

app.use('/api/event-types', eventTypeRouter);
app.use('/api/public', publicEventRouter);

app.use(routeNotFound);
// at the last we mention our error handling middleware
app.use(errorhandler);
export { app };