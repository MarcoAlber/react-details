import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Main extends Component {
    state = {}
    render() {
        return <div>
            <span>Für mehr Details klicken Sie </span>
            <Link className="details-link" to="/details">hier</Link>
        </div>;
    }
}

export default Main;