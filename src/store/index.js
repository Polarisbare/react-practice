/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 10:30:21
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 10:37:14
 * @FilePath: /react-practice/src/store/index.js
 * @Description: 组合redux子模块 + 导出store实例
 */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./modules/user";
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
