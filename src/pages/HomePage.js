import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import { useGetVideoListsQuery } from "../store";

const HomePage = () => {
	const [searchTerm, setSearchTerm] = useState("travel");
	const { data, isError, isFetching } = useGetVideoListsQuery(searchTerm);

	const onTermSubmit = (term) => {
		setSearchTerm(term);
	};

	if (isError) {
		console.log("error");
	} else if (isFetching) {
		console.log("fetching");
	} else {
		console.log(data.items);
	}

	return (
		<div>
			<Searchbar onTermSubmit={onTermSubmit} />
		</div>
	);
};

export default HomePage;
