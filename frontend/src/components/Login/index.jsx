import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            if(res.role === 'it'){
                window.location = `/ithome?id=`+res.id;
            }
            else if(res.role === 'admin'){
                window.location = `/adminhome?id=`+res.id;
            }else if(res.role === 'ct'){
                window.location = `/cthome?id=`+res.id;
            }else{
                if(res.flag === false){
				window.location = `/Contract?id=`+res.id;
			}
			else{
				window.location = `/instHome?id=`+res.id;
			}
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
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}
						</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
					<div>
						<NavLink
                         className="navbar-item"
                         activeClassName="is-active"
                         to="/ForgotPassword"
                         exact
                        >
	                    Forgot password?
                        </NavLink>
						</div>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;