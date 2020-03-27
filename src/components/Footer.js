import React, { Component } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button, Divider,Card,Modal } from 'antd';
import { Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
    return(
        <>
            <Row justify="end" align="middle" className="myFooter">
                <Col span={6}>
                    <ul>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </Col>
            </Row>
        </>
    );
    }
}

export default Footer;