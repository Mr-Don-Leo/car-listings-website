import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
	return (
		<nav className="navbar">
			<ul className="navbar-links">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/listings">Listings</Link>
				</li>
				<li>
					<Link to="/favourites">Favourites</Link>
				</li>
			</ul>
			<h1 className='nav-heading'>Dubizzle</h1>
		</nav>
	)
}

export default NavBar
