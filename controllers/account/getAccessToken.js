const accountService = require('../../services')

module.exports = async function(req, res) {
    console.log(req);
    console.log(res);
    try {
    const a = await accountService.getAccessToken() 
      res.success(true);
    } catch (error) {
      res.serverError(error);
    }
  };
  