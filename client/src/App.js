import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import FavList from './pages/FavList';
import Error from './pages/Error';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='signup' element={<SignupPage />} />
					<Route path='howtouse' element={<About />} />
					<Route path='favlist' element={<FavList />} />
					<Route path='*' element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
