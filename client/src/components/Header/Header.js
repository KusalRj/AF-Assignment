/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";

function Header(){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#" style={{color:"red"}}>Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/viewP" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/view" className="nav-link">View</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-link">Add Evaluation Topic</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addEvP" className="nav-link">Add Marking</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/viewMarks" className="nav-link">view Marking</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/addStaff" className="nav-link">Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Header;