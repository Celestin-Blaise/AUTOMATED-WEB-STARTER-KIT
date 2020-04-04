import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NoObjective from '../noObjective';
import axios from 'axios';

class Objectives extends Component {
	state = {
		objectives: ''
	};
	componentDidMount() {
		this.getData();
	}
	componentDidUpdate() {
		this.getData();
	}

	getData = () => {
		axios
			.get('http://192.168.43.1:8000/api/objectives/')
			.then((response) => {
				console.log('response:🔥🔥🔥🔥🔥🔥', response);
				const data = response.data;
				this.setState({
					objectives: data
				});
			})
			.catch((error) => console.log('🔥🔥🔥', error));
	};
	render() {
		const { objectives } = this.state;

		return (
			<div>
				{objectives &&
					objectives.map((objective) => {
						const { id, title, createdAt } = objective;
						return (
							<div className="card z-depth-5 horizontal card-homepage" key={id}>
								<div className="card-image ">
									<img src="assets/focus.jpg" height="300px" width="100px" />
								</div>
								<div className="card-stacked">
									<div className="card-title blue-text">
										<h1 className="counter center-align">{id}</h1>
										<h2 id="card-title">{title}</h2>
									</div>
									<div className=" card-action  blue-text">
										<span className="date">Created On : {createdAt}</span>
										<NavLink to={'/objective/' + id}>
											<button className="btn blue btn-details">
												<span className="open">
													<i className="material-icons">send</i>
												</span>
											</button>
										</NavLink>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		auth: state.auth.authStatus
// 	};
// };

export default connect()(Objectives);
