export const toggleFavorite = (carID, favorites) => {
	if (favorites.includes(carID)) {
		return favorites.filter((id) => id !== carID)
	} else {
		return [...favorites, carID]
	}
}

export default toggleFavorite
