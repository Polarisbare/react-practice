/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:04:51
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-08 09:32:22
 * @FilePath: /react-practice/src/pages/Layout/index.js
 * @Description: Layout
 */
// 测试token
import { Layout, Menu, Popconfirm } from "antd";
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.scss";
import "normalize.css";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
];

const GeekLayout = () => {
  const navigator = useNavigate();
  const onMenuClick = (v) => {
    console.log("=========>v", v);
    navigator(v.key);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">练习</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["/"]}
            items={items}
            onClick={onMenuClick}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二级路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default GeekLayout;
