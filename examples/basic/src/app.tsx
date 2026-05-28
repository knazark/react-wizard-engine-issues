import { Analytics } from '@vercel/analytics/react';
import { Outlet, Link } from 'react-router-dom';
import { WizardComponentsProviderWithDefaults } from 'react-wizard-engine/shadcn';

export function App() {
	return (
		<WizardComponentsProviderWithDefaults>
			<div className="container mx-auto max-w-4xl space-y-4 p-4">
				<header className="flex items-baseline gap-3">
					<Link to="/" className="text-xl font-semibold text-foreground">
						Wizard Demos
					</Link>
					<span className="text-xs text-muted-foreground">react-wizard-engine examples</span>
				</header>
				<Outlet />
			</div>
			<Analytics />
		</WizardComponentsProviderWithDefaults>
	);
}
