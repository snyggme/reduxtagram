import React from 'react';
import { Link } from 'react-router-dom';
// import { CSSTransition } from 'react-transition-group';
import { CSSTransitionGroup } from 'react-transition-group'

const Photo = (props) => {
	const { post, i, comments } = props;

	return(
		<figure className='grid-figure'>
			<div className='grid-photo-wrap'>
				<Link to={`/view/${post.code}`}>
					<img 
						src={post.display_src} 
						alt={post.caption}
						className='grid-photo' />
				</Link>
				<CSSTransitionGroup
                    transitionName="like"
			        transitionEnterTimeout={400}
			        transitionLeaveTimeout={400}>
				    <span key={post.likes} className='likes-heart'>
						{post.likes}
					</span>		
				</CSSTransitionGroup>
			</div>
			<figcaption>
				<p>{post.caption}</p>
				<div className='control-buttons'>
					<button onClick={props.increment.bind(null, i)} className='like'>
						<i className="fa fa-heart" aria-hidden="true"></i> {post.likes}
					</button>
					<Link className='button' to={`/view/${post.code}`}>
						<span className='comment-count'>
							<span />
							<i className="fa fa-comments" aria-hidden="true"></i>
							{comments[post.code] ? comments[post.code].length : 0}
						</span>
					</Link>
				</div>
			</figcaption>
		</figure>
	)
}

export default Photo;