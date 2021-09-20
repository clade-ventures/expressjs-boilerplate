const hello = (_, res) => {
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
