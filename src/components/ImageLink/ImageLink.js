import React from 'react';
import './ImageLink.css';

const ImageLink = ({onInputSearch, onSubmitClick}) => {
	return(
		<div className='w-50 tc pa4 imageRecognition'>
        	<input
        	 className='pa2 w-50 bn bg-white imageRecognitionInput' 
        	 type='text' 
        	 placeholder='Search...' 
        	 onChange={onInputSearch}/>

		  	<button className="w-20 pa2 bg-light-green grow bn imageRecognitionButton"
		  	onClick={onSubmitClick}>Detect</button>
		 </div>
		)
}

export default ImageLink;