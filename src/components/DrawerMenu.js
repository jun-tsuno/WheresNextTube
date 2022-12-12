import React from "react";
import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useDisclosure } from "@chakra-ui/react";

function DrawerMenu({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} bg="#6ECCAF" onClick={onOpen}>
				<HamburgerIcon />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="xs"
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody bg="#6ECCAF">{children}</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default DrawerMenu;
