const {Account} = require('./models/account.model');
let account = new Account();
account.accountTransfer({from: 'genesis_block', to:'test1', amount: 250});
account.accountTransfer({from: 'genesis_block', to:'test2', amount: 150});

let test1_balance = account.getAccountBalance('test1');
let test2_transactions = account.getAccountTransactions('test2');
let genesis_block_balance = account.getAccountBalance('genesis_block');
console.log("Test1 Balance should be 250 : " +test1_balance);
console.log("genesis_block Balance should be 600 : " +genesis_block_balance);
console.log("Test1 Balance should be [{'from': 'genesis_block', 'to':'test2', 'balance': 150}] :" + JSON.stringify(test2_transactions));