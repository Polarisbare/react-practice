/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-08 09:16:15
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-11 09:45:32
 * @FilePath: /react-practice/src/pages/Home/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const Home = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
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
  }, []);
  return (
    <div>
      <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
};
export default Home;
