'use strict';
import * as types from '../constants/ActionTypes';

export function doLogin()
{
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
    let result = fetch('http://www.baidu.com')
        .then((res)=>{
          dispatch(loginSuccess(true));
        }).catch((e)=>{
          dispatch(loginSuccess(false));
        });
  }
}

function isLogining()
{
  return {
    type: types.LOGIN_IN
  }
}

function loginSuccess(isSuccess)
{
  return{
    type: types.LOGIN_IN_COMPLETED,
    isSuccess: isSuccess
  }
}
