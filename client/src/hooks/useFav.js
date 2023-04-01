import { useSelector, useDispatch } from 'react-redux';
import { addFavList, removeFavList, resetFavList } from '../store';
import axios from '../config/axios';

const useFav = () => {
	const dispatch = useDispatch();
	const favList = useSelector((state) => {
		return state.videos.favList;
	});
	const favId = favList.map((e) => e.videoId);

	const handleFav = async (videoInfo, userId) => {
		if (favId.includes(videoInfo.videoId)) {
			const response = await axios.delete(`/favorite/${videoInfo.videoId}`);
			const video = response.data;
			dispatch(removeFavList(video.videoId));
		} else {
			try {
				const response = await axios.post('/favorite', {
					...videoInfo,
					userId,
				});
				const video = response.data;
				dispatch(addFavList(video));
			} catch (error) {
				console.log(error.message);
			}
		}
	};

	const resetAllFav = () => {
		dispatch(resetFavList());
	};

	return { favId, handleFav, resetAllFav };
};

export default useFav;
