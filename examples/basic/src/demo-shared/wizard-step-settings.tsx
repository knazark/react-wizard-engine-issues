import type { ReactNode } from 'react';

import { useWizard, WizardNext } from 'react-wizard-engine';

interface IWizardStepSettingsProps {
	children?: ReactNode;
	controls?: 'all' | 'next-only' | 'none';
	stepId: string;
}

/**
 * Per-step debug controls. The Next button lives here (not in the demo frame's
 * footer) so each step's controls sit together in one card.
 */
export function WizardStepSettings(props: IWizardStepSettingsProps) {
	const wizard = useWizard();
	const tree = wizard.tree;
	const step = tree.stepMap[props.stepId];
	const category = step ? tree.categoryMap[step.categoryId] : null;
	const isLastActive = tree.lastActiveStep.id === props.stepId;

	const controls = props.controls ?? 'all';
	const showSkip = controls === 'all';
	const showReset = controls === 'all';
	const showNext = controls !== 'none' && isLastActive;

	const onSkip = () => {
		void wizard.skipActiveCategory();
	};

	const onReset = () => {
		if (!step || !category) return;
		const stepIndex = category.steps.findIndex((s) => s.id === step.id);
		void wizard.resetActiveCategory(stepIndex);
	};

	return (
		<section className="rounded border border-border bg-background p-3">
			<h3 className="text-sm font-semibold">{props.stepId}</h3>
			<div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
				{showSkip && (
					<button
						className="rounded border border-border bg-background px-2 py-1 text-xs hover:bg-muted"
						onClick={onSkip}
						type="button"
					>
						Skip category
					</button>
				)}
				{showReset && (
					<button
						className="rounded border border-border bg-background px-2 py-1 text-xs hover:bg-muted"
						onClick={onReset}
						type="button"
					>
						Reset category
					</button>
				)}
				{showNext && <WizardNext />}
			</div>
			{props.children ? <div className="mt-2">{props.children}</div> : null}
		</section>
	);
}
