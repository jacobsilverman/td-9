import React  from 'react';
import { NavLink }  from 'react-router-dom';
import '../styles/index.css';
import '../styles/User.css';

/* 
	MainNav is a stateless component that renders the 4 navigation buttons in the Header component of each of the Routes. The four buttons are: Search, Nav1 (eg. Cats), Nav2 (eg. Dogs), Nav3 (eg. Computers).
*/

export default (props) => (
	<nav className="main-nav">
		<div className="main-nav-div">
			<NavLink 
				className="main-nav-link"
				to='/search' 
				activeStyle={{backgroundColor: '#31526d'}}>
				search
			</NavLink> 
			{props.props.nav_items.map((item) => (
				<NavLink 
				key={`key_${item}`}
				className="main-nav-link"
				to={`/${item}`}
				onClick={(e) => props.handleQueryChange(e.target.text)}>
	      			{item}
	  			</NavLink>
	  		))}
  		</div>
	</nav>
);