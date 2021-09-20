import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import xss from 'xss-clean';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import v1Routes from './routes/v1';
import ApiError from './utils/ApiError';
import httpStatus from 'http-status';

import { errorHandler } from './middlewares/error';

const app: Application = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data,
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// rate limiter
app.use(
  '/v1',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    skipSuccessfulRequests: true,
  }),
);

// v1 api routes
app.use('/v1', v1Routes);

// send back a 404 error for any unknown api request
app.use((_req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// handle error
app.use(errorHandler);

export default app;
