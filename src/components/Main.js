import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

const Main = (props) => {
	return (
		<div>
			<h1>
				<Link to='/'>Reduxtagram</Link>
			</h1>
			<Switch>
	           	<Route exact path='/' render={(routeProps) => (
                    <PhotoGrid {...routeProps} {...props}/>
                )}/>                   
	           	<Route path='/view/:postId' render={(routeProps) => (
                    <Single {...routeProps} {...props}/>
                )}/>
	        </Switch>
		</div>
	)
}

export default Main;