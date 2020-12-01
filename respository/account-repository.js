const BaseRepository = require('./base-repository');
const dbContext = require('../models');

class AccountRepository extends BaseRepository {
  constructor(transaction) {
    super(dbContext.account, transaction);
  }
}
module.exports = AccountRepository;
