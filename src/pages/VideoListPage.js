import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoCard from "../components/VideoCard";
import ModalPage from "./ModalPage";
import {
	selectVideo,
	addFavList,
	removeFavList,
	useGetVideoListsQuery,
} from "../store";

const VideoListPage = ({ searchTerm }) => {
	const { data, isError, isFetching } = useGetVideoListsQuery(searchTerm);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const favList = useSelector((state) => {
		return state.videos.favList;
	});
	const favId = favList.map((e) => e.id);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleSelect = (selectedItem) => {
		dispatch(selectVideo(selectedItem));
	};

	const handleFav = (videoInfo) => {
		!favId.includes(videoInfo.id)
			? dispatch(addFavList(videoInfo))
			: dispatch(removeFavList(videoInfo.id));
	};

	let showContent;
	if (isError) {
		console.log("error");
	} else if (isFetching) {
		console.log("fetching");
	} else {
		if (!data) return;
		showContent = data.items.map((item) => {
			if (favId.includes(item.id.videoId)) {
			}

			return (
				<VideoCard
					key={item.id.videoId}
					id={item.id.videoId}
					text={item.snippet.description}
					pic={item.snippet.thumbnails.medium.url}
					title={item.snippet.title}
					className="m-5"
					handleOpenModal={handleOpenModal}
					handleSelect={handleSelect}
					handleFav={handleFav}
					favId={favId}
				/>
			);
		});
	}

	const modal = (
		<ModalPage
			handleCloseModal={handleCloseModal}
			isOpen={isOpen}
			handleFav={handleFav}
			favId={favId}
		/>
	);

	return (
		<>
			<div className="flex flex-wrap justify-center">
				{showContent}
				{isOpen && modal}
			</div>
		</>
	);
};

export default VideoListPage;
