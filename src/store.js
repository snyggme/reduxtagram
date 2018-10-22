import { createStore, compse } from 'redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts'

const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer, defaultState);

export default store;