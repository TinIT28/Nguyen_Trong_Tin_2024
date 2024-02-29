import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../../contants/userContants";

// Login actions
export const loginRequest = (email, password) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

// Load user actions
export const loadUserRequest = () => ({
  type: LOAD_USER_REQUEST,
});

export const loadUserSuccess = (userData) => ({
  type: LOAD_USER_SUCCESS,
  payload: userData,
});

export const loadUserFail = (error) => ({
  type: LOAD_USER_FAIL,
  payload: error,
});
