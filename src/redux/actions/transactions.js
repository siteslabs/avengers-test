import constants from "../constants"

export const setTransactionsAC = (initialData) => ({
  type: constants.SET_TRANSACTION,
  payload: initialData,
})
export const deleteTransactionAC = (id) => ({
  type: constants.DELETE_TRANSACTION,
  payload: id,
})
export const addTransactionAC = (data) => ({
  type: constants.ADD_TRANSACTION,
  payload: data,
})
// BANKS
export const setBanksAC = (initialData) => ({
  type: constants.SET_BANKS,
  payload: initialData,
})
