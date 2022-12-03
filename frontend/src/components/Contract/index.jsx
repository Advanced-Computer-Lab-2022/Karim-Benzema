import { useState } from "react";
//import axios from "axios";
import styles from "./styles.module.css";

const Contract = () => {
	const [msg, setMsg] = useState("");
	//const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		//setError(error.response.data.message);
		setMsg("Contract Accepted");
			
	};

	return (
		<div className={styles.container}>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Contract</h1>
                <h2>Terms & Conditions</h2>
				<h3>The website owns all the rights for the materials uploaded on the platform
                 and any user is not allowed to use these materials for any commercial purpose.
                 The percentrage taken by the company for each video per registered trainee is 10%
                 .This percentrage is fixed for all the videos uploaded on the platform including discounted ones.
                </h3>
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.green_btn}>
					Accept
				</button>
			</form>
		</div>
	);
};

export default Contract;