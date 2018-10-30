import { httpGet } from '../utils/network'

let chached = false;

export function increment(index, showLike) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}

export function getPosts() {
	return dispatch => {
		if (!chached) {
			chached = true;

			dispatch({
				type: 'GET_POSTS_REQUEST'
			});

			httpGet('posts')
				.then(json => {
					dispatch({
						type: 'GET_POSTS_SUCCESS',
						posts: json.posts
					});

					dispatch({
						type: 'GET_COMMENTS_SUCCESS',
						comments: json.comments
					});
				})
		      	.catch(e => {
		      		console.log(e);
		      	})
		}
	}
}
