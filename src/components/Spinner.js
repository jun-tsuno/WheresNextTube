import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
	return (
		<div className="mt-40">
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#6ECCAF"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
};

export default Spinner;
