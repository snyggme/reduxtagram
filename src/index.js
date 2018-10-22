import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';
import App from './App';

const Root = ({ store }) => (
	<Provider store={store}>
    	<Router basename={process.env.PUBLIC_URL}>
			<App />
		</Router>
  	</Provider>
)

ReactDOM.render(
	<Root store={store}/>,
	 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
