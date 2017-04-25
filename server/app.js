import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

mongoose.connect('mongodb://password:password@ds117251.mlab.com:17251/mernie', () => {
  console.log('connected to el database');
});
// Ze Middleware
const app = express();
app.use(bodyParser.json());

// makes the app use /api at beginning of all routes
app.use('/api', routes);

export default app;
