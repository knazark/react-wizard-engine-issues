import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './app';
import './styles.css';

import WizardDemoIndex from './routes/index';
import WizardSetupDemo from './routes/setup';
import WizardSetupFullDemo from './routes/setup-full';
import WizardSetupInitializerDemo from './routes/setup-initializer';
import WizardLinearDemo from './routes/linear';
import WizardDiamondDemo from './routes/diamond';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <WizardDemoIndex /> },
			{ path: 'setup', element: <WizardSetupDemo /> },
			{ path: 'setup-full', element: <WizardSetupFullDemo /> },
			{ path: 'setup-initializer', element: <WizardSetupInitializerDemo /> },
			{ path: 'linear', element: <WizardLinearDemo /> },
			{ path: 'diamond', element: <WizardDiamondDemo /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
