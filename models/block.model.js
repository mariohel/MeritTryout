const SHA256 = require('crypto-js/sha256');
class Block{
	constructor(index, data, prevHash, proof){
		this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
        this.proof = proof;
    }
    
    getHash(){
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}
exports.Block = Block;