import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <h1>this is home page</h1>
            <Link to="/students">
                <button className="btn btn-primary">Student List</button>
            </Link>
            <br/>
            <br/>
            <Link to="/staff">
                <button className="btn btn-primary">Staff List</button>
            </Link>
        </div>
    )
}

export default Home;