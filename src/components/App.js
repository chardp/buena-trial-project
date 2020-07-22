import React from 'react';
import theDogApi from '../apis/theDogApi';
import BreedList from './BreedList';


class App extends React.Component {
	state = { breeds: [] };

	componentDidMount() {
		this.onLoadSubmit();
	}

	onLoadSubmit = async () => {
		const response = await theDogApi.get('/breeds');

		this.setState({ breeds: response.data });
	};

	render() {
		return (
			<BreedList breeds={this.state.breeds} />
		);
	}
}

export default App;