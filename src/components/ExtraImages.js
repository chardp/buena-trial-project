import React from 'react';
import dogApi from '../apis/dogApi';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  extras: {
  	padding: 10
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  faved: {
  	color: 'red'
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const ExtraImages = ({ extraImages }) => {
	const classes = useStyles();

	const handleFavorite = async (imageId) => {
		try {
	        const response = await dogApi.post('/favourites',
				{
					'image_id': imageId,
				}
			);
			if (response.data.message === 'SUCCESS') {}
			console.log(response.data)
		} catch (err) {
			console.error(err);
		}
	};

	return(
		<div className={classes.extras}>
			<GridList className={classes.gridList} cellHeight={180} cols={3.5}>
		        {extraImages.map((tile) => (
		         	<GridListTile key={tile.id}>
		            	<img src={tile.url} alt={tile.name} />
		            	<GridListTileBar title={tile.name} classes={{root: classes.titleBar,title: classes.title,}}
			              actionIcon={
			                <IconButton aria-label={`fave ${tile.name}`} onClick={() => handleFavorite(tile.id)}>
			                  <FavoriteIcon className={classes.title} />
			                </IconButton>
			              }
		            	/>
		          	</GridListTile>
		       	))}
		    </GridList>
		</div>
	);
};

export default ExtraImages;