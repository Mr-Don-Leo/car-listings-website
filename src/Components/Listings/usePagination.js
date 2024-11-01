import { useState, useEffect } from 'react'

const usePagination = (filteredListings, listingsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1)

	const totalPages = Math.ceil(filteredListings.length / listingsPerPage)
	const indexOfLastListing = currentPage * listingsPerPage
	const indexOfFirstListing = indexOfLastListing - listingsPerPage
	const currentListings = filteredListings.slice(
		indexOfFirstListing,
		indexOfLastListing
	)

	const handleClick = (event) => {
		setCurrentPage(Number(event.target.id))
	}

	return [
		currentPage,
		totalPages,
		currentListings,
		handleClick,
		setCurrentPage,
	]
}

export default usePagination
