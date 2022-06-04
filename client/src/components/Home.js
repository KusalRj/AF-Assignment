import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="container">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <Link to="/students">
                        <button className="btn btn-primary">
                            <div className="col-5">
                                    <div className="p-5"> Student List</div>
                                </div>
                        </button>
                    </Link>
                    <Link to="/staff">
                        <button className="btn btn-primary">
                            <div className="col-5">
                                <div className="p-5">Staff List</div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/panels">
                        <button className="btn btn-primary">
                            <div className="col-5">
                                <div className="p-5">Allocate Panels</div>
                            </div>
                        </button>
                    </Link>
                    <Link to="#">
                        <button className="btn btn-primary">
                            <div className="col-5">
                                <div className="p-5">File Upload</div>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default Home;