'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  loading: false,
  isSuccess: false,
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN:
      return Object.assign({}, state, {
        loading: true
      });
    case types.LOGIN_IN_COMPLETED:
      return Object.assign({}, state, {
        loading: false,
        isSuccess: action.isSuccess
      })
    default:
      return state;
  }
}
