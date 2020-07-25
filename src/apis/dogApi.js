import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.TheDogAPI.com/v1',
	headers: {
		'x-api-key': '850490a6-884e-4d65-ac22-efb7b3ed28fb'
	}
});