import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Navbar";
import NavbarInst from "../navbarInst";
//import axios from "axios";
import styles from "./styles.module.css";

const Contract = () => {
	const [msg, setMsg] = useState("");
	const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
	const handleSubmit = async (e) => {
		e.preventDefault();
		setMsg("Contract Accepted");
			
	};

	return (
		<div className="contract">
			    <NavBar />
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Contract</h1>
                <h2>Terms & Conditions</h2>
				<h3>The website owns all the rights for the materials uploaded on the platform
                 and any user is not allowed to use these materials for any commercial purpose.
                 The percentrage taken by the company for each video per registered trainee is 10%
                 .This percentrage is fixed for all the videos uploaded on the platform including discounted ones.
                </h3>
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.green_btn} >
					Accept
				</button>
				<div className={styles.right}>
				    	<Link to={`/insthome?id=`+id}>
						<button type="button" className={styles.green_btn}>
							Continue
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Contract;