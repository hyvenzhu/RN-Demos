'use strict';

import * as types from '../constants/ActionTypes';

const initialState = {
  status: 'init',
  isSuccess: false,
  user: null,
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN_INIT: // 初始状态
      return Object.assign({}, state, {
        status: 'init',
        isSuccess: false,
        user: null
      });
    case types.LOGIN_IN_DOING: // 正在登录
      return Object.assign({}, state, {
        status: 'doing',
        isSuccess: false,
        user: null
      });
    case types.LOGIN_IN_DONE: // 登录完成
      return Object.assign({}, state, {
        status: 'done',
        isSuccess: action.isSuccess,
        user: action.user
      })
    default:
      return state;
  }
}
