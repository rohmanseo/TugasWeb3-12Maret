import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;


class NavBar extends React.Component {

    state = {
      current: 'mail',
    };
  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="feed">
            Feed
          </Menu.Item>
          <Menu.Item key="search">
            Search
          </Menu.Item>
        </Menu>  
      );
    }
  }

  export default NavBar;