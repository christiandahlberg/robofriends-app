import React from 'react';

const Card = ({ login, html_url, id }) => {
	return (
		<div className="bg-light-gray tc grow br2 pa3 ma2 dib bw2 shadow-5">
			<img alt='face' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2>{login}</h2>
				<p>{html_url}</p>
			</div>
		</div>
	);
}


export default Card;