import { createContext, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../config/axios';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const { user, setUser, signup, login, logout, getUser } = useAuth();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			getUser();
		} else {
			setUser(null);
		}
	}, [setUser]);

	return (
		<AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
