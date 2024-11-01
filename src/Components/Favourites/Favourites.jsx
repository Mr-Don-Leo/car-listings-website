import { useState, useEffect } from 'react'
import listingData from '../../Assets/listing_data.json'
import { toggleFavorite } from '../Listings/favoriteUtils'
import './../Listings/Listings.css'

const Favourites = () => {
	const [favorites, setFavorites] = useState(() => {
		const savedFavorites = localStorage.getItem('favorites')
		return savedFavorites ? JSON.parse(savedFavorites) : []
	})

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	const handleToggleFavorite = (carID) => {
		setFavorites((prevFavorites) => toggleFavorite(carID, prevFavorites))
	}

	const favoriteListings = listingData.filter((car) =>
		favorites.includes(car.ID)
	)

	return (
		<div className="listings">
			<h1 className="listings-title">Favourites Page</h1>
			<table className="listings-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Year</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{favoriteListings.map((car, index) => (
						<tr key={`${car.ID}-${index}`}>
							<td>{car.ID}</td>
							<td>{car.Brand}</td>
							<td>{car.Model}</td>
							<td>{car.Year}</td>
							<td>AED {car.Price}</td>
							<td>
								<button
									className="favorite-button favorited"
									onClick={() => handleToggleFavorite(car.ID)}
								>
									Unfavorite
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Favourites
