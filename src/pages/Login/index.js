/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-06 09:05:09
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-06 10:45:55
 * @FilePath: /react-practice/src/pages/Login/index.js
 * @Description: Login
 */
import { Card, Form, Input, Checkbox, Button } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    console.log("=========>", values);
    dispatch(fetchLogin(values));
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name="mobile"
            // 多条校验 串行 一条一条过
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
              {
                pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
                message: "请输入正确的手机号!",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码!",
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
