import { Link } from 'react-router-dom'
import React from 'react';

const NavBar = () => {
    return (
        <header>
        <div className="container">
        </div>
        <div className="navbar__links">
            <Link to="/">
            <h1>Welcome to the best learning website!!</h1>
            </Link>
        </div>
        </header>
    );

}
export default NavBar;
