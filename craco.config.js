/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:26:36
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 09:29:03
 * @FilePath: /react-practice/craco.config.js
 * @Description: craco配置
 */
// 扩展webpack的配置
const path = require("path");
module.exports = {
  webpack: {
    // 配置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
