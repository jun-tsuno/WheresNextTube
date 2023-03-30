import React from 'react';

const FormInput = (props) => {
	const { id, title, type, value, ...rest } = props;
	return (
		<>
			<label htmlFor={id} className='text-lg text-gray-600 font-semibold'>
				{title}
			</label>
			<input
				id={id}
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
