const BaseRepository = require('./base-repository');
const dbContext = require('../models');

class AccountReopsitory extends BaseRepository {
  constructor(transaction) {
    super(dbContext.account, transaction);
  }
}
module.exports = AccountReopsitory;
