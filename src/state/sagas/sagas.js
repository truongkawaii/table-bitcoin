import { call, put, takeLatest, all } from 'redux-saga/effects';
import { Actions, getDataSuccess, getDataCurrencySuccess } from '../actions';
import TableService from '../../services/table.services';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    console.log(action, 'action');
    const user = yield call(TableService.list, action.payload);
    yield put(getDataSuccess(user));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchCurrency() {
  try {
    const list = yield call(TableService.listCurrency);
    console.log(list, 'LIST');
    yield put(getDataCurrencySuccess(list));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* fetchChangeData(action) {
  try {
    const list = yield call(TableService.listDataChange, action.payload);
    yield put(getDataCurrencySuccess(list));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(Actions.GET_DATA, fetchUser);
  yield takeLatest(Actions.GET_DATA_CURRENCY, fetchCurrency);
  yield takeLatest(Actions.GET_CHANGE_DATA, fetchChangeData);
}


export default function* rootSaga() {
  yield all([mySaga()]);
}