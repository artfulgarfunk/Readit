import express from 'express';

// Controller Imports
import baseController from './controllers/baseController';
import userController from './controllers/userController';

const routes = express();


// Basic Routes
routes.get('/', baseController.get);

// User Routes
routes.post('/signup', userController.post);

export default routes;
