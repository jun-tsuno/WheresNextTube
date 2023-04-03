import { createContext, useEffect, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import useFav from '../hooks/useFav';
import axios from '../config/axios';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const { user, authErr, setAuthErr, setUser, signup, login, logout, getUser } =
		useAuth();
	const { getUserFav } = useFav();

	useEffect(() => {
		const token = localStorage.getItem('token');

		if (token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
			getUser();
		} else {
			setUser(null);
		}
	}, [setUser]);

	useEffect(() => {
		// only if user exist, get user fav (or error)
		if (user) {
			getUserFav(user._id);
		}
	}, [user]);

	return (
		<AuthContext.Provider
			value={{ user, authErr, setAuthErr, setUser, signup, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => {
	return useContext(AuthContext);
};
