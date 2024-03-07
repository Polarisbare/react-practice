/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:04:51
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-07 09:26:30
 * @FilePath: /react-practice/src/pages/Layout/index.js
 * @Description: Layout
 */
// 测试token
import { request } from "@/utils";
import { useEffect } from "react";
const Layout = () => {
  useEffect(() => {
    request.get("user/profile");
  }, []);
  return <div>this is layout</div>;
};
export default Layout;
