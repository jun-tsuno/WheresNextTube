import React from 'react';
import VideoCard from '../components/VideoCard';
import ModalPage from './ModalPage';
import Spinner from '../components/Spinner';
import Error from './Error';
import useModal from '../hooks/useModal';
import { useGetVideoListsQuery } from '../store';

const VideoListPage = ({ searchTerm, setSearchTerm }) => {
	const { data, error, isFetching } = useGetVideoListsQuery(searchTerm);
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	let showContent;
	if (error) {
		showContent = <Error message={error.data.error.message} />;
	} else if (isFetching) {
		showContent = <Spinner />;
	} else {
		if (!data) return;
		showContent = data.items.map((video) => {
			return (
				<VideoCard
					key={video.id.videoId}
					videoId={video.id.videoId}
					text={video.snippet.description}
					pic={video.snippet.thumbnails.medium.url}
					title={video.snippet.title}
					className='m-5'
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
			<div className='flex flex-wrap justify-center'>
				{showContent}
				{isOpen && modal}
			</div>
		</>
	);
};

export default VideoListPage;
