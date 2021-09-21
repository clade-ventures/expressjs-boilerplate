import express from 'express';

const hello = (_: express.Request, res: express.Response): void => {
  res.send({
    meta: {
      status: 'success',
      message: 'ok',
    },
    data: {
      greeting: 'Hello World',
    },
  });
};

export default { hello };
