import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Logout
      </a>
    ),
  },
];
const AvatarComponent = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <Avatar
          src="./logo.png"
          size={50}
          style={{ borderRadius: "100%", objectFit: "cover" }}
        />
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);
export default AvatarComponent;
