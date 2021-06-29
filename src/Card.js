import React from 'react';

const Card=({name , email, id}) =>{
		return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 f6'>
			<img alt= "card1" src={`https://robohash.org/${id}?size=100x100`}  />
			<div>
			<h2>{name}</h2>
			<h3>{email}</h3>
			</div>
		</div>
		);
}

export default Card