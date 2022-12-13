import React from "react";
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Image,
	Text,
	CardFooter,
} from "@chakra-ui/react";
import AddListButton from "./AddListButton";

const VideoCard = ({
	id,
	text,
	pic,
	title,
	className,
	handleOpenModal,
	handleSelect,
	handleAddFav,
}) => {
	const videoInfo = {
		id,
		text,
		pic,
		title,
		fav: false,
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
						onClick={() => handleAddFav({ ...videoInfo, fav: true })}
					/>
				</CardFooter>
			</Card>
		</>
	);
};

export default VideoCard;
