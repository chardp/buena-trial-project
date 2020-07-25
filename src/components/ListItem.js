import React, { useState } from 'react';
import dogApi from '../apis/dogApi';
import { Draggable } from 'react-beautiful-dnd';
import ExtraImages from './ExtraImages';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  flex: {
  	display: 'flex',
  	flexDirection: 'row'
  },
  content: {
    flex: '1 0 60%',
  },
  cover: {
    width: 180,
    backgroundPosition: 'top',
    flex: '1 0 40%'
  },
  more: {
  	marginTop: 10
  },
});


const getDraggableStyle = (isDragging, draggableStyle) => ({
  border: isDragging ? "2px solid #FF8E53" : "",
  ...draggableStyle
});

const ListItem = ({ breed, imageSrc, index }) => {
	const classes = useStyles();	
	const [expanded, setExpanded] = useState(false);
	const [extras, SetExtras] = useState([]);

	const handleExpandClick = () => {
    	setExpanded(!expanded);
    	if (!expanded) {
	    	onListItemExpand(breed.id);
		}
	};
	
  	const onListItemExpand = async (selectedBreedId) => {
		const response = await dogApi.get('images/search', {
			params: {
				breed_id: selectedBreedId,
				limit: 5,
				size: 'med',
				order: 'ASC'
			},
		});
		SetExtras(response.data);
	};
	
	return (
		<Draggable draggableId={breed.name} index={index}>
			{(provided, snapshot) => (
				<Card className={classes.root} 
					innerRef={provided.innerRef} 
					{...provided.draggableProps} 
					{...provided.dragHandleProps}
					style={getDraggableStyle(snapshot.isDragging,provided.draggableProps.style)}
				>
					<div className={classes.flex}>
						<CardMedia className={classes.cover} image={imageSrc} title={breed.name} />

						<CardContent className={classes.content}>
							<Typography gutterBottom variant="h6" component="h2">{breed.name}</Typography>
							<Typography variant="body2">Height: {breed.height.imperial} in</Typography>
							<Typography variant="body2">Weight: {breed.weight.imperial} lbs</Typography>
							<Typography variant="body2">Life Span: {breed.life_span}</Typography>
							<Button className={classes.more} variant="contained"  color="default" onClick={handleExpandClick}>
				        		More Images
				        	</Button>
						</CardContent>
					</div>
      				<Collapse className={classes.full} in={expanded} timeout="auto" unmountOnExit>
						<ExtraImages 
							key={`extra- ${breed.id}`} 
							extraImages={extras} 
						/>
					</Collapse>
				</Card>
			)}
		</Draggable>
	);
}


export default ListItem;
