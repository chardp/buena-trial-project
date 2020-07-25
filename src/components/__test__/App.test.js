import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import axios from 'axios';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

jest.mock('axios');

test('should fetch images', () => {
	const images = [{breeds: []}];
	const resp = {data: images};
	axios.get.mockResolvedValue(resp);
});


