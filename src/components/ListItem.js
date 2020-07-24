import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
	import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Modal from '@material-ui/core/Modal';
import theDogApi from '../apis/theDogApi';

import IconButton from '@material-ui/core/IconButton';
import { Draggable } from 'react-beautiful-dnd';
import ExtraImages from './ExtraImages';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column'
    //background: ${props => (props.isDragging ? 'lightgreen' : 'white')}
  },
  flex: {
  	display: 'flex',
  	flexDirection: 'row'
  },
  // media: {
  //   height: 140,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    // transition: theme.transitions.create('transform', {
    //   duration: theme.transitions.duration.shortest,
    // }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  paper: {
    position: 'absolute',
    width: 400,

    border: '2px solid #000',
  },
});



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const getDraggableStyle = (isDragging, draggableStyle) => ({
  border: isDragging ? "2px solid #FF8E53" : "",
  ...draggableStyle
});

const ListItem = ({ breed, imageSrc, onBreedSelect, breedExtraImages, favoriteImages, handleFavorite, onVote, index }) => {
	const classes = useStyles();	
	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState(false);
	const [modalStyle] = useState(getModalStyle);
	const [extras, SetExtras] = useState([]);



	const handleExpandClick = () => {
    	setExpanded(!expanded);
    	if (!expanded) {
	    	onBreedExpand(breed.id);
		}
		// setOpen(true);
		//SetExtras(breedExtraImages);
	};
	
	const handleOpen = () => {
    	setOpen(true);
  	};

  	const handleClose = () => {
   		setOpen(false);
  	};

  	const onBreedExpand = async (selectedBreedId) => {
		const response = await theDogApi.get('images/search', {
			params: {
				breed_id: selectedBreedId,
				limit: 3,
				size: 'small',
				order: 'ASC'
			},
		});
		SetExtras(response.data);
		//this.setState({ breedExtraImages: response.data });
		console.log('YO', response);
	};
	
	return (
		<>
		<Draggable draggableId={breed.name} index={index}>
			{(provided, snapshot) => (
				<Card className={classes.root} 
					innerRef={provided.innerRef} 
					{...provided.draggableProps} 
					{...provided.dragHandleProps}
					style={getDraggableStyle(snapshot.isDragging,provided.draggableProps.style)}
				>
					
					<div className={classes.flex} onClick={handleExpandClick}>
						<CardMedia className={classes.cover} image={imageSrc} title={breed.name} />

						<CardContent className={classes.content}>
							<Typography gutterBottom variant="h5" component="h2">
		            			{breed.name}
		          			</Typography>
							<Typography variant="body2">Bred for: {breed.bred_for}</Typography>
							<Typography variant="body2">Height: {breed.height.imperial} in</Typography>
							<Typography variant="body2">Weight: {breed.weight.imperial} lbs</Typography>
							<Typography variant="body2">Life Span: {breed.life_span}</Typography>
						</CardContent>
					</div>
					
      				<Collapse className={classes.full} in={expanded} timeout="auto" unmountOnExit>
						
						<ExtraImages key={`extra- ${breed.id}`} onVote={onVote} favoriteImages={favoriteImages} handleFavorite={handleFavorite} extraImages={extras} />
						
					</Collapse>
				</Card>
			)}
		</Draggable>
		<Modal
        	open={open}
        	onClose={handleClose}
        	aria-labelledby="simple-modal-title"
    		aria-describedby="simple-modal-description"
    	>
 	    	<div style={modalStyle} className={classes.paper}>
				
    		</div>
    	</Modal>
    	</>
	);
}


export default ListItem;
