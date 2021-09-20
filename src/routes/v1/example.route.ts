import express from 'express';

import validate from '@server/middlewares/validate';

import exampleController from '@controllers/example.controller';
import exampleValidation from '@validations/example.validation';

const router = express.Router();
router.get(
  '/hello',
  validate(exampleValidation.hello),
  exampleController.hello,
);

export default router;
