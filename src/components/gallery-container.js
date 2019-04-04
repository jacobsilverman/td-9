import React from 'react';
import '../styles/index.css';
import PhotoContainer from './photo-container';

/* 
	A Single Gallery component that can be reused to display the sets of images for each of the three topic categories.

	nb. The only downside to exporting stateless components in this way is they appear as Unknown in chrome's React devtools 
*/

export default (props) => (
	<ul>
		 {props.gallery.map(item => ( 
		 	/* 
				A single Gallery-item component reused with iteration
			*/
	 		<PhotoContainer 
			key={item.id} 
			url={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} 
			/>
		)
		 )}
	</ul>
);