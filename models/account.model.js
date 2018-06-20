const {BlockChain} = require('../models/block-chain.model');
class Account{
    constructor() {
        this.blockChain = new BlockChain();
    }

    getAccountBalance(accountKey) {
        let latest = this.blockChain.latestBlock();
        if(!latest || !latest.data[accountKey]) return 0;
        return latest.data[accountKey].balance || 0;
    }

    getAccountTransactions(accountKey) {
        let latest = this.blockChain.latestBlock();
        if(!latest || !latest.data[accountKey]) return [];
        return latest.data[accountKey].transactions || [];
    }

    accountTransfer(accountTransfer) {
        let accounts = this.blockChain.latestBlock().data || {};
        if(!accounts[accountTransfer.to])
            accounts[accountTransfer.to] = {balance: 0 , transactions: []}
        if(!accounts[accountTransfer.from])
            accounts[accountTransfer.from] = {balance: 0 , transactions: []}

        if (accounts[accountTransfer.from].balance < accounts[accountTransfer.to].balance) {
           return {success:false , message: "Insufficient funds"}
        }
        accounts[accountTransfer.from].balance -= accountTransfer.amount;
        accounts[accountTransfer.to].balance += accountTransfer.amount;
       
       
        accounts[accountTransfer.to].transactions.push(accountTransfer);
        accounts[accountTransfer.from].transactions.push(accountTransfer);

        this.blockChain.addBlock(accounts);
        return {success:true , message: "Transfer Done Successfully"};
    }
}
exports.Account = Account;