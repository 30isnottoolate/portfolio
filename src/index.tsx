import ReactDOM from 'react-dom/client';
import Portfolio from './components/App';

const root = ReactDOM.createRoot(
	document.getElementById('app-container') as HTMLElement
);
root.render(
	<Portfolio />
);
