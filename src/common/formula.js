
const status = ['Funds In Escrow', 'Funds Released', 'Refunded', 'Awaiting Resolution']

const formula = {
    returnTxMap: (id,tx) => {      
        return {
            id: parseInt(id),
            buyer: tx[0],
            seller: tx[1],
            escrow: tx[2],
            fee: tx[3]/(10**18),
            value: tx[4]/(10**18),
            status: status[tx[5]],
            notes: tx[6]
        }
    },

    sortTx: txs => {
        return txs.sort((a,b) => a.id - b.id)
    }
}

export default formula;
