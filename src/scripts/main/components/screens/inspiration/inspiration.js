import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Inspiration extends Component {
	render() {
		// const { auth } = this.props;
		// if (!auth.uid) return <Redirect to="/" />;

		return (
			<div className="inspiration-container">
				<h1 className="text-center">Inspiration Section</h1>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		auth: state.auth.authStatus
// 	};
// };
export default connect()(Inspiration);
