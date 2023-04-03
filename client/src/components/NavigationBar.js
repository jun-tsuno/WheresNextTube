import React from 'react';
import DrawerMenu from '../components/DrawerMenu';
import NavigationLinks from '../components/NavigationLinks';
import { FaGithub } from 'react-icons/fa';
import { Stack, HStack, Box } from '@chakra-ui/react';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const NavigationBar = () => {
	const { user, logout } = useAuthContext();

	const handleLogout = () => {
		logout();
	};

	let authButton;
	if (user) {
		authButton = (
			<CustomButton navy className='my-3' onClick={handleLogout}>
				Logout
			</CustomButton>
		);
	} else {
		authButton = (
			<Link to='/login'>
				<CustomButton navy className='my-3'>
					Login / SignUp
				</CustomButton>
			</Link>
		);
	}

	return (
		<>
			<Stack>
				<HStack p={5} display={{ base: 'block', md: 'none' }}>
					<Box>
						<DrawerMenu>
							<NavigationLinks />
							{authButton}
							{gitHubLink}
						</DrawerMenu>
					</Box>
				</HStack>
				<HStack alignItems='start' mt='0 !important'>
					<Box
						display={{ base: 'none', md: 'block' }}
						w={768}
						px={6}
						bg='#6ECCAF'
						h='100vh'
					>
						<NavigationLinks />
						{authButton}
						{gitHubLink}
					</Box>
				</HStack>
			</Stack>
		</>
	);
};

const gitHubLink = (
	<a
		href='https://github.com/jun-tsuno/TravelTube.git'
		rel='noreferrer'
		target='_blank'
	>
		<FaGithub className='my-10 mx-auto text-3xl hover:scale-150 hover:cursor-pointer hover:text-[#e76f51]' />
	</a>
);

export default NavigationBar;
