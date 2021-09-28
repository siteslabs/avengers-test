import { useState } from "react"
import styles from "../styles/addTransaction.module.css"
import { bankData } from "../data"
import { useDispatch, useSelector } from "react-redux"
import { addTransactionAC } from "../redux/actions/transactions"

const initialTrnsaction = {
  amount: "",
  bankName: bankData[0].name,
}

const AddTransaction = () => {
  const [transaction, setTransaction] = useState(initialTrnsaction)
  const banks = useSelector((state) => state.transactionsReducer.banks)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target

    setTransaction({
      ...transaction,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      banks,
      transaction.bankName,
      banks.find((bank) => bank.name === transaction.bankName).id
    )
    const newTransaction = {
      id: Date.now(),
      bankId: banks.find((bank) => bank.name === transaction.bankName).id,
      amount: transaction.amount || 0,
    }
    dispatch(addTransactionAC(newTransaction))
    setTransaction(initialTrnsaction)
  }

  const banksOptions = banks.map((bankName, index) => (
    <option key={index}>{bankName.name}</option>
  ))

  return (
    <div className={styles.transaction}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">
            <span className={styles.transaction__text}>Amount:</span>
            <input
              onChange={handleChange}
              value={transaction.amount}
              className="input"
              type="number"
              id="amount"
              name="amount"
              placeholder="amount"
            />
          </label>
          <label htmlFor="amount">
            <span className={styles.transaction__text}>Banks:</span>
            <select
              className={styles.transaction__selector}
              name="bankName"
              onChange={handleChange}
            >
              {banksOptions}
            </select>
          </label>
          <button className={styles.transaction__btn}>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTransaction
