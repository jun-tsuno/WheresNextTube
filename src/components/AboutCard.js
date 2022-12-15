import React from "react";
import { Card, CardBody } from "@chakra-ui/react";

const AboutCard = ({ contents }) => {
	return (
		<>
			<Card bg="white">
				<CardBody>{contents}</CardBody>
			</Card>
		</>
	);
};

export default AboutCard;
