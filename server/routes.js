import express from 'express';

// Controller Imports
import baseController from './controllers/baseController';

const routes = express();

routes.get('/', baseController.get)

export default routes;
