import React from "react";
import VideoCard from "../components/VideoCard";
import { useGetVideoListsQuery } from "../store";

const VideoListPage = ({ searchTerm }) => {
	const { data, isError, isFetching } = useGetVideoListsQuery(searchTerm);
	console.log(data.items);

	let showContent;
	if (isError) {
		console.log("error");
	} else if (isFetching) {
		console.log("fetching");
	} else {
		showContent = data.items.map((item) => {
			return (
				<VideoCard
					key={item.id.videoId}
					id={item.id.videoId}
					text={item.snippet.description}
					pic={item.snippet.thumbnails.medium.url}
					title={item.snippet.title}
					className="m-5"
				/>
			);
		});
	}

	return <div className="flex flex-wrap justify-center">{showContent}</div>;
};

export default VideoListPage;
