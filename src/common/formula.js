
const status = ['Funds In Escrow', 'Funds Released', 'Refunded', 'Awaiting Resolution']

const returnTxMap = (tx) => {

    return {
        buyer: tx[0],
        seller: tx[1],
        escrow: tx[2],
        fee: tx[3]/(10**18),
        value: tx[4]/(10**18),
        status: status[tx[5]],
        notes: tx[6]
    }
}

export default returnTxMap;
