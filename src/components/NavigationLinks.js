import React from "react";
import { Link, Stack, Heading } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const HoverLink = (props) => (
	<Link
		as={RouterLink}
		rounded="base"
		_hover={{ bg: "gray.200", color: "#005377" }}
		p={4}
		{...props}
	/>
);

const NavigationLinks = () => {
	return (
		<>
			<Heading size="lg" my={5} color="#005377">
				TravelTUBE
			</Heading>
			<Stack as="b" color="white" fontSize="lg">
				<HoverLink to="/">Home</HoverLink>
				<HoverLink to="/howtouse">How to Use</HoverLink>
				<HoverLink to="/favlist">Favorite List</HoverLink>
			</Stack>
		</>
	);
};

export default NavigationLinks;
