import React, { useState, useEffect } from 'react';
import theDogApi from '../apis/theDogApi';
import Header from './Header';
import List from './List';
import Favorites from './Favorites';
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const reorderList = (list, startIndex, endIndex) => {
	const result = Array.from(list);
  	const [removed] = result.splice(startIndex, 1);
  	result.splice(endIndex, 0, removed);

  	return result;
};

const useStyles = makeStyles({
	root: {
		padding: 10,
	},
	pad: {
		padding: 10
	}
});

//const classes = useStyles();	

const App = () => {
	const [breeds, setBreeds] = useState([]);
	const [list, setList] = useState([]);
	const [breedExtraImages, setBreedExtraImages] = useState([]);
	const [favoriteImages, setFavoriteImages] = useState([]);
	const [newFavorite, setNewFavorite] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		onLoadSubmit()
	}, []);

	const onLoadSubmit = async () => {
		const response = await theDogApi.get('/images/search',{
			params: {
				limit: 10,
				size: 'full',
				order: 'ASC'
			},
		})
		
		setList(response.data);
	};

	const onBreedSelect = async (selectedBreedId) => {
		const response = await theDogApi.get('images/search', {
			params: {
				breed_id: selectedBreedId,
				limit: 3,
				size: 'small'
			},
		});

		setBreedExtraImages(response.data);
	};

	const handleFavorite = async (imageId) => {
		console.log('fave img: ', imageId);
		
		const response = await theDogApi.post('/favourites',
			{
				'image_id': imageId,
				//'sub_id': 'user-chardp'
			}
		);

		setNewFavorite(response.data);
		console.log('handle favorite: ', response.data);
	};

	const getFavorites = async () => {
		const response = await theDogApi.get('/favourites', {});

		console.log('load favorites', response.data);
		setFavoriteImages(response.data);
	};

	const onDragEnd = (result) => {
		if (!result.destination) {
	      return;
	    }

	    const reorderedBreeds = reorderList(
    		list,
    		result.source.index,
    		result.destination.index
    	);

    	setList(reorderedBreeds);

	};


	return (
		<React.Fragment>
			<CssBaseline />
			<Header />
			<Container className={classes.root}>
				<DragDropContext onDragEnd={onDragEnd}>
					<List 
						title='Dog Breeds'
						breeds={breeds} 
						list={list} 
						onBreedSelect={onBreedSelect}
						handleFavorite={handleFavorite} 
						favoriteImages={favoriteImages}
						breedExtraImages={breedExtraImages} 
					/>
				</DragDropContext>
				<Favorites getFavorites={getFavorites} newFavorite={newFavorite} favoriteImages={favoriteImages} />	
			</Container>
			
		</React.Fragment>
	);

};

export default App;