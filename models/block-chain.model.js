const {Block} = require('./block.model');

class BlockChain{
    constructor() {
        this.chain = [this.createGenesis()];
    }

    createGenesis() {
        return new Block(0,{"genesis_block":{balance: 1000 , transactions: []}}, "0")
    }

    latestBlock() {
        return this.chain[this.chain.length - 1]
    }

    addBlock(data) {
        let latestBlock = this.latestBlock();
        let index = this.chain.length;
        let prevHash = latestBlock.hash;
        let proof = this.proofWork(latestBlock.proof);
        let newBlock = new Block(index, data, prevHash, proof);
        this.chain.push(newBlock);
    }

    proofWork(lastProof) {
        this.incrementor = lastProof + 1;
        while (this.incrementor % 9 == 0 && this.incrementor % lastProof == 0 ) {
            this.incrementor += 1
        }
        return this.incrementor
    }
}
exports.BlockChain = BlockChain;