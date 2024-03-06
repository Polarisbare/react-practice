/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-05 17:48:56
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 09:10:40
 * @FilePath: /react-practice/src/index.js
 * @Description: 入口文件
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
