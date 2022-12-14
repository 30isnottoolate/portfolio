import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './components/App';

const root = ReactDOM.createRoot(
	document.getElementById('app-container') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Portfolio />
	</React.StrictMode>
);
