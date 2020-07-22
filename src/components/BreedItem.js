import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 10
  },
  media: {
    height: 140,
  },
});

const BreedItem = ({ breed }) => {
	const classes = useStyles();
console.log(breed.id)
	return (
		<Card className={classes.root}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
            			{breed.name}
          			</Typography>
					<Typography variant="body2">Bred for: {breed.bred_for}</Typography>
					<Typography variant="body2">Height: {breed.height.imperial} in</Typography>
					<Typography variant="body2">Weight: {breed.weight.imperial} lbs</Typography>
					<Typography variant="body2">Life Span: {breed.life_span}</Typography>
				</CardContent>
				<CardActions disableSpacing>
        			<IconButton aria-label="add to favorites">
          				<FavoriteIcon />
        			</IconButton>
        		</CardActions>
		</Card>
	);
}


export default BreedItem;
