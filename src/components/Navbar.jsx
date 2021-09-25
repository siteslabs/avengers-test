import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logoutAC } from "../redux/actions/login"
import styles from "../styles/navbar.module.css"

const Navbar = () => {
  const dispatch = useDispatch()
  const logout = () => {
    setTimeout(() => {
      dispatch(logoutAC())
    }, 500)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <span>
          <Link className={styles.navbar__link} to="/add">
            Add transactions
          </Link>
          <Link className={styles.navbar__link} to="/transactions">
            Transactions
          </Link>
        </span>
        <button onClick={logout} className={styles.navbar__logout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
