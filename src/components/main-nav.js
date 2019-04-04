import React, { Component }  from 'react';
import '../styles/index.css';

const MainNav = (props) => {
	return (
		<nav className="main-nav">
	      <ul>
				{[0,1,2].map((number) => (<li>
						<a onClick={(e) => props.onChange(e.target.text)}>
			      			{props.items[number]}
			      		</a> 
	      			</li>
	      		))}
	      </ul>
	    </nav>
    )
}

export default MainNav;