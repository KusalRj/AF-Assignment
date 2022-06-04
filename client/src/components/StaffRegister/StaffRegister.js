import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const StaffSignup = () => {  //registration form
	const [data, setData] = useState({
		S_name: "",
		email: "",
		position: "",
		password: ""
	});
	const [error, setError] = useState("");
	//const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8082/Register/addStaff";
			const { data: res } = await axios.post(url, data);
			// navigate("/S_login");//wenas karapan 
			alert("Staff added")
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


	return (
		<div className="container">
			
				
				
					<form className="" onSubmit={handleSubmit}>

						<h1>Create Your Account</h1>

						<div className="mb-3">
						<label htmlFor="S_name" className="form-label">Enter Name</label>
						<input
							type="text"
							placeholder="Enter your name"
							name="S_name"
							onChange={handleChange}
							value={data.S_name}
							required
							className="form-control"
						/>
						</div>
						<div className="mb-3">
						<label htmlFor="email" className="form-label">Enter Email</label>
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="form-control"
						/>
						</div>
						<div className="mb-3">
						<label htmlFor="position" className="form-label">Enter Position</label>
						<input
							type="position"
							placeholder="Enter your position"
							name="position"
							onChange={handleChange}
							value={data.position}
							required
							className="form-control"
						/>
						</div>
						<div className="mb-3">
						<label htmlFor="password" className="form-label">Enter Password</label>
						<input
							type="password"
							placeholder="Please enter valid Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="form-control"
						/>
						</div>

						{error && <div className="">{error}</div>}
						<button type="submit" className="btn btn-primary">
							Sign Up
						</button>

					</form>
				
			
		</div>
	);
};

export default StaffSignup;