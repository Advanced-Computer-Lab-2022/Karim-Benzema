import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
        <div className="container">
        </div>
        <div className="navbar__links">
            <Link to="/">
            <h1>test</h1>
            </Link>
        </div>
        </header>
    );

}
export default NavBar;