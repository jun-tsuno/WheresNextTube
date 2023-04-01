import { Tooltip } from '@chakra-ui/react';
import FavIconButton from './FavIconButton';
import getButtonIcon from '../helpers/getButtonIcon';
import { useAuthContext } from '../context/AuthContext';
import useFav from '../hooks/useFav';

const AddFavButton = ({ videoInfo, videoId }) => {
	const { favId, handleFav } = useFav();
	const { user } = useAuthContext();

	return (
		<>
			<Tooltip
				label='Please Login to add Favorite videos'
				hasArrow
				isDisabled={user}
			>
				<span>
					<FavIconButton
						onClick={() => handleFav(videoInfo, user._id)}
						buttonIcon={getButtonIcon(favId, videoId)}
						disabled={!user}
					/>
				</span>
			</Tooltip>
		</>
	);
};

export default AddFavButton;
