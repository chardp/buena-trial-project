import React from 'react';
import './ExtraImages.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ExtraImages = ({ extraImages, favoriteImages, handleFavorite }) => {

	// const handleFavoriteStyle = (imageId) => {
	// 	console.log(favoriteImages.includes(imageId));
	// }

	

	const renderedList = extraImages.map((image) => {
		// console.log(image.id);


		// const faveImageIds = favoriteImages.map((image) => {
		// 	const idArray = {};

		// 	idArray['image_id'] = image.image_id;

		// 	return idArray;
		// });

		// console.log(faveImageIds)
		//const faveIds = favoriteImages.map((fimage) => {fimage.image_id});
		//console.log(faveIds);
		// const check = favoriteImages.map((fimage) => {
		// 	if (fimage.id === image.id ) {
		// 		return 'faved'
		// 	} else {
		// 		return ''
		// 	}

		// });

		return (
			<Card className="photo" key={image.id}>
				<img alt={image.name} src={image.url} />
				<CardActions>
					<IconButton aria-label="add to favorites" key={image.id} onClick={() => handleFavorite(image.id)}>
			          <FavoriteIcon />
			        </IconButton>
				</CardActions>
			</Card>
		);
	});

	return(
		<div className="extras">
			{renderedList}
		</div>
	);
};

export default ExtraImages;