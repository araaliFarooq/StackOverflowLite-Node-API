// This is the default export for all our routers
/*
Routers expose endpoints that serve the api
the main prefix for the endpoint will be defined in the app.js

*/

import userRouter from './user';
import questionRouter from './question';

export { userRouter, questionRouter };
