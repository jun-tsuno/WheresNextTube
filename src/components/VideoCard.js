import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addFavList } from "../store";

const VideoCard = ({
	id,
	text,
	pic,
	title,
	className,
	handleOpenModal,
	handleSelect,
}) => {
	const favList = useSelector((state) => {
		return state.videos.favList;
	});

	const dispatch = useDispatch();
	const videoInfo = {
		id,
		text,
		pic,
		title,
	};

	const handleAddFav = () => {
		if (favList.length === 0) {
			console.log("first");
			return dispatch(addFavList(videoInfo));
		} else {
			for (let i = 0; i < favList.length; i++) {
				if (favList[i].id === id) {
					console.log("second");
					return;
				}
				console.log("third");

				return dispatch(addFavList(videoInfo));
			}
		}
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
					<AddListButton onClick={handleAddFav} />
				</CardFooter>
			</Card>
		</>
	);
};

export default VideoCard;
