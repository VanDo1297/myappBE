const loginAuth = require('../middlewares/authentication/auth');

module.exports = function(app) {
  app.use('/', require('./home'));
  app.use('/api', require('./docs'));
};
