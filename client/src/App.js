import React, { Component } from 'react';
import Main from "./components/Main";
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
    render () {
        return (
            <Router>
            <div>
                <Route exact path="/" component={Main} />
            </div>
        </Router>
        );
    }
}


export default App;