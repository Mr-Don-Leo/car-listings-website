import { useState, useEffect } from 'react'
import toggleFavorite from './favoriteUtils'

const useFavorites = () => {
	const [favorites, setFavorites] = useState(() => {
		const savedFavs = localStorage.getItem('favorites')
		return savedFavs ? JSON.parse(savedFavs) : []
	})

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	const handleToggleFavorite = (carID) => {
		setFavorites((prevFavorites) => toggleFavorite(carID, prevFavorites))
	}

	return [favorites, handleToggleFavorite]
}

export default useFavorites
