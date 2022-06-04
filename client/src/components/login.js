import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";

function Login() {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const UserName = (event) => {
        event.preventDefault();
        setUserName(event.target.value);
    }

    const Password = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }

    const LoginSubmit = (event) => {
        event.preventDefault();

        const login = {
            userName,
            password
        }
        console.log(login);

        axios.post("http://localhost:8070/login/check", login).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <h1>Staff Login</h1>
            <form className="form-control" onSubmit={(event) => LoginSubmit(event)}>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control" onChange={(event) => UserName(event)} placeholder="User Name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={(event) => Password(event)} placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
