import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Popup from 'reactjs-popup';
import { NavLink } from "react-router-dom";

const Terms = () => {
	const [msg, setMsg] = useState("");
	const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
	const handleSubmit = async (e) => {
		e.preventDefault();
		setMsg("Terms & Conditions Accepted Successfully!");
			
	};

	return (
		<Popup trigger={<NavLink
			className="navbar-item"
			size="small"
			activeClassName="is-active"
			to="/Terms&Conditions"
			exact
		   >
		   View Terms & Conditions
		   </NavLink>} position="right center">
		<div className={styles.container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
                <h2>Terms & Conditions</h2>
				<h3>
					Please read the following terms and conditions carefully before
					accepting them. By accepting these terms and conditions, you
					agree to be bound by them. If you do not agree to these terms
					and conditions, you must not use this website.
                </h3>
				<h4> 
					<div>
				   -Refund Policy:
				   <div>
				   The refund request will be considered only if the student has no progress in the course.
				   </div>
				   <div>
				   If the student showed any progress of any form in the course, no refund will be provided.
				   </div>
				   <div>
				   If the student has not attended any class, the refund will be provided within 7 days of the request.
				   </div>
				   </div>
				   <div>
				   -Payment Policy:
				   <div>
				   Any payment must be done through the online payment gateway.
				   </div>
				   <div>
				   Any payment must be done in advance in order to access the desired courses.
				   </div>
				   <div>
				   The payment will be done in the form of credit card, debit card, or net banking.
				   </div>
				   </div>
				</h4>
				<h2 >
					Thank you for choosing our website!
					</h2>
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.green_btn} >
					Accept
				</button>
				<div className={styles.right}>
				    	<Link to={`/Signup`}>
						<button type="button" className={styles.green_btn}>
							Back
						</button>
					</Link>
				</div>
			</form>
		</div>
		</Popup>
	);
};

export default Terms;