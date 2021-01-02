import { call, put, select } from 'redux-saga/effects';

import { loadFailure, loadSuccess } from './actions';
import api from '../../../services/api';


export function* getDataTodayBrazil() {
  try {
    const now = new Date();
    const yesterday = new Date();

    now.setDate(now.getDate() - 2);
    yesterday.setDate(now.getDate() - 1);

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

  const Suspeitos = data["data"].reduce((acum, obj) => {
    return acum + obj["suspects"];
  }, 0);

  const Negados = data["data"].reduce((acum, obj) => {
    return acum + obj["refuses"];
  }, 0);

  const dataFormatted = {
    Casos,
    Mortes,
    Suspeitos,
    Negados
  };

  return dataFormatted;
}

function formatDateToAPI(date) {
  const [day, month, year] = date.split("/");

  return `${year}${month}${day}`
}

function subtractData(dataToday, dataYesterday) {
  const data = {};
  const keys = Object.keys(dataYesterday);

  keys.map((key) => {
    data[key] = dataToday[key] - dataYesterday[key]
  });

  return data;
}