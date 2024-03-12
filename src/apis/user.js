/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-12 09:05:49
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-12 09:15:33
 * @FilePath: /react-practice/src/apis/user.js
 * @Description: api 用户相关所有请求
 */
import { request } from "@/utils";
// 1 登陆请求
export function loginAPI(formData) {
  return request({
    url: "/authorizations",
    method: "POST",
    data: formData,
  });
}
// 2 获取用户信息
export function getProfileAPI(formData) {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}
