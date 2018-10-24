import React, { Component } from 'react';

class Comments extends Component {
	constructor(props) {
		super(props);

		this.authorRef = React.createRef();
		this.commentRef = React.createRef();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderComments = this.renderComments.bind(this);
	}
	renderComments(comment, i) {
		return (
			<div className='comment' key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button 
						className='remove-comment' 
						onClick={this.props.removeComment.bind(null, this.props.id.postId, i)}>
						&times;
					</button>
				</p>
			</div>
		)
	}
	handleSubmit(e) {
		e.preventDefault();

		const { postId } = this.props.id;
		const author = this.authorRef.current.value;
		const comment = this.commentRef.current.value;

		this.props.addComment(postId, author, comment);

		this.authorRef.current.form.reset();
	}
	render() {
		return(
			<div className='comments'>
				{this.props.postComments.map(this.renderComments)}
				<form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
					<input type='text' ref={this.authorRef} placeholder='author' />
					<input type='text' ref={this.commentRef} placeholder='comment' />
					<input type='submit' hidden />
				</form>
			</div>
		)
	}
}

export default Comments;