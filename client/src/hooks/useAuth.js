import { useState, useCallback } from 'react';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
	const [user, setUser] = useState();
	const navigate = useNavigate();

	console.log(user);

	const signup = async (data) => {
		try {
			const response = await axios.post('/auth/signup', data);
			const token = response.data.token;

			// set token in the header and set in local storage
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			localStorage.setItem('token', token);
			// get user and set it global
			await getUser();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const getUser = useCallback(async () => {
		try {
			const response = await axios.get('/auth/user');
			setUser(response.data.user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return { user, setUser, signup, getUser };
};

export default useAuth;
