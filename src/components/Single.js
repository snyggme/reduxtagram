import React from 'react';
import Phoro from './Photo'

const Single = (props) => {
	const i = props.posts.findIndex((post) => post.code === props.id.postId);
	
	return (
		<div className='single-photo'>
			Single
		</div>
	)
}

export default Single;