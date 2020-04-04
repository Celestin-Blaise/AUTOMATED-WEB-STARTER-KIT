import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/nav/navbar';
import BaseRouter from './router';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<BaseRouter />
			</BrowserRouter>
		);
	}
}
