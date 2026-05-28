import { useWizard } from 'react-wizard-engine';

/**
 * Live preview of the current `IWizardTreeState`.
 */
export function WizardStatePreview() {
	const wizard = useWizard();
	const tree = wizard.tree;

	const summary = {
		activeBranch: tree.activeBranch.id,
		activeCategory: tree.activeCategory.id,
		categories: Object.fromEntries(
			Object.entries(tree.categoryMap).map(([id, c]) => [
				id,
				{
					isActive: c.isActive,
					isCompleted: c.isCompleted,
					isShow: c.isShow,
					isSkipped: c.isSkipped,
					steps: c.steps.map((s) => s.id),
				},
			])
		),
		lastActiveStep: tree.lastActiveStep?.id,
		shapeId: wizard.shapeId,
	};

	return (
		<details className="rounded border border-border bg-muted/40 p-2 text-xs">
			<summary className="cursor-pointer font-semibold">Wizard state</summary>
			<pre className="mt-2 overflow-auto">{JSON.stringify(summary, null, 2)}</pre>
		</details>
	);
}
