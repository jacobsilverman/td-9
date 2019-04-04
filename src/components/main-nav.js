import React, { Component }  from 'react';
import '../styles/index.css';

class MainNav extends Component {
	constructor(props) {
	    super(props);
	}
	render(){
		return (
			<nav className="main-nav">
	      <ul> 
	      	<li> <a href='#' onClick={((e) => this.props.onChange(e.target.text))}> Cats </a> </li>
	        <li><a href='#' onClick={((e) => this.props.onChange(e.target.text))}>Dogs</a></li>
	        <li><a href='#' onClick={((e) => this.props.onChange(e.target.text))}>Computers</a></li>
	      </ul>
	    </nav>
	    )
	}
}

export default MainNav;