import React from 'react';
import '../styles/index.css';
import PhotoContainer from './photo-container';
import { Consumer } from '../context'


var GalleryContainer = () => (
	<Consumer>
	    {context => (
    		<ul>
	    		 {context.gallery.map(item => (
					<PhotoContainer 
						key={item.id} 
						url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} 
						/>
	    		))}
	    		<li></li>
    		</ul>
	   )}
    </Consumer>
)

export default GalleryContainer;