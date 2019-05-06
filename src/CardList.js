import React from 'react';
import Card from './Card';

const CardList = ({catalysts}) =>{

	return(
		<div>{
		catalysts.map((catalystInfo, i) => { 
		return(
			<Card 
				key = {i}
				image={catalysts[i].image} 
				name={catalysts[i].name} 
				zodiac={catalysts[i].zodiac} 
				type={catalysts[i].type}
				location = {catalysts[i].location}
				/>
				);
})
	}</div>


		);


}

export default CardList;