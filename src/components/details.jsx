import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Details extends Component {
    state = {}
    render() {
        return <div>
            <span>Auf dieser Seite finden Sie alle Details! </span>
            <div>
                <Link className="main-button" to="/"><button >Zurück zur Hauptseite</button></Link>
            </div>
        </div>;
    }
}

export default Details;