import { useState,useMemo } from 'react';
import React from 'react';
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ChangePasswordCT =()=> {
  const [password, setPassword] = useState('')
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const [error,setError] = useState(null)
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://localhost:3000/api/ct/changePassword/${id}`;
			const {data} = await axios.patch(url, {password});
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
        setMsg("");
			}
		}
	};

return(
	<div className={styles.container}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Change Password</h1>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Submit
						</button>
						<div className={styles.right}>
				    	<Link to="/login">
						<button type="button" className={styles.green_btn}>
							Login
						</button>
					</Link>
				</div>
					</form>
				</div>
  
)
}
export default ChangePasswordCT