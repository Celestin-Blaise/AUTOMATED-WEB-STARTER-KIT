import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from './../../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
	// state = {
	// 	name: '',
	// 	email: '',
	// 	password: ''
	// };
	// handleChange = (e) => {
	// 	this.setState({
	// 		[e.target.id]: e.target.value
	// 	});
	// };
	// handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	console.log(this.state);
	// 	this.props.userInfo(this.state);
	// };
	render() {
		// const { authError } = this.props;
		// const { auth } = this.props;
		// if (auth.uid) return <Redirect to="/home" />;
		return (
			<div className="Form-Section container center-align ">
				<form id="signup" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<label htmlFor="name" className="black-text">
							Name
						</label>
						<input type="text" id="name" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label htmlFor="email" className="black-text">
							email
						</label>
						<input type="email" id="email" onChange={this.handleChange} required />
					</div>

					<div className="input-field">
						<label htmlFor="password" className="black-text">
							Password
						</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>

					<div className="submit">
						<button className="btn blue white-text waves-effect waves-light">Signup</button>
					</div>
					{/* <div className="red-text center">{authError ? <h6>{authError}</h6> : null}</div> */}
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		auth: state.auth.authStatus,
// 		authError: state.auth.authError
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		userInfo: (details) => dispatch(signupUser(details))
// 	};
// };

export default connect()(SignUp);
