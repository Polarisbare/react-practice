/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-14 09:08:39
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-14 09:27:29
 * @FilePath: /react-practice/src/hooks/useChannel.js
 * @Description: 获取频道列表逻辑
 */
import { useEffect, useState } from "react";
import { getChannelAPI } from "@/apis/article";
function useChannel() {
  // 获取列表
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const getChannelList = async () => {
      const res = await getChannelAPI();
      setChannelList(res.data.channels);
    };
    getChannelList();
  }, []);
  return {
    channelList,
  };
}
export { useChannel };
