const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const bearerToken = req.headers['authorization'];
  if (!bearerToken) {
    return res.status(401).send({
      success: false,
      message: 'Server Error',
      data: 'Login required'
    });
  }

  const jwtToken = bearerToken.split(' ')[1];
  const payload = jwt.decode(jwtToken);
  if (!payload) {
    return res.status(401).send({
      success: false,
      message: 'Server Error',
      data: 'Invalid account.'
    });
  }
  req.user = payload;
  next();
};
