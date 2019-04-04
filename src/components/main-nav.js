import React, { Component }  from 'react';
import { Link }  from 'react-router';
import '../styles/index.css';

export default (props) => (
	<nav className="main-nav">
      <ul>
      		<li></li>
			{[0,1,2].map((number) => (<li>
					<a onClick={(e) => props.onChange(e.target.text)}>
		      			{props.items[number]}
		      		</a> 
      			</li>
      		))}
      </ul>
    </nav>
);