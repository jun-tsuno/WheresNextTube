import { useDispatch } from "react-redux";
import { selectVideo } from "../store";

const useVideoSelect = () => {
	const dispatch = useDispatch();

	const handleSelect = (selectedItem) => {
		dispatch(selectVideo(selectedItem));
	};

	return handleSelect;
};

export default useVideoSelect;
