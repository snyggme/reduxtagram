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
	           	<Route exact path='/' render={(routerProps) => (
                    <PhotoGrid {...routerProps} {...props} />
                )}/>                   
	           	<Route path='/view/:postId' render={({match}) => (
                    <Single id={match.params} {...props}/>
                )}/>
	        </Switch>
		</div>
	)
}

export default Main;