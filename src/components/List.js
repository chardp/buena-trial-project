import React from 'react';
import ListItem from './ListItem';
import './List.css';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		//padding: 10,
		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
		background: '#ccc'
	},
	pad: {
		padding: 10
	}
});

const getDroppableStyle = (isDraggingOver) => ({
  //background: isDraggingOver ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' : '#ccc',
  backgroundColor: isDraggingOver ? '#FE6B8B' : '#ccc',
  //transition: 'background-color 0.1s ease'
});

const List = ({list, title, onBreedSelect, favoriteImages, handleFavorite, onVote }) => {
	const classes = useStyles();	

	const renderedList = list.map((listItem, index) => {
		return <ListItem key={listItem.breeds[0].id}  onVote={onVote} favoriteImages={favoriteImages} handleFavorite={handleFavorite} onBreedSelect={onBreedSelect} breed={listItem.breeds[0]} imageSrc={listItem.url} index={index} />
	});

	return (
		<Paper className={classes.root}>
			<Typography className={classes.pad} variant='h6' component='h1'>{title}</Typography>
			<Droppable droppableId='column-1'>
				{(provided, snapshot) => (
					<Paper className={classes.pad} innerRef={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
						{renderedList}
						{provided.placeholder}
					</Paper>
				)}
			</Droppable>
		</Paper>
	);
};

export default List;