import { Link } from 'react-router-dom';

const routes = [
	{ desc: 'basic 3-category wizard', href: '/setup', label: 'setup' },
	{ desc: 'every option pre-set on steps & categories', href: '/setup-full', label: 'setup-full' },
	{ desc: 'custom initializer hydrates state', href: '/setup-initializer', label: 'setup-initializer' },
	{ desc: 'plain linear flow with step settings', href: '/linear', label: 'linear' },
	{ desc: 'branch fork (D1 / D2) with merge', href: '/diamond', label: 'diamond' },
];

export default function WizardDemoIndex() {
	return (
		<ul className="space-y-1 text-sm">
			{routes.map((r) => (
				<li key={r.href}>
					<Link className="font-mono text-primary underline" to={r.href}>
						{r.label}
					</Link>
					<span className="ml-2 text-muted-foreground">— {r.desc}</span>
				</li>
			))}
		</ul>
	);
}
