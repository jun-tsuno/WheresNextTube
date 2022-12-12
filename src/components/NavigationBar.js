import React from "react";
import DrawerMenu from "../components/DrawerMenu";
import NavigationLinks from "../components/NavigationLinks";
import { Stack, HStack, Box } from "@chakra-ui/react";

const NavigationBar = () => {
	return (
		<>
			<Stack>
				<HStack p={5} display={{ base: "block", md: "none" }}>
					<Box>
						<DrawerMenu>
							<NavigationLinks />
						</DrawerMenu>
					</Box>
				</HStack>
				<HStack alignItems="start" mt="0 !important">
					<Box
						display={{ base: "none", md: "block" }}
						w={768}
						px={6}
						bg="#6ECCAF"
						h="100vh"
					>
						<NavigationLinks />
					</Box>
				</HStack>
			</Stack>
		</>
	);
};

export default NavigationBar;
