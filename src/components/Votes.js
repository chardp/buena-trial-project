import React, { useState, useEffect } from 'react';
import theDogApi from '../apis/theDogApi';



const Votes = ({ onVote }) => {
	const [likes, setLikes] = useState([]);
	const [dislikes, setDislikes] = useState([]);

	useEffect(() => {
		loadVotes();
	}, []);

	const loadVotes = async () => {
		const response = await theDogApi.get('/votes');

		console.log(response);
		processVotes(response.data);
	};

	const processVotes = (data) => {
		
	}

	return (
		<div>Votes</div>
	);
};

export default Votes;