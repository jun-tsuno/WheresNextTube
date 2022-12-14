import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import ModalPage from "./ModalPage";
import useModal from "../hooks/useModal";

const FavList = () => {
	const favList = useSelector((state) => {
		return state.videos.favList;
	});
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	let showContent;
	if (!favList) {
		return;
	} else {
		showContent = favList.map((item) => {
			return (
				<VideoCard
					key={item.id}
					id={item.id}
					text={item.text}
					pic={item.pic}
					title={item.title}
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

export default FavList;
