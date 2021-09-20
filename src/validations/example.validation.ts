import Joi from 'joi';

const hello = {
  query: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

export default {
  hello,
};
