import React, { Component } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button, Divider,Card,Modal } from 'antd';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const MainIntro = () => {
    return(
        <>
            <Row justify="center" align="middle" className="mainIntro">
                <Col span={8}>
                 <h1>The best free photos for everyone.</h1>
                </Col>
            </Row>
        </>
    );
}

const MainCategory = () => {
    return(
        <>
        <Row justify="center" className="mainCategory">
            <Col>
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Nature</a></li>
                    <li><a href="#">Fresh</a></li>
                    <li><a href="#">Plant</a></li>
                    <li><a href="#">Animal</a></li>
                </ul>
            </Col>
        </Row>
        <Divider />
        </>
    );
}

class Homepage extends Component{
    render(){
        return(
            <>
            <Header />
            <MainIntro />
            <MainCategory />
            <MainContent />
            <Footer />
            </>
        );
    }
}

export default Homepage;