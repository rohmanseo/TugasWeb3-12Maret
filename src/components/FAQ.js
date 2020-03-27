import React,{ Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Col,Collapse, Button, Divider,Card,Modal } from 'antd';
import "../App.css";
import "antd/dist/antd.css";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Content = () => {
    return(
        <div>
        <Row justify="center" style={{marginLeft:'50px',marginRight:'50px'}} >
            <Col>
            <h1>FAQ</h1>
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
            <Collapse accordion>
            <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
            </Panel>  
            <Panel header="This is panel header 1" key="4">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="5">
            <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="6">
            <p>{text}</p>
            </Panel>
        </Collapse>
        
            </dl>
            </Col>
        </Row>
        </div>
    );
}

class FAQ extends Component{
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

export default FAQ;