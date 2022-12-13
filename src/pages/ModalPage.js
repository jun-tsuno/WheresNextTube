import React from "react";
import VideoModal from "../components/VideoModal";
import { useSelector } from "react-redux";
import { ModalBody, ModalFooter, ModalHeader } from "@chakra-ui/react";
import AddListButton from "../components/AddListButton";

const ModalPage = ({ handleCloseModal, isOpen }) => {
	const { id, text, title } = useSelector((state) => {
		return state.videos.selectedVideo;
	});

	const videoUrl = `https://www.youtube.com/embed/${id}`;

	const modalContents = (
		<>
			<ModalHeader>{title}</ModalHeader>
			<ModalBody>
				<iframe
					src={videoUrl}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					style={{ width: "100%", aspectRatio: 16 / 9 }}
				/>
				<p className="mt-8">{text}</p>
			</ModalBody>
			<ModalFooter>
				<AddListButton />
			</ModalFooter>
		</>
	);

	return (
		<div>
			<VideoModal handleCloseModal={handleCloseModal} isOpen={isOpen}>
				{modalContents}
			</VideoModal>
		</div>
	);
};

export default ModalPage;
