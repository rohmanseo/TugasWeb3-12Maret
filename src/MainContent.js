import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col,Input, Button, Divider,Card,Modal } from 'antd';

class CardContent extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
          totalDownload : props.count
        }
    
        this.handleClick = this.handleClick.bind(this)
    
      }

      handleClick(){
        this.setState(state => ({
          totalDownload : parseInt(this.state.totalDownload,10) + 1
        }))
        }

        render(){
            return(    
                <>
        <Card>
            <div class="contentContainer">
            <img src={this.props.image} />
            <div class ="contentName">{this.props.name}</div>
            <div class="downloadButton downloadInfo" onClick={this.handleClick}>
                <span><Button type="primary">Download</Button></span>
            </div>
            <div class="totalDownload downloadInfo">
                <span><img src="image/download.png"/></span>
                <span>{this.state.totalDownload}</span>
            </div>
          </div>   
        </Card>
        </>
        );
        }
}

const contentData = [

    {count:"100", image:"image/animal.jpg", name: "abc"},
    {count:"200", image:"image/fresh.jpg", name:"abdc"},
    {count:"130", image:"image/nature4.jpg", name: "abc"},
    {count:"300", image:"image/nature2.jpg", name:"abdc"},
    {count:"120", image:"image/castle.jpg", name:"asbc"},
    {count:"220", image:"image/nature1.jpg", name:"asbc"},

];

class MainContent extends React.Component {

render(){
    return (
      <>
        <Row justify="center" align="middle" gutter={10} className="mainContent">
        {
            contentData.map((obj,index)=>{

                return (
                     <Col span={5}>
                     <CardContent count={obj.count} image={obj.image} name={obj.name}/>
                   </Col>  
                )
            })
        }
        </Row>
      </>
    );
}
}

export default MainContent;