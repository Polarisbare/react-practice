/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-12 09:46:07
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-12 09:47:19
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
