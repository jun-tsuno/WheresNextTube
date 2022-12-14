import React from "react";
import VideoCard from "../components/VideoCard";
import ModalPage from "./ModalPage";
import Spinner from "../components/Spinner";
import Error from "./Error";
import useModal from "../hooks/useModal";
import { useGetVideoListsQuery } from "../store";

const VideoListPage = ({ searchTerm }) => {
	const { data, isError, isFetching } = useGetVideoListsQuery(searchTerm);
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	let showContent;
	if (isError) {
		showContent = <Error />;
	} else if (isFetching) {
		showContent = <Spinner />;
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
