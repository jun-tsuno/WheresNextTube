import React from 'react';
import { useSelector } from 'react-redux';
import VideoModal from '../components/VideoModal';
import AddFavButton from '../components/AddFavButton';
import { ModalBody, ModalFooter, ModalHeader } from '@chakra-ui/react';

const ModalPage = ({ handleCloseModal, isOpen }) => {
	const { videoId, text, title, pic } = useSelector((state) => {
		return state.videos.selectedVideo;
	});

	const videoInfo = {
		videoId,
		text,
		title,
		pic,
	};

	const videoUrl = `https://www.youtube.com/embed/${videoId}`;

	const modalContents = (
		<>
			<ModalHeader>{title}</ModalHeader>
			<ModalBody>
				<iframe
					src={videoUrl}
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					style={{ width: '100%', aspectRatio: 16 / 9 }}
				/>
				<p className='mt-8'>{text}</p>
			</ModalBody>
			<ModalFooter>
				<AddFavButton videoInfo={videoInfo} videoId={videoId} />
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
