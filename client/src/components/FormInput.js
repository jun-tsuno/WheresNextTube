import React from 'react';

const FormInput = (props) => {
	const { videoId, title, type, value, ...rest } = props;
	return (
		<>
			<label htmlFor={videoId} className='text-lg text-gray-600 font-semibold'>
				{title}
			</label>
			<input
				id={videoId}
				type={type}
				value={value}
				autoComplete='off'
				{...rest}
				className='py-2 px-3 w-full'
			/>
		</>
	);
};

export default FormInput;
