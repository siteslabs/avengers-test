import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import constants from "../redux/constants"
import styles from "../styles/login.module.css"
import { loginAC } from "../redux/actions/login"

const initialInputs = {
  login: "",
  password: "",
}

const Login = () => {
  const [inputs, setInputs] = useState(initialInputs)
  const [validate, setValidate] = useState(null)

  // state
  const dispatch = useDispatch()
  const login = useSelector((state) => state.loginReducer.login)
  const password = useSelector((state) => state.loginReducer.password)
  const isAuthorized = useSelector((state) => state.loginReducer.isAuthorized)

  // inputs changes
  const handleChange = (e) => {
    setValidate(null)
    const { name, value } = e.target

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login === inputs.login && password === inputs.password) {
      setTimeout(() => {
        dispatch(loginAC())
      }, 1000)
    } else {
      setInputs(initialInputs)
      setValidate("Incorrect password or login")
    }
  }

  if (isAuthorized) {
    return <Redirect to="/add" />
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.login__form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login">
              <div className={styles.login__text}>Login:</div>
              <input
                onChange={handleChange}
                value={inputs.login}
                className="input"
                type="text"
                id="login"
                name="login"
                placeholder="login"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password">
              <div className={styles.login__text}>Password: </div>
              <input
                onChange={handleChange}
                value={inputs.password}
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
            </label>
          </div>
          {validate && <div className={styles.login__error}>{validate}</div>}
          <button className={styles.login__btn}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
