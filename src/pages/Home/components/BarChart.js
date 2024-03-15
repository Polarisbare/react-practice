/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-11 09:48:56
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-15 11:15:12
 * @FilePath: /react-practice/src/pages/Home/components/BarChart.js
 * @Description: 柱状图组件
 */
import * as echarts from "echarts";
import { useEffect, useRef } from "react";
const BarChart = ({ title }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title: { text: title },
      xAxis: {
        type: "category",
        data: ["Vue", "React", "Go"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 40, 70, 80, 100, 110, 130],
          type: "bar",
        },
      ],
    };
    // 使用图表参数完成渲染
    option && myChart.setOption(option);
  }, [title]);
  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
};
export default BarChart;
