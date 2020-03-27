import React, { Component } from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";

class App extends Component{
    render(){
        return(
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/home" component={Homepage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/faq" component={FAQ}/>
                    <Route path="/contact" component={ContactUs}/>
                </Switch>
            </Router>
        );
    }
}
export default App;
