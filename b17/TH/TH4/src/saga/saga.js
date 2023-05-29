import { all } from 'redux-saga/effects';
import { watchAddUserSaga, watchGetUserSaga } from '../slice/userSlice';

export default function* rootSaga() {
  yield all([watchAddUserSaga(), watchGetUserSaga()]);
}