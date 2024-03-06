/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:06:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 09:36:29
 * @FilePath: /react-practice/src/router/index.js
 * @Description: 路由配置
 */
// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
