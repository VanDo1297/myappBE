module.exports = async function(req, res) {
    const accountService = require('../../services');
    const AccountRepository = require('../../respository/account-repository');
    const jwt = require('jsonwebtoken');
    try {
        const result = await accountService.getAccessToken(req.body.data)
        if(result.error){
            return res.serverError(result.error);
        }
        const decodeToken = jwt.decode(result.id_token);
        let data = {
            accountId: decodeToken['sub'],
            displayName: decodeToken['name'],
            emailAddress: decodeToken['email'],
            avatarUrl: decodeToken['picture']
        }
        const account_repository = new AccountRepository()
        await account_repository.add(data);
        return res.success(result);
    } catch (error) {
        return res.serverError(error);
    }
  };
  