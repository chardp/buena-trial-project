import React from 'react';
import ListItem from './ListItem';
import { Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loader from './Loader';

const useStyles = makeStyles({
	root: {
		background: '#ccc'
	},
	title: {
		padding: '10px 10px 0'
	},
	list: {
		padding: 10
	}
});

const getDroppableStyle = (isDraggingOver) => ({
  backgroundColor: isDraggingOver ? '#FE6B8B' : '#ccc',
});

const List = ({list, title }) => {
	const classes = useStyles();	

	return (
		<Paper className={classes.root}>
			<Typography className={classes.title} variant='h6' component='h1'>{title}</Typography>
			{ list.length ?
				<Droppable droppableId='column-1'>
					{(provided, snapshot) => (
						<Paper className={classes.list} innerRef={provided.innerRef} {...provided.droppableProps} style={getDroppableStyle(snapshot.isDraggingOver)}>
							{list.map((listItem, index) => {
								return <ListItem key={listItem.breeds[0].id} breed={listItem.breeds[0]} imageSrc={listItem.url} index={index} />
							})}
							{provided.placeholder}
						</Paper>
					)}
				</Droppable>
				: <Loader />
			}
		</Paper>
	);
};

export default List;