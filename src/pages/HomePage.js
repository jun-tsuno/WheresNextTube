import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import VideoListPage from "./VideoListPage";

const HomePage = () => {
	const [searchTerm, setSearchTerm] = useState("travel");

	const onTermSubmit = (term) => {
		setSearchTerm(term);
	};

	return (
		<>
			<div className="mt-8">
				<Searchbar onTermSubmit={onTermSubmit} />
			</div>
			<div className="my-10">
				<VideoListPage searchTerm={searchTerm} />
			</div>
		</>
	);
};

export default HomePage;
