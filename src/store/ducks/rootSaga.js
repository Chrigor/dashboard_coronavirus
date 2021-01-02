import { all, takeLatest } from 'redux-saga/effects';

import DataTodayTypes from './dataToday/types';
import DataByStateTypes from './dataByState/types';
import DataTodayBRTypes from './dataTodayBrazil/types';

import { getDataToday } from './dataToday/sagas';
import { getDataByState } from './dataByState/sagas';
import { getDataTodayBrazil } from './dataTodayBrazil/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(DataTodayTypes.LOAD_REQUEST, getDataToday),
        takeLatest(DataByStateTypes.LOAD_REQUEST, getDataByState),
        takeLatest(DataTodayBRTypes.LOAD_REQUEST, getDataTodayBrazil),
    ]);
}