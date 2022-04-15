const Blockchain = require("./blockchain")

const bitcoin = new Blockchain()

const previousBlockHash = 'ljalsdkjfklj909'

const currentBlockData = [
    {
        amount: 100,
        sender: '0xlkjlkjlk',
        recipient: '0x08098dd',
    }
]

const nonce = 100


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))