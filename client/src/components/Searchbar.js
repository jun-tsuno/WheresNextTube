import React, { useState } from "react";

const Searchbar = ({ onTermSubmit }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onTermSubmit(value);
		setValue("");
	};

	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="w-full h-32 md:h-24 pb-4 items-end fixed flex justify-center z-10 bg-[#f4f1de]"
			>
				<input
					className="w-3/4 max-w-md h-11 p-3 border-2 border-gray-400 rounded-md md:-translate-x-1/4"
					type="text"
					value={value}
					placeholder="Search Videos..."
					onChange={handleValueChange}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
