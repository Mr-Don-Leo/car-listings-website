import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/HomePage/Home'
import Listings from './Components/Listings/Listings'
import Favourites from './Components/Favourites/Favourites'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="AppNavBar">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/listings" element={<Listings />} />
						<Route path="/favourites" element={<Favourites />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
