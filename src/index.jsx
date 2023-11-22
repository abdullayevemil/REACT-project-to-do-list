import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/slice';
import Root from './routes/root';
import Index from './routes';
import Task from './routes/task';
import EditTask from './routes/edit';
import { action as editAction } from "./routes/edit";

const container = document.getElementById('root');

if (container === null) throw new Error('You don\'t have root element');

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Index />
			},
			{
				path: "tasks/:taskId",
				element: <Task />,
			},
			{
				path: "tasks/:taskId/destroy",
				errorElement: <div>Oops! There was an error.</div>,
			},
			{
				path: "tasks/:taskId/edit",
				action: editAction,
				element: <EditTask />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);