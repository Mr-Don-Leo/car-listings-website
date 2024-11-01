import { Link } from 'react-router-dom'
import listingData from './../../../Assets/listing_data.json'
import './ListingPreview.css'

function getRandomListings(data, count = 5) {
	const shuffled = [...data].sort(() => 0.5 - Math.random())
	return shuffled.slice(0, count)
}

function ListingPreview() {
	const randomListings = getRandomListings(listingData)

	return (
		<div className="list-preview">
			<h2 className="listing-preview-title">
				Here are some of the cars available:
			</h2>
			<table className="listings-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Year</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{randomListings.map((car, index) => (
						<tr key={`${car.ID}-${index}`}>
							<td>{car.ID}</td>
							<td>{car.Brand}</td>
							<td>{car.Model}</td>
							<td>{car.Year}</td>
							<td>AED {car.Price}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Link to="/listings" className="view-all-listings">
				<button className="view-all-listings">
					View all listings
				</button>
			</Link>
		</div>
	)
}

export default ListingPreview
