/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 10:31:40
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 10:58:52
 * @FilePath: /react-practice/src/store/modules/user.js
 * @Description: 用户相关
 */
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
const userStore = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: "",
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

// 解构出actionCreater方法
const { setToken } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1.发送异步请求
    const res = await request.post("/authorizations", loginForm);
    console.log("=========>res", res);

    // 2.提交同步actions进行token的存入
    dispatch(setToken(res.data.token));
  };
};

export { setToken, fetchLogin };

export default userReducer;