/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 10:22:53
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-07 09:13:35
 * @FilePath: /react-practice/src/utils/index.js
 * @Description: 统一中转模块函数 隔离机制
 */
import { request } from "./request";
import { getToken, setToken, removeToken } from "./token";
export { request, getToken, setToken, removeToken };
