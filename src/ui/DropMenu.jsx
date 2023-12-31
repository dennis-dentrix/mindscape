import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import supabase from "../services/Supabase";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    label: <Link to="/update">Profile</Link>,
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Settings
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: <Link to="/patients">Admin</Link>,
  },
  {
    key: "4",
    label: <div onClick={() => supabase.auth.signOut()}>Logout</div>,
  },
];
const DropMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropMenu;
