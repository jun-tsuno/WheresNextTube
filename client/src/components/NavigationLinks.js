import React from "react";
import { Link, Stack, Heading } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";
import { MdTravelExplore } from "react-icons/md";

const activeStyle = {
	color: "#e76f51",
};

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
			<Heading size="xl" mt={10} mb={5} color="#005377" textAlign="center">
				<div className="font-logoTitle">
					Where'sNEXT?
					<br />
					TUBE
					<MdTravelExplore className="inline" />
				</div>
			</Heading>
			<Stack as="b" color="white" fontSize="lg" textAlign="center">
				<HoverLink
					to="/"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Home
				</HoverLink>
				<HoverLink
					to="/howtouse"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					How to Use
				</HoverLink>
				<HoverLink
					to="/favlist"
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					Favorite List
				</HoverLink>
			</Stack>
		</>
	);
};

export default NavigationLinks;
