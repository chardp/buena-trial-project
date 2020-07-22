import React from 'react';
import BreedItem from './BreedItem';

const BreedList = ({ breeds }) => {
	const renderedList = breeds.map((breed) => {
		return <BreedItem key={breed.name} breed={breed} />
	});
	
	return (
		<div>{renderedList}</div>
	);

};

export default BreedList;