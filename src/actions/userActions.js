import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOG_OUT,
  USER_REGISTRATION_FAIL,
  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
} from "../constants/userConstants";

export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTRATION_REQUEST,
    });
    const url = `${REACT_APP_SERVER_URL}api/createuser`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = axios.post(
      url,
      {
        email,
        password,
        username,
      },
      { config }
    );

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({
      type: USER_REGISTRATION_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: USER_REGISTRATION_FAIL,
      payload: message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const url = `${REACT_APP_SERVER_URL}api/loginuser`;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = axios.post(
      url,
      {
        email,
        password,
      },
      { config }
    );

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.body.message
        ? error.response.message
        : error.message;

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type:USER_LOG_OUT
    })
};
