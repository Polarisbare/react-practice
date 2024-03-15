/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:06:52
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-15 11:11:49
 * @FilePath: /react-practice/src/router/index.js
 * @Description: 路由配置
 */
// 路由配置
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
// import Home from "@/pages/Home";
// import Article from "@/pages/Article";
// import Publish from "@/pages/Publish";
import { Suspense, lazy } from "react";

// 路由懒加载
const Home = lazy(() => import("@/pages/Home"));
const Article = lazy(() => import("@/pages/Article"));
const Publish = lazy(() => import("@/pages/Publish"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={"加载中"}>
            <Home />,
          </Suspense>
        ),
      },
      {
        path: "article",
        element: (
          <Suspense fallback={"加载中"}>
            <Article />
          </Suspense>
        ),
      },
      {
        path: "publish",
        element: (
          <Suspense fallback={"加载中"}>
            <Publish />,
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
