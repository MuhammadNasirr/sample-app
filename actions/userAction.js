
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from './types';
import { getUsers, getUser } from '../api/user'

export const _getUsers = () => {
    return (dispatch) => {
        dispatch({ type: GET_USERS });
        getUsers()
            .then((snapshot) => {
                getUsersSuccess(dispatch, snapshot.data)
            })
            .catch((err) => {
                getUsersFail(dispatch, err)
            })
    };
};

export const _getUser = (user) => {
    return (dispatch) => {
        dispatch({ type: GET_USER });
        getUser(user)
            .then((snapshot) => {
                getUserSuccess(dispatch, snapshot.data)
            })
            .catch((err) => {
                getUserFail(dispatch, err)
            })
    };
};


const getUsersFail = (dispatch, error) => {
    alert(error.response.data.message)
    dispatch({ type: GET_USERS_FAIL });
};

const getUsersSuccess = (dispatch, users) => {
    dispatch({
        type: GET_USERS_SUCCESS,
        payload: users
    });
}


const getUserFail = (dispatch, error) => {
    alert(error.response.data.message)
    dispatch({ type: GET_USER_FAIL });
};

const getUserSuccess = (dispatch, user) => {
    dispatch({
        type: GET_USER_SUCCESS,
        payload: user
    });
}