import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/screens/homescreen/homescreen';
import SignUp from './components/screens/signup/signup';
import Details from './components/screens/objetiveDetails/objectiveDetails';
import CreateObjective from './components/screens/createObjetive/createObjective';
import Menu from './components/screens/menu.js';
import Login from './components/screens/login/login';
import Inspiration from './components/screens/inspiration/inspiration';
import Welcome from './components/screens/landingPage';

const BaseRouter = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route exact path="/home" component={Home} />
			<Route path="/objective/:id" component={Details} />
			<Route path="/signup" component={SignUp} />
			<Route path="/createObjective" component={CreateObjective} />
			<Route path="/login" component={Login} />
			<Route path="/inspirationCorner" component={Inspiration} />
			<Route path="/menu" component={Menu} />
		</Switch>
	</div>
);

export default BaseRouter;
