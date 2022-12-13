import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import ModalPage from "./ModalPage";
import { selectVideo, addFavList, useGetVideoListsQuery } from "../store";
import { useSelector, useDispatch } from "react-redux";

const VideoListPage = ({ searchTerm }) => {
	const { data, isError, isFetching } = useGetVideoListsQuery(searchTerm);
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const favList = useSelector((state) => {
		return state.videos.favList;
	});

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleSelect = (selectedItem) => {
		dispatch(selectVideo(selectedItem));
	};

	const handleAddFav = (videoInfo) => {
		if (favList.length === 0) {
			return dispatch(addFavList(videoInfo));
		} else {
			for (let i = 0; i < favList.length; i++) {
				if (favList[i].id === videoInfo.id) {
					return;
				}
			}
			return dispatch(addFavList(videoInfo));
		}
	};

	let showContent;
	if (isError) {
		console.log("error");
	} else if (isFetching) {
		console.log("fetching");
	} else {
		if (!data) return;
		showContent = data.items.map((item) => {
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
					handleAddFav={handleAddFav}
				/>
			);
		});
	}

	const modal = (
		<ModalPage handleCloseModal={handleCloseModal} isOpen={isOpen} />
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
