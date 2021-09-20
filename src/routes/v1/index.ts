import express from 'express';

import exampleRoute from './example.route';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/example',
    route: exampleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
