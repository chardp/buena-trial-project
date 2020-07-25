import React, { useState, useEffect } from 'react';
import dogApi from '../apis/dogApi';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Loader from './Loader';

const useStyles = makeStyles({
	grid: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
  		gap: '10px 10px',
  		marginTop: 20
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
	noResults: {
		padding: '20px 0',
	}
});

const Favorites = () => {	
	const [favoriteImages, setFavoriteImages] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const classes = useStyles();	

	useEffect(() => {
		getFavorites();
	}, [])

	const getFavorites = async () => {
		try {
			const response = await dogApi.get('/favourites', {});

			setFavoriteImages(response.data);
			setIsLoaded(true);

		} catch(err) {
			console.log('no results')
		}
	};

	const renderedView = (
		<div className={classes.grid}>
  			{favoriteImages.map((favorite) => {
				return (
					<div key={favorite.id} className={classes.gridItem}>
		      			<img className={classes.img} key={favorite.id} alt={favorite.name} src={favorite.image.url} />
		    		</div>						
				);
			})}
		 </div>
	);

	const emptyView = (<div className={classes.noResults}>You currently have no favorite images.</div>);

	return (
		<Container className={classes.pad}>
			<Typography  variant='h4' component='h1'>Favorite Images</Typography>
      		{ isLoaded ? (favoriteImages.length ? renderedView : emptyView) : <Loader /> }
		</Container>
	);
};

export default Favorites;