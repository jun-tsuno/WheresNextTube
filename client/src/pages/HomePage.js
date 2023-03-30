import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import VideoListPage from "./VideoListPage";

const HomePage = () => {
	const [userInput, setUserInput] = useState("");

	const searchTerm = `travel place ${userInput}`;

	const onTermSubmit = (term) => {
		setUserInput(term);
	};

	return (
		<>
			<div>
				<Searchbar onTermSubmit={onTermSubmit} />
			</div>
			<div className="my-28">
				<VideoListPage searchTerm={searchTerm} />
			</div>
		</>
	);
};

export default HomePage;
