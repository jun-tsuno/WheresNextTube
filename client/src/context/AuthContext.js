import { createContext, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const { user, setUser, signup } = useAuth();

	console.log(user);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		} else {
			setUser(null);
		}
	}, [setUser]);

	return (
		<AuthContext.Provider value={{ user, setUser, signup }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
