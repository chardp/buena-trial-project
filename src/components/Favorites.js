import React, { useState, useEffect } from 'react';
import theDogApi from '../apis/theDogApi';


const Favorites = ({ getFavorites, newFavorite, favoriteImages }) => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		getFavorites();
	}, [newFavorite])

	// const getFavorites = async () => {
	// 	const response = await theDogApi.get('/favourites', {});

	// 	//setVideos(response.data.items);

	// 	console.log('load favorites', response.data);
	// 	setFavorites(response.data);
	// };

	return (
		


			favoriteImages.map((favorite) => {
				
					return (
						<img key={favorite.id} alt={favorite.name} src={favorite.image.url} width="100" />
					);
			
			})
			
		
	);
};

export default Favorites;