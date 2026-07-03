

import { app } from './app.js'; // Braces must match the named export above
import { port } from "./config/env.js";
import { connectDatabase } from "./config/database.js";

async function startServer() {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`[server]: is running on port ${port}`);
    });
}

startServer();

