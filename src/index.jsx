import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/slice';
import Root from './routes/root';
const container = document.getElementById('root');

if (container === null) throw new Error('You don\'t have root element');

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);

const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);