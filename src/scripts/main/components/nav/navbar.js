import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { signOut } from '../../store/actions/projectActions';

class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="navbar-fixed">
					<nav className=" nav-wrapper  grey ">
						<ul className="container right">
							<div className="container right hide-on-small" id="right">
								<li>
									<NavLink exact to="/home" className="nav-link">
										<strong>Home</strong>
									</NavLink>
								</li>
								<li>
									<NavLink to="/createObjective" className="nav-link">
										<strong>CreateObjective</strong>
									</NavLink>
								</li>
								<li>
									<NavLink to="/inspirationCorner" className="nav-link">
										<strong>Insp</strong>
									</NavLink>
								</li>
								<li>
									<NavLink to="/" className="nav-link">
										<strong>
											Logout
											{/* <a onClick={this.props.signout}></a> */}
										</strong>
									</NavLink>
								</li>
							</div>
							<div className="container right hide-on-small" id="right">
								<li>
									<NavLink to="/login" className="nav-link">
										<strong>Login</strong>
									</NavLink>
								</li>
								<li>
									<NavLink to="/signup" className="nav-link">
										<strong>Signup</strong>
									</NavLink>
								</li>
							</div>
						</ul>
						<div className="container">
							<NavLink to="/" className="brand-logo left">
								Focus
							</NavLink>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
// const mapStateToProps = (state) => {
// 	return {
// 		auth: state.auth.authStatus
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		signout: () => dispatch(signOut())
// 	};
//};

export default connect()(Navbar);
