

import { app } from './app.js'; // Braces must match the named export above
import { port } from "./config/env.js";

export function startServer() {
    app.listen(port, () => {
        console.log(`[server]: is running on port ${port}`);
    });
}

startServer();

