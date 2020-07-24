import React from 'react';
import './App.css';
import Header from './Header';
import theDogApi from '../apis/theDogApi';
import List from './List';
import { DragDropContext } from 'react-beautiful-dnd';
import Favorites from './Favorites';
import Votes from './Votes';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const reorderList = (list, startIndex, endIndex) => {
	const result = Array.from(list);
  	const [removed] = result.splice(startIndex, 1);
  	result.splice(endIndex, 0, removed);

  	return result;
};

// const useStyles = makeStyles({
// 	root: {
// 		//padding: 10,
// 		//background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
// 		background: '#ccc'
// 	},
// 	pad: {
// 		padding: 10
// 	}
// });

//const classes = useStyles();	

class App extends React.Component {
	state = { breeds: [], list: [], breedExtraImages: [], favoriteImages: [], newFavorite: [] };

	componentDidMount() {
		this.onLoadSubmit();
	}

	onLoadSubmit = async () => {
		//const response = await theDogApi.get('/breeds');
		const response = await theDogApi.get('/images/search',{
			params: {
				limit: 10,
				size: 'full',
				order: 'ASC'
			},
		})
		
		this.setState({list: response.data});
		//this.setState({ breeds: response.data });
	};

	// onBreedSelect = (selectedBreedId) => {
	// 	this.setState({ selectedVideo: video });
	// }

	onBreedSelect = async (selectedBreedId) => {
		const response = await theDogApi.get('images/search', {
			params: {
				breed_id: selectedBreedId,
				limit: 3,
				size: 'small'
			},
		});

		this.setState({ breedExtraImages: response.data });
		console.log(response);
	};

	onVote = async (imageId, vote) => {
		const response = await theDogApi.post('/votes', 
			{
				'image_id': imageId,
				'value': vote
			}
		);

		console.log(response);
	};

	handleFavorite = async (imageId) => {
		console.log('fave img: ', imageId);
		
		const response = await theDogApi.post('/favourites',
			{
				'image_id': imageId,
				//'sub_id': 'user-chardp'
			}
		);

		this.setState({ newFavorite: response.data });
		console.log('handle favorite: ', response);
	};

	getFavorites = async () => {
		const response = await theDogApi.get('/favourites', {});

		//setVideos(response.data.items);

		console.log('load favorites', response.data);
		this.setState({ favoriteImages: response.data });
	};

	onDragEnd = (result) => {
		if (!result.destination) {
	      return;
	    }

	    const reorderedBreeds = reorderList(
    		this.state.list,
    		result.source.index,
    		result.destination.index
    	);

    	this.setState({ list: reorderedBreeds });

	};

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Header />
				<Container>
					<DragDropContext onDragEnd={this.onDragEnd}>
						<List 
							title='Dog Breeds'
							breeds={this.state.breeds} 
							list={this.state.list} 
							onBreedSelect={this.onBreedSelect}
							handleFavorite={this.handleFavorite} 
							favoriteImages={this.state.favoriteImages}
							onVote={this.onVote}
							breedExtraImages={this.state.breedExtraImages} 
						/>
					</DragDropContext>
				</Container>
				<Favorites getFavorites={this.getFavorites} newFavorite={this.state.newFavorite} favoriteImages={this.state.favoriteImages} />
				<Votes onVote={this.onVote} />
			</React.Fragment>
		);
	}
}

export default App;