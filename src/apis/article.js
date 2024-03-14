/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-12 09:46:07
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-14 09:34:57
 * @FilePath: /react-practice/src/apis/article.js
 * @Description: 文章相关所有请求
 */
import { request } from "@/utils";
// 1 频道列表
export function getChannelAPI() {
  return request({
    url: "/channels",
    method: "GET",
  });
}
// 提交文章表单
export function createArticleAPI(data) {
  return request({
    url: "/mp/articles?draft=false",
    method: "POST",
    data,
  });
}

// 获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: "/mp/articles",
    method: "GET",
    params,
  });
}
