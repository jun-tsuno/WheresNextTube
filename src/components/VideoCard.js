import React from "react";
import {
	Card,
	CardBody,
	Stack,
	Heading,
	Image,
	Text,
	Button,
} from "@chakra-ui/react";
import { BiMessageAdd } from "react-icons/bi";

const VideoCard = ({ id, text, pic, title, className }) => {
	return (
		<>
			<Card w="300px" className={className}>
				<CardBody>
					<Image src={pic} alt="Thumbnail" borderRadius="lg" />
					<Stack mt="6" spacing="3">
						<Heading size="md">{title}</Heading>
						<Text>{text}</Text>
					</Stack>
					<Button
						p={2}
						borderRadius="50%"
						bg="gray.200"
						_hover={{ bg: "gray.300" }}
					>
						<BiMessageAdd className="text-2xl hover:text-[#E76F51]" />
					</Button>
				</CardBody>
			</Card>
		</>
	);
};

export default VideoCard;
