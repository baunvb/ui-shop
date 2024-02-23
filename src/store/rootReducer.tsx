import { combineReducers } from '@reduxjs/toolkit';
import globalReducer from './globalStore';
const rootReducer = combineReducers({
  global: globalReducer
});

export default rootReducer;
