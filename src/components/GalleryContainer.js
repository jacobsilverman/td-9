import React from 'react';
import '../styles/index.css';
import PhotoContainer from './PhotoContainer';

/* 
	A Single Gallery component that can be reused to display the sets of images for each of the three topic categories.
*/

export default (props) => (
	<ul>
		 {props.gallery.map(item => ( 
		 	/* 
				A single Photo Container (Gallery-Item) component reused with iteration
			*/
	 		<PhotoContainer 
			key={item.id} 
			url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} 
			/>
		)
		 )}
	</ul>
);