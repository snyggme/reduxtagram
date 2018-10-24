import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
	const i = props.posts.findIndex((post) => post.code === props.id.postId);
	const post = props.posts[i];
	const postComments = props.comments[props.id.postId] || [];

	return (
		<div className='single-photo'>
			<Photo i={i} post={post} {...props} />
			<Comments postComments={postComments} {...props} />
		</div>
	)
}

export default Single;