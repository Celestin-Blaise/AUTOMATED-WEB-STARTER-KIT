import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {


   render() {
      return (

         <div className="nav-2 center-align center"> 
           <header id="header">
				<div className="inner">
					<div className="content">
						<ul className="navbar-nav links column">
                     <li className="nav-item">
                     <NavLink exact to="/" className="nav-link">
                        <h6 className="white-text">Home</h6>
                     </NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/about" className="nav-link">
                        <h6 className="white-text">About</h6>
                     </NavLink>
                  </li>
                  <li  className="nav-item">
                     <NavLink to="/projects" className="nav-link">
                     <h6 className="white-text">Projects</h6>
                     </NavLink>
                  </li>
                  <li  className="nav-item">
                     <NavLink to="/designs" className="nav-link">
                        <h6 className="white-text">Designs</h6>
                     </NavLink>
                  </li>
                  </ul>
					</div>	
				</div>
			</header>
         </div>

      );
   }
}
