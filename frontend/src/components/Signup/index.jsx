import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import Popup from "reactjs-popup";
import React from 'react';
//import 'reactjs-popup/dist/index.css';


const Signup = () => {
	const [show, setShow] = useState(false);
	const [isAccepted, setIsAccepted] = useState(false);


    const handleAccept = event => {
		if(event.target.checked){
        console.log("checked")
		}
		else{
		console.log("not checked")						
	}
		setIsAccepted(current => !current);
}
	const handleShow = () => setShow(true);
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
        username: "",
		email: "",
		password: "",
        gender: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if(isAccepted === true){
			const url = "http://localhost:3000/api/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
			}
			else{
				setError("Please accept the terms and conditions")
			}
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
		<div >
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Username"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
                        <input
							type="text"
							placeholder="Gender"
							name="gender"
							onChange={handleChange}
							value={data.gender}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<div>
						<input type="checkbox" 
						value ={isAccepted}
						onChange={handleAccept}
						name = "isAccepted"
						/>
						<Popup trigger={<NavLink
                         className="navbar-item"
						 size="small"
                         activeClassName="is-active"
                         onClick={handleShow}
                         exact
                        >
	                    View Terms & Conditions
                        </NavLink>} position="center center">
						<div >
			<form  className="course_container">
                <h2>Terms & Conditions</h2>
				<div className="course_container div">
					Please read the following terms and conditions carefully before
					accepting them. By accepting these terms and conditions, you
					agree to be bound by them. If you do not agree to these terms
					and conditions, you must not use this website.
                </div>
				<br></br>
					<div className="course_container div">
				   -Refund Policy:
				   The refund request will be considered only if the student has no progress in the course.
				   If the student showed any progress of any form in the course, no refund will be provided.
				   If the student has not attended any class, the refund will be provided within 7 days of the request.
				   </div>
			<br></br>
				   <div className="course_container div">
				   -Payment Policy:
				   Any payment must be done through the online payment gateway.
				   Any payment must be done in advance in order to access the desired courses.
				   The payment will be done in the form of credit card, debit card, or net banking.
				   </div>
					<h2>Thank you for choosing our website!</h2>
			</form>
		</div>
                        </Popup>
						</div>
						<button type="submit" className={styles.green_btn} >
							Sign Up
						</button>
					</form>
				</div>
			</div>
		<div>
		
		</div>
								
		</div>
	);
};

export default Signup;