export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION': 
            // Delete the transaction which has id equal to paylaod
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)    
            };
        case 'ADD_TRANSACTION':
            // Add new transaction to from the payload
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };     
        default:
            return state;
    }
}