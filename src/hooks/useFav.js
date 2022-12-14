import { useSelector, useDispatch } from "react-redux";
import { addFavList, removeFavList } from "../store";

const useFav = () => {
	const dispatch = useDispatch();
	const favList = useSelector((state) => {
		return state.videos.favList;
	});
	const favId = favList.map((e) => e.id);

	const handleFav = (videoInfo) => {
		!favId.includes(videoInfo.id)
			? dispatch(addFavList(videoInfo))
			: dispatch(removeFavList(videoInfo.id));
	};

	return { favId, handleFav };
};

export default useFav;
