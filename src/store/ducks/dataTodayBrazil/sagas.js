import { call, put } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../services/api';


export function* getDataTodayBrazil() {
  try {
    const now = new Date();
    const yesterday = new Date();

    now.setDate(now.getDate() - 2);
    yesterday.setDate(yesterday.getDate() - 1);

    console.log(yesterday.toLocaleDateString())

    const { data: dataYesterDay } = yield call(
      api.get,
      `/api/report/v1/brazil/${formatDateToAPI(yesterday.toLocaleDateString())}`,
    );

    const { data: dataToday } = yield call(
      api.get,
      `/api/report/v1/brazil/${formatDateToAPI(now.toLocaleDateString())}`,
    );

    const dataYesterDayFormatted = formatData(dataYesterDay);
    const dataTodayFormatted = formatData(dataToday);

    const data = subtractData(dataTodayFormatted, dataYesterDayFormatted);

    yield put(loadSuccess(data));
  } catch (err) {
    alert("Houve ume erro");
    console.log(err);
    yield put(loadFailure());
  }
}

function formatData(data) {
 
  const Casos = data["data"].reduce((acum, obj) => {
    return acum + obj["cases"];
  }, 0);

  const Mortes = data["data"].reduce((acum, obj) => {
    return acum + obj["deaths"];
  }, 0);

  const dataFormatted = {
    Casos,
    Mortes,
  };

  return dataFormatted;
}

function formatDateToAPI(date) {
  const [day, month, year] = date.split("/");

  return `${year}${month}${day}`
}

function subtractData(dataYesterday, dataToday) {
  const data = {};
  const keys = Object.keys(dataYesterday);

  keys.map((key) => {
    data[key] = dataToday[key] - dataYesterday[key]
  });

  return data;
}