import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
	render() {
		const detailsId = this.props.match.params.id;
		const { objectives } = this.props;
		console.log('DETAILS 🔥🔥🔥🔥🔥🔥', objectives);
		// const { auth } = this.props;

		return (
			<div>
				{objectives &&
					objectives.map((obj) => {
						const deleteData = () => {
							return null;
							this.props.history.push('/');
						};
						const { id, title, objective } = obj;
						if (detailsId === id) {
							return (
								<div className="container center-align details" key={id}>
									<div className="card z-depth-5">
										<div className=" card-image ">
											<img src="assets/focus.jpg" height="400px" />
											<button
												onClick={deleteData}
												className="halfway-fab btn-floating large-delete  black pulse"
											>
												<i className="material-icons">delete</i>
											</button>
										</div>

										<div className="card-content">
											<div className="card-title blue-text">
												<h2 id="card-title">{title}</h2>
												<h6 className="flow-text Content black-text">
													{objective}
												</h6>
											</div>
										</div>
									</div>
								</div>
							);
						}
					})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		objectives: state.objectives.objectives
		// auth: state.auth.authStatus
	};
};

export default connect(mapStateToProps)(Details);
