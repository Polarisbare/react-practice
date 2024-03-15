/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-08 09:18:02
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-15 09:38:32
 * @FilePath: /react-practice/src/pages/Publish/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";
import "./index.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { createArticleAPI, getArticleById } from "@/apis/article";
import { useChannel } from "@/hooks/useChannel";

const { Option } = Select;

const Publish = () => {
  // 获取列表
  const { channelList } = useChannel();
  // 提交表单
  const onFinish = (formValue) => {
    console.log("=========>", formValue);
    if (imagesList.length !== imageType) return message.warning("数量不匹配");
    const { title, content, channel_id } = formValue;
    // 按照接口文档处理收集的数据
    const reqData = {
      title,
      content,
      cover: {
        type: imageType,
        images: imagesList.map((item) => item.response.data.url),
      },
      channel_id,
    };
    createArticleAPI(reqData);
  };
  // 上传图片
  const [imagesList, setImagesList] = useState([]);
  const onChange = (value) => {
    console.log(value);
    setImagesList(value.fileList);
  };
  // 切换封面类型
  const [imageType, setImagesType] = useState(0);
  const onTypeChange = (e) => {
    setImagesType(e.target.value);
  };

  // 数据回填
  const [searchParams] = useSearchParams();
  const articleId = searchParams.get("id");
  // 获取实例
  const [form] = Form.useForm();
  useEffect(() => {
    async function getArticleDetail() {
      const res = await getArticleById(articleId);
      form.setFieldsValue(res.data);
    }
    getArticleDetail();
  }, [articleId, form]);
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: "发布文章" },
            ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {/* listType 决定文件框的外观样式
            showUploadList 控制显示上传列表
             */}
            {imageType > 0 && (
              <Upload
                listType="picture-card"
                showUploadList
                action={"http://geek.itheima.net/v1_0/upload"}
                name="image"
                onChange={onChange}
                maxCount={imageType}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            {/* 富文本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Publish;
