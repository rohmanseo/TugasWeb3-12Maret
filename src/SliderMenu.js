import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { List, Typography } from 'antd';


const data = [
    'Home',
    'Feed',
    'Profile',
    'Logout',
  ];


class SliderMenu extends React.Component{


      render(){
          return(
            <div>
            <List
              header={<div>Header</div>}
              bordered
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  {item}
                </List.Item>
              )}
            />
           
          </div>
          );
      }
}
export default SliderMenu;