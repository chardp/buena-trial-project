import React, { useState, useEffect } from 'react';
import dogApi from '../apis/dogApi';
import Header from './Header';
import List from './List';
import Favorites from './Favorites';
import Route from './Route';
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
	root: {
		padding: 10,
		maxWidth: 600
	},
	pad: {
		padding: 10
	}
});

const App = () => {
	const [list, setList] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		onLoadSubmit()
	}, []);

	const onLoadSubmit = async () => {
		try {
			const response = await dogApi.get('/images/search',{
				params: {
					limit: 50,
					size: 'full',
					order: 'ASC'
				},
			})
			
			setList(response.data);
		} catch (err) {
			console.log(err)
		}
	};

	const reorderList = (list, startIndex, endIndex) => {
		const result = Array.from(list);
	  	const [removed] = result.splice(startIndex, 1);
	  	result.splice(endIndex, 0, removed);

	  	return result;
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
			<Route path="/">
				<Container className={classes.root}>
					<DragDropContext onDragEnd={onDragEnd}>
						<List 
							title='Dog Breeds'
							list={list} 
						/>
					</DragDropContext>
				</Container>
			</Route>
			<Route path="/favorites">
				<Favorites />	
			</Route>
		</React.Fragment>
	);

};

export default App;