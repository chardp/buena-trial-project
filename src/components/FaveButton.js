import React, { useState } from 'react';
import dogApi from '../apis/dogApi';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  icon: {
    color: 'white',
  },
  faved: {
  	color: 'red'
  },
});

const FaveButton = ({ image }) => {
	const [faved, setFaved] = useState(false);
	
	const classes = useStyles();

	const handleFavorite = async (imageId) => {
		try {
	        const response = await dogApi.post('/favourites',
				{
					'image_id': imageId,
				}
			);
			if (response.data.message === 'SUCCESS') {
				setFaved(true)
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<IconButton aria-label={`fave ${image.name}`} onClick={() => handleFavorite(image.id)}>
			<FavoriteIcon className={faved ? classes.faved : classes.icon} />
		</IconButton>
	);
};

export default FaveButton;