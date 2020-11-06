import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../actions/types';


const INITIAL_STATE = {
    users: null,
    singleUser: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, loading: true, error: '' };
        case GET_USERS_SUCCESS:
            return { ...state, users: action.payload, loading: false };
        case GET_USERS_FAIL:
            return { ...state, error: 'Failed', loading: false };
        case GET_USER:
            return { ...state, loading: true, error: '' };
        case GET_USER_SUCCESS:
            return { ...state, singleUser: action.payload, loading: false };
        case GET_USER_FAIL:
            return { ...state, error: 'Failed', loading: false };
        default:
            return state;
    }
};