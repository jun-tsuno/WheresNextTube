import { useState, useCallback } from 'react';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';
import useFav from './useFav';

const useAuth = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();
	const { resetAllFav } = useFav();

	const signup = async (data) => {
		try {
			const response = await axios.post('/auth/signup', data);
			const token = response.data.token;
			const refresh_token = response.data.refresh_token;

			// set token in the header and set in local storage
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			localStorage.setItem('token', token);
			localStorage.setItem('refresh_token', refresh_token);
			// get user and set it global
			await getUser();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (data) => {
		try {
			const response = await axios.post('/auth/login', data);
			const token = response.data.token;
			const refresh_token = response.data.refresh_token;

			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			localStorage.setItem('token', token);
			localStorage.setItem('refresh_token', refresh_token);

			await getUser();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const logout = useCallback(() => {
		const token = null;
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

		setUser(null);
		resetAllFav();
		localStorage.removeItem('token');
		navigate('/');
	}, [navigate, resetAllFav]);

	const getUser = useCallback(async () => {
		try {
			const response = await axios.get('/auth/user');
			setUser(response.data.user);
		} catch (error) {
			console.log(error);
			logout();
		}
	}, [logout]);

	return { user, setUser, signup, login, logout, getUser };
};

export default useAuth;
