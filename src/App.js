import "./App.css"
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import addTransaction from "./pages/AddTransaction"
import Transactions from "./pages/Transactions"
import Navbar from "./components/Navbar"
import { useEffect } from "react"
import { setTransactionsAC, setBanksAC } from "./redux/actions/transactions"
import { bankData } from "./data"
import { loginAC, logoutAC } from "./redux/actions/login"

const initialData = () => {
  const transactions = JSON.parse(localStorage.getItem("transactions"))
  const isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"))

  return {
    transactions: transactions || [],
    isAuthorized: isAuthorized,
  }
}

function App() {
  const isAuthorized = useSelector((state) => state.loginReducer.isAuthorized)
  const transactions = useSelector(
    (state) => state.transactionsReducer.transactions
  )
  const dispatch = useDispatch()

  // GETTING DATA FROM LOCAL STORAGE
  useEffect(() => {
    if (initialData().isAuthorized) {
      dispatch(loginAC())
    } else {
      dispatch(logoutAC())
    }

    dispatch(setTransactionsAC(initialData().transactions))
    dispatch(setBanksAC(bankData))
  }, [])

  // SETTING DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    localStorage.setItem("isAuthorized", JSON.stringify(isAuthorized))
  }, [isAuthorized])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          {isAuthorized && (
            <>
              <Navbar />
              <Route path="/transactions" component={Transactions} />
              <Route path="/add" component={addTransaction} />
            </>
          )}
          {!isAuthorized && <Redirect to="/login" />}
        </Switch>
      </Router>
    </div>
  )
}

export default App
