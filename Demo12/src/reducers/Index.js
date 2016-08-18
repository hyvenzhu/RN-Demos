'use strict';

import {combineReducers} from 'redux';
import loginIn from './Login';

const rootReducer = combineReducers({
  loginIn: loginIn
});

export default rootReducer;
