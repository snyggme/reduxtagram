const initialState = {
	arr: [],
	isLoading: false
}

const posts = (state = initialState, action) => {
	switch(action.type) {
		case 'INCREMENT_LIKES':
			const i = action.index;
			return {
				...state,
				arr: [
					...state.arr.slice(0, i),
					{
						...state.arr[i], 
						likes: +state.arr[i].likes + 1
					}, 
					...state.arr.slice(i + 1)
				]
			};
		case 'GET_POSTS_REQUEST':
			return {
				...state,
				isLoading: true
			};
		case 'GET_POSTS_SUCCESS':
			return {
				arr: [...action.posts],
				isLoading: false
			};
		default:
			return state;
	}
}

export default posts;