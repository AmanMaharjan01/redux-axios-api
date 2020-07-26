import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../types/userTypes";

import axios from "axios";

export const fetchDataRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchDataSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchDataFailure(errorMsg));
      });
  };
};
