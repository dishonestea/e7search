import React from 'react';

const Card = ({image, name, location, type, zodiac}) => {
	return(
		<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='Catalyst' src= {image}/>
		<div>
			<h2>{name}</h2>
			<p>{location}</p>
			<p>{type}</p>
			<p>{zodiac}</p>
		</div>
		</div>
	);
}

export default Card;