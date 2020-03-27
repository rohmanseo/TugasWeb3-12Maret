import React,{ Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Col,Input, Button, Divider,Card,Modal } from 'antd';
import "../App.css";
import "antd/dist/antd.css";
const { TextArea } = Input;

const Content = () => {
    return(
        <div>
        <Row justify="center" style={{marginLeft:'50px',marginRight:'50px'}} >
            <Col>
            <h1>Contact Us</h1>

            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <dl>
            <dt>Definition list</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</dd>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</dd>
            </dl>
            <dl>
            <dt>Definition list</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</dd>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</dd>
            </dl>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            <TextArea
                placeholder="Give us your feedback for improving this website"
                autoSize={{ minRows: 10, maxRows: 20 }}
                style={{width:'900px',display:'block'}}
                />
        <Button type="primary">Send</Button>
            </Col>
        </Row>
        </div>
    );
}

class ContactUs extends Component{
    render(){
        return(
            <>
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}

export default ContactUs;