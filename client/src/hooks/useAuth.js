import { useState } from 'react';
import axios from '../config/axios';

const useAuth = () => {
	const [user, setUser] = useState();

	const signup = async (data) => {
		try {
			const response = await axios.post('/auth/signup', data);
			console.log(response);
			const token = response.data.token;

			// set token in the header
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			localStorage.setItem('token', token);

			await getUser();
		} catch (error) {
			console.log(error);
		}
	};

	const getUser = async () => {
		try {
			const response = await axios.get('/auth/user');
			setUser(response.data.user);
		} catch (error) {
			console.log(error);
		}
	};

	return { user, setUser, signup };
};

export default useAuth;
