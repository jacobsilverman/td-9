import React from 'react';
import '../styles/index.css';

let PhotoContainer = (props) => (
	<React.Fragment>
    	<li>
			<img src={props.url} alt="" />
		</li>
	</React.Fragment>
)

export default PhotoContainer;