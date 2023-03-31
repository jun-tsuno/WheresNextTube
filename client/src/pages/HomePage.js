import { useState } from 'react';
import Searchbar from '../components/Searchbar';
import VideoListPage from './VideoListPage';
import { useAuthContext } from '../context/AuthContext';

const HomePage = () => {
	const [userInput, setUserInput] = useState('');
	const { user } = useAuthContext();

	const searchTerm = `travel place ${userInput}`;

	const onTermSubmit = (term) => {
		setUserInput(term);
	};

	return (
		<>
			<div className='w-[100vw] md:w-[80vw] fixed pt-16 py-3 z-10 text-center bg-[#f4f1de]'>
				<div className='flex flex-col'>
					{user && (
						<div className='absolute top-[20%] right-[10%] font-semibold'>
							Welcome Back👋: {user.email}
						</div>
					)}
					<div className='w-[80vw] mx-auto'>
						<Searchbar onTermSubmit={onTermSubmit} />
					</div>
				</div>
			</div>
			<div className='my-28'>
				<VideoListPage searchTerm={searchTerm} />
			</div>
		</>
	);
};

export default HomePage;
