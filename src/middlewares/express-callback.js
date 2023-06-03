module.exports = (controller) => async (req, res, next) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    method: req.method,
    path: req.path,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
      Authorization: req.get('Authorization'),
    },
    user: req.user,
  };
  try {
    const httpResponse = await controller(httpRequest);
    if (httpResponse.headers) {
      res.set(httpResponse.headers);
    }
    res.type('json');
    res.status(httpResponse.statusCode).send(httpResponse.body);
  }
  catch (err) {
    next(err);
  }
};
