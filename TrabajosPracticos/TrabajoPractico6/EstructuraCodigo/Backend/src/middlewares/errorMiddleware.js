const errorMiddleware = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  const message = `Error ${error.status}: ${error.message}`;

  console.error(message);

  res.status(error.statusCode).send({
    status: error.status,
    message: !error.showMessageToClient ? 'Internal Server Error' : error.message,
  });
};

module.exports = errorMiddleware;