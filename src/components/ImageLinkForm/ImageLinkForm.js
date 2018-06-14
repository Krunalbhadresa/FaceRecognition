import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This is Face Recognition website, give it a try'}
			</p>	
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input 
						className='w-70 f4 pa2 center bn'
						type='text'
						placeholder="Please enter a URL"
						onChange={onInputChange}
					/>
					<button 
						className='w-30 grow f4 bn dib ph3 pv2 bg-yellow link'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
		
	);
}

export default ImageLinkForm;