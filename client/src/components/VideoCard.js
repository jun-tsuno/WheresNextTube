import AddFavButton from './AddFavButton';
import useVideoSelect from '../hooks/useVideoSelect';
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Image,
	Text,
	CardFooter,
} from '@chakra-ui/react';

const VideoCard = ({
	videoId,
	text,
	pic,
	title,
	className,
	handleOpenModal,
}) => {
	const handleSelect = useVideoSelect();
	const videoInfo = {
		videoId,
		text,
		pic,
		title,
	};

	return (
		<>
			<Card w='300px' bg='white' className={className}>
				<CardBody>
					<Image
						src={pic}
						alt='Thumbnail'
						borderRadius='lg'
						cursor='pointer'
						_hover={{ filter: 'auto', brightness: '75%' }}
						onClick={() => {
							handleOpenModal();
							handleSelect(videoInfo);
						}}
					/>
					<Stack mt='6' spacing='3'>
						<Heading size='md'>{title}</Heading>
						<Text>{text}</Text>
					</Stack>
				</CardBody>
				<CardFooter ml='auto'>
					<AddFavButton videoInfo={videoInfo} videoId={videoId} />
				</CardFooter>
			</Card>
		</>
	);
};

export default VideoCard;
