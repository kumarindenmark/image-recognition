import React from 'react';
import './FaceRecognitionhere.css';

const FaceRecognitionhere = ({imageURL, box}) => {
	return(
    <div className='tc ma2 pa2 w-50 FaceRecognitionPicture'>
    <div className='FaceRecognitionPictureIn'>
    	<img id='inputimage' alt='example' src={imageURL} style={{width:'500px', height:'auto'}} />
    	<div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol }}> </div>
    </div>
    </div>
	)
}

export default FaceRecognitionhere;