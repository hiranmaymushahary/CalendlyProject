import express, {Express} from "express";

import {userRouter} from "./Routers/users.router.js";

const app: Express = express();

app.get("/health", (_req, res) => {
    res.json({ status: "OK!!!##",
        timestamp: new Date().toISOString(),
     });
});
app.use('/api/users',userRouter);
export { app };




