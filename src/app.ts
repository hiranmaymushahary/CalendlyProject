import express, {Express} from "express";

import {userRouter} from "./Routers/users.router.js";

import {errorhandler} from "./Middlewares/error-handler.js";
import { routeNotFound } from "./Middlewares/route-not-found.js";


const app: Express = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/health", (_req, res) => {
    res.json({ status: "OK!!!##",
        timestamp: new Date().toISOString(),
     });
});
app.use('/api/users',userRouter);

app.use(routeNotFound);

//Midlle ware handling
app.use(errorhandler);
export { app };




