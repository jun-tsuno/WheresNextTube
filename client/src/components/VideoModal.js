import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	CloseButton,
} from "@chakra-ui/react";

const VideoModal = ({ handleCloseModal, isOpen, children }) => {
	return (
		<>
			<Modal isOpen={isOpen}>
				<ModalOverlay />
				<ModalContent maxWidth="850px">
					<CloseButton
						onClick={handleCloseModal}
						size="lg"
						ml="auto"
						mr="20px"
						mt="10px"
						_hover={{ bg: "#e63946", color: "white" }}
					/>
					{children}
				</ModalContent>
			</Modal>
		</>
	);
};

export default VideoModal;
