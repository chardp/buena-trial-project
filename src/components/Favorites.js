import React, { useState, useEffect } from 'react';
import theDogApi from '../apis/theDogApi';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
  		gap: '10px 10px',
  	
	},
	gridItem: {
		overflow: 'hidden'
	},
	pad: {
		padding: 10
	},
	img: {
		width: '100%'
	},
});

const Favorites = () => {	
	const [favoriteImages, setFavoriteImages] = useState([]);
	
	const classes = useStyles();	

	useEffect(() => {
		getFavorites();
	}, [])

	const getFavorites = async () => {
		const response = await theDogApi.get('/favourites', {});

		setFavoriteImages(response.data);
	};

	return (
		<Container className={classes.pad}>
			<Typography  variant='h4' component='h1'>Favorite Images</Typography>
      		
      		<div className={classes.grid}>
      			{favoriteImages.map((favorite) => {
					return (
						<div key={favorite.id} className={classes.gridItem}>
		          			<img className={classes.img} key={favorite.id} alt={favorite.name} src={favorite.image.url} />
		        		</div>						
					);
				})}
		       
		    </div>

		</Container>
	);
};

export default Favorites;