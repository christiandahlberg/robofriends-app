import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className="bg-light-gray tc grow br2 pa3 ma2 dib bw2 shadow-5">
			<img alt='face' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}


export default Card;