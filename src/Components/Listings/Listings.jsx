import React, { useState, useEffect } from 'react'
import listingData from './../../Assets/listing_data.json'
import './Listings.css'
import useFavorites from './useFavorites'
import usePagination from './usePagination'

const Listings = () => {
	const listingsPerPage = 25
	const [sortOrder, setSortOrder] = useState('asc')
	const [selectedBrand, setSelectedBrand] = useState('')
	const [favorites, handleToggleFavorite] = useFavorites()

	const sortedListings = [...listingData].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.Brand.localeCompare(b.Brand)
		} else {
			return b.Brand.localeCompare(a.Brand)
		}
	})

	const filteredListings = selectedBrand
		? sortedListings.filter((car) => car.Brand === selectedBrand)
		: sortedListings

	const [
		currentPage,
		totalPages,
		currentListings,
		handleClick,
		setCurrentPage,
	] = usePagination(filteredListings, listingsPerPage)

	const handleSort = () => {
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
	}

	const handleBrandChange = (event) => {
		setSelectedBrand(event.target.value)
		setCurrentPage(1) // Reset to first page when filtering
	}

	const uniqueBrands = [...new Set(listingData.map((car) => car.Brand))]

	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	return (
		<div className="listings">
			<h1 className="listings-title">Car Listings</h1>
			<button onClick={handleSort} className="sort-button">
				Sort by Brand (
				{sortOrder === 'asc' ? 'Ascending' : 'Descending'})
			</button>
			<div className="filter">
				<label className="filter-by-brand">Filter by Brand:</label>
				<select
					className="brand-filter"
					id="brand-filter"
					value={selectedBrand}
					onChange={handleBrandChange}
				>
					<option value="">All Brands</option>
					{uniqueBrands.map((brand) => (
						<option key={brand} value={brand}>
							{brand}
						</option>
					))}
				</select>
			</div>
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
					{currentListings.map((car, index) => (
						<tr key={`${car.ID}-${index}`}>
							<td>{car.ID}</td>
							<td>{car.Brand}</td>
							<td>{car.Model}</td>
							<td>{car.Year}</td>
							<td>AED {car.Price}</td>
							<td>
								<button
									className={`favorite-button ${favorites.includes(car.ID) ? 'favorited' : ''}`}
									onClick={() => handleToggleFavorite(car.ID)}
								>
									{favorites.includes(car.ID)
										? 'Unfavorite'
										: 'Favorite'}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination">
				{pageNumbers.map((number) => (
					<button
						key={number}
						id={number}
						onClick={handleClick}
						className={currentPage === number ? 'active' : ''}
					>
						{number}
					</button>
				))}
			</div>
		</div>
	)
}

export default Listings
