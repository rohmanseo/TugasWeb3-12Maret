import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Layout } from "antd";
import NavBar from "./NavBar";
import SliderMenu from "./SliderMenu";
import Feed from "./Feed";

const { Header, Footer, Sider, Content } = Layout;

const MyLayout = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Layout>
        <Sider>
          <SliderMenu />
        </Sider>
        <Content>
          <Feed />
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  );
};

ReactDOM.render(<MyLayout />, document.querySelector("#root"));
serviceWorker.unregister();
