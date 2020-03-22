import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button} from 'antd';


const { Search } = Input;

const SearchBox = () => {
    return(
        
        <Search
          placeholder="Search for free photos"
          enterButton="Search"
          size="large"
        />
        
    );
}

const MainNav = () => {
    return(
        <ul>
            <li><a href="#">Explore</a></li>
            <li><a href="#">License</a></li>
            <li><a href="#">Upload</a></li>
            <li><Button type="primary" size={"large"}>Join</Button></li>
        </ul>
    );
}

class Header extends React.Component {
    render(){
    return(
        <>
        <Row className="myHeader" align="middle">
            <Col span={2} offset={1}>WShare</Col>
            <Col span={12}><SearchBox /></Col>
            <Col span={6} offset={3}><MainNav /></Col>
         </Row>
        </>
    );
    }
}
export default Header;
