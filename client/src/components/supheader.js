import React from "react";

function Header(){
    return(
        
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Supervisor</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/topicview">Topic Accepting</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/view">Marking</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/add">Add Marks</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/chat">ChatBox</a>
                </li>

                <li al className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mr. Lucid 
          </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Sign Out</a></li>
                
            </ul>
            </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
export default Header;