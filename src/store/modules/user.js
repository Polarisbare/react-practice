/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 10:31:40
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-12 09:13:56
 * @FilePath: /react-practice/src/store/modules/user.js
 * @Description: 用户相关
 */
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { loginAPI, getProfileAPI } from "@/apis/user";
const userStore = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: getToken("token_key") || "",
    userInfo: {},
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      // 本地存一份
      // localStorage.setItem("token_key", action.payload);
      _setToken(action.payload);
    },
    // 存用户数据
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // 清除用户数据
    clearUserInfo(state) {
      state.token = "";
      state.userInfo = {};
      removeToken();
    },
  },
});

// 解构出actionCreater方法
const { setToken, setUserInfo, clearUserInfo } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1.发送异步请求
    const res = await loginAPI(loginForm);
    // 2.提交同步actions进行token的存入
    dispatch(setToken(res.data.token));
  };
};
// 异步方法 获取个人信息
const fetchUserInfo = (loginForm) => {
  return async (dispatch) => {
    const res = await getProfileAPI();
    dispatch(setUserInfo(res.data));
  };
};

export { fetchLogin, setToken, fetchUserInfo, clearUserInfo };

export default userReducer;
