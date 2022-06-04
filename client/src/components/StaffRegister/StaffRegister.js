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
			const url = "http://localhost:8070/Register/addStaff";
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
		<div className="">
			
				
				<div className="">
					<form className="" onSubmit={handleSubmit}>

						<h1>Create Your Account</h1>

						<input
							type="text"
							placeholder="Enter your name"
							name="S_name"
							onChange={handleChange}
							value={data.S_name}
							required
							className=""
						/>
						<input
							type="text"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className=""
						/>
						<input
							type="position"
							placeholder="Enter your position"
							name="position"
							onChange={handleChange}
							value={data.position}
							required
							className=""
						/>
						<input
							type="password"
							placeholder="Please enter valid Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className=""
						/>

						{error && <div className="">{error}</div>}
						<button type="submit" className="">
							Sign Up
						</button>

					</form>
				</div>
			
		</div>
	);
};

export default StaffSignup;