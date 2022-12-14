import React from "react";
import AddListButton from "./AddListButton";
import getButtonIcon from "../helpers/getButtonIcon";
import useFav from "../hooks/useFav";
import useVideoSelect from "../hooks/useVideoSelect";
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Image,
	Text,
	CardFooter,
} from "@chakra-ui/react";

const VideoCard = ({ id, text, pic, title, className, handleOpenModal }) => {
	const { favId, handleFav } = useFav();
	const handleSelect = useVideoSelect();
	const videoInfo = {
		id,
		text,
		pic,
		title,
	};

	return (
		<>
			<Card w="300px" className={className}>
				<CardBody>
					<Image
						src={pic}
						alt="Thumbnail"
						borderRadius="lg"
						cursor="pointer"
						_hover={{ filter: "auto", brightness: "75%" }}
						onClick={() => {
							handleOpenModal();
							handleSelect(videoInfo);
						}}
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{title}</Heading>
						<Text>{text}</Text>
					</Stack>
				</CardBody>
				<CardFooter ml="auto">
					<AddListButton
						onClick={() => handleFav({ ...videoInfo, fav: true })}
						buttonIcon={getButtonIcon(favId, id)}
					/>
				</CardFooter>
			</Card>
		</>
	);
};

export default VideoCard;
