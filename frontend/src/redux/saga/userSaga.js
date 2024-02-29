import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN_REQUEST, LOAD_USER_REQUEST } from "../../contants/userContants";
import {
  loginSuccess,
  loginFail,
  loadUserSuccess,
  loadUserFail,
} from "../actions/userActions";

// Login
function* loginUser(action) {
  const { email, password } = action.payload;
  try {
    const response = yield call(axios.post, "/users/login", {
      email,
      password,
    });
    const userData = response.data.user;
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

export function* lookupLoginUser() {
  yield takeLatest(LOGIN_REQUEST, loginUser);
}

// Load user
function* loadUser(action) {
  try {
    const response = yield call(axios.get, "/users/me");
    const userData = response.data.user;
    yield put(loadUserSuccess(userData));
  } catch (error) {
    yield put(loadUserFail(error.message));
  }
}

export function* lookupLoadUser() {
  yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
