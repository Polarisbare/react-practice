/*
 * @Author: Lv Jingxin lv510987@163.com
 * @Date: 2024-03-08 09:17:25
 * @LastEditors: Lv Jingxin lv510987@163.com
 * @LastEditTime: 2024-03-15 09:16:12
 * @FilePath: /react-practice/src/pages/Article/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Link } from "react-router-dom";
import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  DatePicker,
  Select,
  Table,
  Tag,
  Space,
  Popconfirm,
} from "antd";
// 汉化包
import locale from "antd/es/date-picker/locale/zh_CN";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import img404 from "@/assets/error.png";
import { useChannel } from "@/hooks/useChannel";
import { getArticleListAPI } from "@/apis/article";
import { useEffect, useState } from "react";
import { delArticleAPI } from "@/apis/article";
const { Option } = Select;
const { RangePicker } = DatePicker;

const Article = () => {
  const { channelList } = useChannel();
  // 定义枚举
  const status = {
    1: <Tag color="warning">待审核</Tag>,
    2: <Tag color="green">审核通过</Tag>,
  };
  // 准备列数据
  const columns = [
    {
      title: "封面",
      dataIndex: "cover",
      width: 120,
      render: (cover) => {
        return (
          <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        );
      },
    },
    {
      title: "标题",
      dataIndex: "title",
      width: 220,
    },
    {
      title: "状态",
      dataIndex: "status",
      // 1 待审核 2审核通过
      render: (data) => status[data],
    },
    {
      title: "发布时间",
      dataIndex: "pubdate",
    },
    {
      title: "阅读数",
      dataIndex: "read_count",
    },
    {
      title: "评论数",
      dataIndex: "comment_count",
    },
    {
      title: "点赞数",
      dataIndex: "like_count",
    },
    {
      title: "操作",
      render: (data) => {
        return (
          <Space size="middle">
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
            <Popconfirm
              title="删除文章"
              description="确认删除吗"
              onConfirm={() => onConfirm(data)}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  // 准备表格body数据
  // const data = [
  //   {
  //     id: "8218",
  //     comment_count: 0,
  //     cover: {
  //       images: [],
  //     },
  //     like_count: 0,
  //     pubdate: "2019-03-11 09:00:00",
  //     read_count: 2,
  //     status: 2,
  //     title: "wkwebview离线化加载h5资源解决方案",
  //   },
  // ];
  // 筛选功能
  const [reqData, setReqData] = useState({
    status: "",
    channel_id: "",
    begin_pubdate: "",
    end_pubdate: "",
    page: 1,
    per_page: 4,
  });
  // 获取文章列表
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getList() {
      const res = await getArticleListAPI(reqData);
      setList(res.data.results);
      setCount(res.data.total_count);
    }
    getList();
  }, [reqData]);

  // 获取当前数据
  const onFinish = (formValue) => {
    setReqData({
      ...reqData,
      channel_id: formValue.channel_id,
      status: formValue.status,
      begin_pubdate: formValue.date[0].format("YYYY-MM-DD"),
      end_pubdate: formValue.date[1].format("YYYY-MM-DD"),
    });
    // 重新渲染table useEffect依赖项变化也变化
  };
  const onPageChange = (page) => {
    console.log("=========>", page);
    setReqData({
      ...reqData,
      page,
    });
  };
  // 删除
  const onConfirm = async (data) => {
    await delArticleAPI(data.id);
    setReqData({
      ...reqData,
    });
  };
  return (
    <div>
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: "文章列表" },
            ]}
          />
        }
        style={{ marginBottom: 20 }}
      >
        <Form initialValues={{ status: "" }} onFinish={onFinish}>
          <Form.Item label="状态" name="status">
            <Radio.Group>
              <Radio value={""}>全部</Radio>
              <Radio value={0}>草稿</Radio>
              <Radio value={2}>审核通过</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="频道" name="channel_id">
            <Select
              placeholder="请选择文章频道"
              defaultValue="lucy"
              style={{ width: 120 }}
            >
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="日期" name="date">
            {/* 传入locale属性 控制中文显示*/}
            <RangePicker locale={locale}></RangePicker>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
              筛选
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* 表格区域 */}
      <Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={list}
          pagination={{
            total: count,
            pageSize: reqData.per_page,
            onChange: onPageChange,
          }}
        />
      </Card>
    </div>
  );
};

export default Article;
