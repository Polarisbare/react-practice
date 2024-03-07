/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-07 09:31:15
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-07 09:34:29
 * @FilePath: /react-practice/src/components/AuthRoute.js
 * @Description: 高阶组件 有token 跳转 没有token去登录页
 */
import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";
export function AuthRoute({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace />;
  }
}
