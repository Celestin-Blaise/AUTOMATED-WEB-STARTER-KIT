import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	// state = {
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
		// const { auth } = this.props;
		// const { authError } = this.props;
		// if (auth.uid) return <Redirect to="/home" />;
		return (
			<div className="Form-Section login container center-align ">
				<form id="login" onSubmit={this.handleSubmit}>
					<div className="input-field">
						<label htmlFor="name" className="black-text">
							Email
						</label>
						<input type="email" id="email" onChange={this.handleChange} required />
					</div>

					<div className="input-field">
						<label htmlFor="password" className="black-text">
							Password
						</label>
						<input type="password" id="password" onChange={this.handleChange} required />
					</div>

					<div className="submit ">
						<button className="btn blue white-text waves-effect waves-light">Login</button>
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
// 		userInfo: (details) => dispatch(loginUser(details))
// 	};
// };

export default connect()(Login);
