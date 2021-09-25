import { useDispatch, useSelector } from "react-redux"
import { bankData, transactionsData } from "../data"
import { deleteTransactionAC } from "../redux/actions/transactions"
import styles from "../styles/transactions.module.css"

const Transactions = () => {
  const dispatch = useDispatch()
  const transactions = useSelector(
    (state) => state.transactionsReducer.transactions
  )
  const deleteTransaction = (id) => {
    dispatch(deleteTransactionAC(id))
  }

  return (
    <div className={styles.transactions}>
      <div className={styles.container}>
        {/* TRANSACTION DATA CONTENT */}
        {transactions.length > 0 ? (
          <table className={styles.transactions__table}>
            <thead className={styles.transactions__header}>
              <tr>
                {["Name", "Amount (som)"].map((title, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((data) => {
                const { id, bankId, amount } = data
                const bank = bankData.find((item) => item.id === bankId)
                return (
                  <tr key={id}>
                    <td>{bank.name}</td>
                    <td>{amount}</td>
                    <td>
                      <button
                        onClick={() => deleteTransaction(id)}
                        className={styles.transactions__deleteBtn}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          // <Noresults />
          <div className={styles.transactions__noResult}>Noresult</div>
        )}
      </div>
    </div>
  )
}

export default Transactions
