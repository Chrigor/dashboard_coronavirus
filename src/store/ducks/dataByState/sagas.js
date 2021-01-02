import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../services/api';
// import { navigate } from '../../../services/navigate';

export function* getDataByState() {
  try {
    const {data} = yield call(
      api.get,
      `/api/report/v1`,
    );

    yield put(loadSuccess(data));
  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}