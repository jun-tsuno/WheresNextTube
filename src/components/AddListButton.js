import React from "react";
import { Button } from "@chakra-ui/react";
import { BiMessageAdd } from "react-icons/bi";

const AddListButton = ({ ...rest }) => {
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
				<BiMessageAdd className="text-3xl " />
			</Button>
		</>
	);
};

export default AddListButton;
