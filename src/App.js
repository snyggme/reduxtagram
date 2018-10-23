import Main from './components/Main'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from './actions/actionCreator';

const mapStateToProps = state => {
	return {
		posts: state.posts,
		comments: state.comments
	}
};

const mapDispachToProps = dispatch => {
	return bindActionCreators(actionCreators, dispatch)
};

const App = withRouter(connect(mapStateToProps, mapDispachToProps)(Main));

export default App;
