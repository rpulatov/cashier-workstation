import { UserStorage } from "storage";
import { login as loginApi } from "../../api/auth";
import { showNotification } from "./notification";
import { ReduxThunkAction } from "types";

const LOGIN_FETCH = "LOGIN_FETCH";
export const loginFetch = (login: string, password: string) => ({
  type: LOGIN_FETCH,
  payload: { login, password },
});
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// const LOGIN_ERROR = "LOGIN_ERROR";
const LOGOUT = "LOGOUT";
export const logoutAction = (): ReduxThunkAction => (dispath) => {
  UserStorage.clear();
  dispath({ type: LOGOUT });
};

const SET_USERNAME = "SET_USERNAME";
export const setUsernameAction = (name: string) => ({
  type: SET_USERNAME,
  payload: name,
});

export const loginAction = (
  login: string,
  password: string
): ReduxThunkAction => {
  return (dispatch) => {
    dispatch({ type: LOGIN_FETCH });
    loginApi(login, password)
      .then(({ data }) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { token: data.token, userName: data.user.username },
        });
        UserStorage.save(data.user.username, data.token);
      })
      .catch((e) => {
        dispatch(showNotification(e.message, "error"));
      });
  };
};

const initialState = (): AuthState => {
  const data = UserStorage.load();
  return {
    userName: data.userName,
    token: data.token,
  };
};

type AuthState = {
  userName: string;
  token: string;
};

export default (state: AuthState = initialState(), action: any): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { userName, token } = action.payload;
      return { userName, token };
    case LOGOUT:
      return { userName: "", token: "" };
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
