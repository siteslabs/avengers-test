import constants from "../constants"

const initialState = {
  login: "username",
  password: "username123",
  isAuthorized: true,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        isAuthorized: true,
      }

    case constants.LOGOUT:
      return {
        ...state,
        isAuthorized: false,
      }

    default:
      return state
  }
}

export default loginReducer
