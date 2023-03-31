import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const SharedLayout = () => {
	return (
		<>
			<div className='flex'>
				<div className='max-w-[210px] fixed z-20'>
					<NavigationBar />
				</div>
				<div className='w-full  md:pl-[210px] '>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default SharedLayout;
