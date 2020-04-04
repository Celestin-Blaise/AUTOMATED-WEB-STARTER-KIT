import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="row text-center center">
					<div className="small-12 medium-6 medium-offset-3 columns wow fadeInUp ">
						<div className="one wow fadeInRight ">
							<p id="logo">CBK</p>
						</div>
						<div className="two wow fadeInLeft ">
							<p id="copyright">
								Copyright || @Blaise &copy; 2018 || PASSIONATE CODE DESIGNS
							</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
