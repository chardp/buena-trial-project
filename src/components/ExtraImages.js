import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FaveButton from './FaveButton';

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
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const ExtraImages = ({ extraImages }) => {
	const classes = useStyles();

	return(
		<div className={classes.extras}>
			<GridList className={classes.gridList} cellHeight={180} cols={2.5}>
		        {extraImages.map((image) => (
		         	<GridListTile key={image.id}>
		            	<img src={image.url} alt={image.name} />
		            	<GridListTileBar title={image.name} classes={{root: classes.titleBar,title: classes.title,}}
			              actionIcon={
				          	<FaveButton image={image} />
			              }
		            	/>
		          	</GridListTile>
		       	))}
		    </GridList>
		</div>
	);
};

export default ExtraImages;