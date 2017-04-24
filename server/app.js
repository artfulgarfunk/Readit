import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

mongoose.connect('mongodb://password:password@ds117251.mlab.com:17251/mernie', () => {
  console.log('connected to el databaso!!');
});
// Ze Middleware
const app = express();

// makes the app use /api at beginning of all routes
app.use('/api', routes);

export default app;
