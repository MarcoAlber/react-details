import React, { Component } from "react";
import Details from "./components/details";
import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";

class App extends Component {
    state = {}
    render() {
        return <React.Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App;