import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<AuthContextProvider>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</AuthContextProvider>
		</Provider>
	</BrowserRouter>
);
