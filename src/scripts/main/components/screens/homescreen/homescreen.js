import React, { Component } from 'react';
import Footer from '../../nav/footer';
import Objectives from './objectives';
import M from 'materialize-css';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getData } from './../../../store/actions/projectActions';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class About extends Component {
	state = {
		quotes: ''
	};

	componentDidMount() {
		const { auth } = this.props;
		// if (!auth.uid) return <Redirect to="/signup" />;
		//		this.getObjectives();
		this.fixedButton();
	}

	componentDidUpdate() {
		this.fixedButton();
	}

	fixedButton = () => {
		const button = document.querySelector('.fixed-action-btn');
		const instances = M.FloatingActionButton.init(button);
		const caro = document.querySelector('.carousel');
		const init = M.Carousel.init(caro, {
			fullWidth: true,
			indicators: true,
			duration: 100
		});
		const instance = M.Carousel.getInstance(caro);

		setInterval(() => {
			instance.next();
		}, 7000);
	};

	render() {
		return (
			<div className="homescreen">
				<div className="container center-align white-text">
					<h1 className="obj">OBJECTIVES</h1>
					<Objectives state={this.state} />
				</div>
				<div className="fixed-action-btn">
					<NavLink to="/createObjective">
						<button className=" btn-floating large-delete  add black pulse">
							<i className="material-icons white-text">add</i>
						</button>
					</NavLink>
				</div>
				{/* QUOTES SECTION */}
				<div className="quotes-section">
					<div className="carousel carousel-slider blue center">
					<div className="card">
						
						<div className="carousel-item card-image center">
							<img src="./assets/2.jpg" height="400px" width="null" />
						</div>
						</div>
						<div className="carousel-item center">
							<h5 className=" center-align text-center BLUE-text">
								<p className="center-align">HEADER</p>
								<img src="./assets/quote-sign-left.png" alt="" /> Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Numquam voluptatum fugiat, optio quos
								sapiente quidem rerum incidunt quibusdam, ratione odit ab ullam!
								Excepturi officia veniam in et! Dignissimos, quo possimus. Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Non corrupti unde rem eos
								quam sapiente perspiciatis ut. Vero dicta sunt quibusdam, ipsa at
								adipisci, cupiditate animi explicabo voluptatibus molestias neque!
								<img src="./assets//quote-sign-right.png" alt="" />
							</h5>
						</div>
						<div className="carousel-item center">
							<h5 className=" center-align text-center BLUE-text">
								<p className="center-align">HEADER</p>
								<img src="./assets/quote-sign-left.png" alt="" /> Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Numquam voluptatum fugiat, optio quos
								sapiente quidem rerum incidunt quibusdam, ratione odit ab ullam!
								Excepturi officia veniam in et! Dignissimos, quo possimus. Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Non corrupti unde rem eos
								quam sapiente perspiciatis ut. Vero dicta sunt quibusdam, ipsa at
								adipisci, cupiditate animi explicabo voluptatibus molestias neque!
								<img src="./assets//quote-sign-right.png" alt="" />
							</h5>
						</div>
						<div className="carousel-item center">
							<h5 className=" center-align text-center BLUE-text">
								<p className="center-align">HEADER</p>
								<img src="./assets/quote-sign-left.png" alt="" /> Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Numquam voluptatum fugiat, optio quos
								sapiente quidem rerum incidunt quibusdam, ratione odit ab ullam!
								Excepturi officia veniam in et! Dignissimos, quo possimus. Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Non corrupti unde rem eos
								quam sapiente perspiciatis ut. Vero dicta sunt quibusdam, ipsa at
								adipisci, cupiditate animi explicabo voluptatibus molestias neque!
								<img src="./assets//quote-sign-right.png" alt="" />
							</h5>
						</div>
						<div class="carousel-item center">
							<h5 className=" center-align text-center BLUE-text">
								<p className="center-align">HEADER</p>
								<img src="./assets/quote-sign-left.png" alt="" /> Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Numquam voluptatum fugiat, optio quos
								sapiente quidem rerum incidunt quibusdam, ratione odit ab ullam!
								Excepturi officia veniam in et! Dignissimos, quo possimus. Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Non corrupti unde rem eos
								quam sapiente perspiciatis ut. Vero dicta sunt quibusdam, ipsa at
								adipisci, cupiditate animi explicabo voluptatibus molestias neque!
								<img src="./assets//quote-sign-right.png" alt="" />
							</h5>
						</div>
						<div className="carousel-item center">
							<h5 className=" center-align text-center BLUE-text">
								<p className="center-align">HEADER</p>
								<img src="./assets/quote-sign-left.png" alt="" /> Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Numquam voluptatum fugiat, optio quos
								sapiente quidem rerum incidunt quibusdam, ratione odit ab ullam!
								Excepturi officia veniam in et! Dignissimos, quo possimus. Lorem ipsum
								dolor sit amet consectetur, adipisicing elit. Non corrupti unde rem eos
								quam sapiente perspiciatis ut. Vero dicta sunt quibusdam, ipsa at
								adipisci, cupiditate animi explicabo voluptatibus molestias neque!
								<img src="./assets//quote-sign-right.png" alt="" />
							</h5>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

const mapStateToprops = (state) => {
	return {
		objectives: state.objectives
	};
};

const mapDispatchToprops = (dispatch) => {
	return {
		getdata: () => dispatch(getData())
	};
};

export default connect(mapStateToprops, mapDispatchToprops)(About);
