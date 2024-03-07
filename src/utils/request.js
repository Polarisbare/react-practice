/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 10:18:41
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-07 09:22:38
 * @FilePath: /react-practice/src/utils/request.js
 * @Description:  axios封装
 */
// axios 封装
import axios from "axios";
import { getToken } from "./token";

// 1. 跟域名配置
// 2. 超时时间
const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 3. 请求拦截器
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // 操作config注入token
    // 1获取token 2拼接
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
//4. 响应拦截器
request.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);
export { request };
