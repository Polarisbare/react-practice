/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-07 09:04:05
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-07 09:12:28
 * @FilePath: /react-practice/src/utils/token.js
 * @Description: 封装和token相关的方法
 */
const TOKENKEY = "token_key";
function setToken(token) {
  localStorage.setItem(TOKENKEY, token);
}
function getToken() {
  return localStorage.getItem(TOKENKEY);
}
function retmoveToken() {
  localStorage.removeItem(TOKENKEY);
}
export { setToken, getToken, retmoveToken };
