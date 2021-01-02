  
import {combineReducers} from 'redux';

import dataToday from './dataToday';
import dataByState from './dataByState';
import dataTodayBrazil from './dataTodayBrazil';


const appReducer = combineReducers({
  dataToday,
  dataByState,
  dataTodayBrazil
});

export default appReducer;