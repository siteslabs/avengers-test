import constants from "../constants"

const initialState = {
  banks: [],
  transactions: [],
}

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      }

    case constants.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      }

    case constants.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      }

    // BANKS
    case constants.SET_BANKS:
      return {
        ...state,
        banks: action.payload,
      }

    default:
      return state
  }
}

export default transactionsReducer
