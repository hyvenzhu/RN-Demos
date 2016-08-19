'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  status: 'init',
  isSuccess: false,
  user: null,
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN_INIT:
      return Object.assign({}, state, {
        status: 'init',
        isSuccess: false,
        user: null
      });
    case types.LOGIN_IN_DOING:
      return Object.assign({}, state, {
        status: 'doing',
        isSuccess: false,
        user: null
      });
    case types.LOGIN_IN_DONE:
      return Object.assign({}, state, {
        status: 'done',
        isSuccess: action.isSuccess,
        user: action.user
      })
    default:
      return state;
  }
}
