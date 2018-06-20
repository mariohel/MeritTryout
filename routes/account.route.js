var express = require('express');
var router = express.Router();
const {Account} = require('../models/account.model');
let account = new Account();

// Dummy Data for testing Purposes , transfering initial funds to test accounts
account.accountTransfer({from: 'genesis_block', to:'test1', amount: 250});
account.accountTransfer({from: 'genesis_block', to:'test2', amount: 150});

/* GET ACCOUNT BALANCE */
router.get('/:accountKey/balance', function(req, res, next) {
  let balance = account.getAccountBalance(req.params.accountKey);
  res.json({balance: balance});
});

/* GET TRANSACTIONS HISTORY */
router.get('/:accountKey/transactions', function(req, res, next) {
  let transactions = account.getAccountTransactions(req.params.accountKey);
  res.json(transactions);
});

/* TRANSFER TO ANOTHER ACCOUNT */
router.post('/transfer', function(req, res, next) {
  let result = account.accountTransfer(req.body);
  res.json(result);
});

module.exports = router;