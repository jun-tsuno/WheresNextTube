import React from "react";
import { Button } from "@chakra-ui/react";

const AddListButton = ({ buttonIcon, ...rest }) => {
	return (
		<>
			<Button
				p={2}
				borderRadius="50%"
				bg="gray.200"
				_hover={{ bg: "gray.500", color: "white" }}
				size="lg"
				{...rest}
			>
				{buttonIcon}
			</Button>
		</>
	);
};

export default AddListButton;
