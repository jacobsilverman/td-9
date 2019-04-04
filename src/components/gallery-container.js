import React, { Component } from 'react';
import '../styles/index.css';
import PhotoContainer from './photo-container';
import { Consumer } from '../context'


class GalleryContainer extends Component {
	/* 
		Can i change this to a pure component
		and still access props?
	 */
	render(){
		console.log('GalleryContainer 2',this.props)	
		return(
			<ul>
	    		 {this.props.gallery.map(item => {
	    		 	return ( 
	    		 		<PhotoContainer 
						key={item.id} 
						url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} 
						/>
	    			)}
	    		 )}
	    		<li></li>
    		</ul>
    	)
	}
}

export default GalleryContainer;