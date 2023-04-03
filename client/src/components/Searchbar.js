import React, { useState } from 'react';

const Searchbar = ({ onTermSubmit }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onTermSubmit(value);
		setValue('');
	};

	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					className='w-full max-w-[500px] h-11 p-3 border-2 border-gray-400 rounded-md'
					type='text'
					value={value}
					placeholder='Search Videos...'
					onChange={handleValueChange}
				/>
			</form>
		</>
	);
};

export default Searchbar;
