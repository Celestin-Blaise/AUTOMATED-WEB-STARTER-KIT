import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class CreateObjective extends Component {
	state = {
		title: '',
		content: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://127.0.0.1:8000/api/objectives/', {
				title: this.state.title,
				content: this.state.content
			})
			.then(() => console.log('DATA POSTED 👍👍👍👍👍'));
		this.props.history.push('/home');
	};

	render() {
		return (
			<div className="Form-Section container center-align ">
				<form id="createObjective" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<label htmlFor="title" className="black-text">
							Title
						</label>
						<input type="text" name="title" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label htmlFor="objective" className="black-text">
							Content
						</label>
						<input type="text" name="content" onChange={this.handleChange} />
					</div>

					<div className="submit">
						<button className="btn blue white-text waves-effect waves-dark">Create</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateObjective;
