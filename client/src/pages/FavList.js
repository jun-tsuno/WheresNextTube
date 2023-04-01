import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from '../components/VideoCard';
import ModalPage from './ModalPage';
import useModal from '../hooks/useModal';
import { Card, CardBody } from '@chakra-ui/react';
import { RiVideoLine } from 'react-icons/ri';

const FavList = () => {
	const favList = useSelector((state) => {
		return state.videos.favList;
	});
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	let showContent;
	if (favList.length === 0) {
		showContent = (
			<Card bg='white'>
				<CardBody m={10}>
					<div className='text-center'>
						<h2 className='text-2xl font-bold mb-10'>No Favorite Videos!!</h2>
						<p className='text-xl'>
							You can add videos to your List at Home page.
						</p>
					</div>
				</CardBody>
			</Card>
		);
	} else {
		showContent = favList.map((item) => {
			return (
				<VideoCard
					key={item.videoId}
					videoId={item.videoId}
					text={item.text}
					pic={item.pic}
					title={item.title}
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
			<div className='flex items-center w-28 mt-8 ml-auto mr-7 p-1 border-b-[2px] border-gray-300'>
				<RiVideoLine className='text-xl mr-1' />
				<span>Favorite</span>
				<strong className='ml-3 text-2xl'>{`${favList.length}`}</strong>
			</div>
			<div className='flex flex-wrap justify-center mt-5'>
				{showContent}
				{isOpen && modal}
			</div>
		</>
	);
};

export default FavList;
