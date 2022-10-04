import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<HashRouter basename="frazorok.github.io/web-movie">
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
);
