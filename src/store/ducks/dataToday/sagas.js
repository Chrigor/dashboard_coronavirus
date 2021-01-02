import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../services/api';
// import { navigate } from '../../../services/navigate';

export function* getDataToday() {
  try {
    const { data } = yield call(
      api.get,
      `/api/report/v1/brazil`,
    );

    // formata data
    const dataFormatted = formatData(data);
    
    yield put(loadSuccess(dataFormatted));
  } catch (err) {
    alert("Houve ume erro");
    yield put(loadFailure());
  }
}

function formatData(data) {
  delete data["data"]["country"]
  delete data["data"]["updated_at"]

  const keys = Object.keys(data["data"]);
  const total = keys.reduce((acum, key) => {
    return acum + data["data"][key];
  }, 0);


  data["data"]["Confirmados"] = data["data"]["confirmed"]
  data["data"]["Mortes"] = data["data"]["deaths"]
  data["data"]["Recuperados"] = data["data"]["recovered"]
  data["data"]["Casos"] = data["data"]["cases"]

  delete data["data"]["confirmed"]
  delete data["data"]["cases"]
  delete data["data"]["deaths"]
  delete data["data"]["recovered"]

  data["data"]["Total"] = total;

  return data;
}