import React from 'react';
import { Link } from 'react-router-dom';

const Photo = (props) => {
	const { post, i, comments } = props;

	return(
		<figure className='grid-figure'>
			<div className='grid-photo-wrap'>
				<Link to={`/view/${post.code}`}>
					{post.caption}
				</Link>
			</div>
		</figure>
	)
}

export default Photo;