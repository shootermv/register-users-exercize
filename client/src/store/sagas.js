import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects';
import constants from "./constants";

const url = `${process.env.REACT_APP_API}/users`;

function* fetchUsers() {
    try {
       const res = yield call(() => axios.get(url));
       yield put({type: constants.USERS_FETCH_SUCCESS, payload: res.data});
    } catch (e) {
       yield put({type: constants.USERS_FETCH_ERROR, message: e.message});
    }
}

function* registerUser(action) {
    try {
       const data = yield call(() => axios.post(url, action.user));
       yield put({type: constants.REGISTER_SUCCESS, newUser: data});
    } catch (e) {
       yield put({type: constants.REGISTER_ERROR, error: e.response.data?.message});
    }
}

function* usersSaga() {
    yield takeEvery(constants.USERS_FETCH, fetchUsers);
    yield takeEvery(constants.REGISTER_FETCH, registerUser);
}

export default usersSaga;