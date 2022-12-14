import { BiMessageAdd } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const getButtonIcon = (favId, id) => {
	if (favId.includes(id)) {
		return (
			<>
				<FaHeart className="text-2xl text-red-400" />
			</>
		);
	} else {
		return (
			<>
				{" "}
				<BiMessageAdd className="text-3xl " />
			</>
		);
	}
};

export default getButtonIcon;
