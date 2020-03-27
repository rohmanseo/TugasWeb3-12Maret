import React, { Component } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button} from 'antd';
import { Link } from "react-router-dom";


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

class Header extends React.Component {
    render(){
    return(
        <>
        <Row className="myHeader" align="middle">
            <Col span={2} offset={1}><Link to="/">WShare</Link></Col>
            <Col span={12}><SearchBox /></Col>
            {/* <Col span={6} offset={3}><MainNav /></Col> */}
         </Row>
        </>
    );
    }
}
export default Header;
