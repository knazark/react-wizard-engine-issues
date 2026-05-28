import type { ReactNode } from 'react';

import { WizardHeader } from 'react-wizard-engine';

import { WizardStatePreview } from './wizard-state-preview';

interface IWizardDemoFrameProps {
	children: ReactNode;
	'data-test'?: string;
	footer?: ReactNode;
}

/**
 * Common chrome for every demo page: state preview, header, body. Per-step
 * controls (Skip / Reset / Next) live inside `WizardStepSettings` so they
 * render inline with each step's content. The `footer` slot is kept for
 * one-off demo extras.
 */
export function WizardDemoFrame(props: IWizardDemoFrameProps) {
	return (
		<div className="flex flex-col gap-3" data-test={props['data-test']}>
			<WizardStatePreview />
			<div className="mx-auto flex w-full max-w-[840px] flex-col gap-3 rounded border border-border p-3">
				<WizardHeader />
				<div className="wizard-body w-full">{props.children}</div>
			</div>
			{props.footer ? <div className="flex gap-2">{props.footer}</div> : null}
		</div>
	);
}
