import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button, Divider,Card,Modal } from 'antd';



class Footer extends React.Component{
    render(){
    return(
        <>
            <Row justify="end" align="middle" className="myFooter">
                <Col span={6}>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Feedback</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </Col>
            </Row>
        </>
    );
    }
}

export default Footer;