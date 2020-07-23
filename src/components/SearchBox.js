import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
	<div className="pa2">
		<input 
			className="pa3 w-40 b--none br2 bg-light-gray"
			type="search" 
			placeholder="Search your favourite robot ..." 
			onChange={searchChange}
		/>
	</div>
	)
}

export default SearchBox;