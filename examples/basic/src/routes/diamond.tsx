import { useSearchParams } from 'react-router-dom';

import {
	composeWizardProviders,
	useWizard,
	withConfig,
	WizardCategory,
	WizardProvider,
	WizardStep,
} from 'react-wizard-engine';

import { buildDemoState } from '../demo-shared/build-demo-state';
import { WizardDemoFrame } from '../demo-shared/wizard-demo-frame';
import { WizardStepSettings } from '../demo-shared/wizard-step-settings';

/*  Diamond shape:
 *
 *           (Root)
 *             o
 *          /     \
 *      (1) o       o (2)
 *          \     /
 *             o
 *           (End)
 */

type Branch = 'D1' | 'D2';
type Category = 'A' | 'B' | 'End' | 'Root';
type Step = 'A1' | 'A2' | 'A3' | 'B1' | 'E1' | 'E2' | 'R1' | 'R2';

export default function WizardDiamondDemo() {
	const [searchParams] = useSearchParams();
	const activeBranch = (searchParams.get('activeBranch') as Branch | null) ?? 'D1';
	const isRootCompleted = searchParams.get('rootCompleted') === '1';

	return (
		<WizardProvider<Step, Category, Branch>
			activeBranch={activeBranch}
			state={buildState(isRootCompleted)}
			{...composeWizardProviders<Step, Category, Branch>(
				withConfig({
					doneDotText: 'Finish',
					headerI18n: { A: 'A', B: 'B', End: 'End', Root: 'Root' },
				})
			)}
		>
			<WizardDemoFrame data-test="wizard-diamond">
				<WizardCategory<Category> categoryId="Root">
					<WizardStep id="R1">
						<WizardStepSettings stepId="R1" />
					</WizardStep>
					<WizardStep id="R2">
						<WizardStepSettings stepId="R2">
							<BranchPicker />
						</WizardStepSettings>
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="A">
					<WizardStep id="A1">
						<WizardStepSettings stepId="A1" />
					</WizardStep>
					<WizardStep id="A2">
						<WizardStepSettings stepId="A2" />
					</WizardStep>
					<WizardStep id="A3">
						<WizardStepSettings stepId="A3" />
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="B">
					<WizardStep id="B1">
						<WizardStepSettings stepId="B1" />
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="End">
					<WizardStep id="E1">
						<WizardStepSettings stepId="E1" />
					</WizardStep>
					<WizardStep id="E2">
						<WizardStepSettings stepId="E2" />
					</WizardStep>
				</WizardCategory>
			</WizardDemoFrame>
		</WizardProvider>
	);
}

function BranchPicker() {
	const wizard = useWizard<Step, Category, Branch>();
	return (
		<div className="flex gap-2 text-xs">
			<button
				className="rounded border border-border px-2 py-1"
				onClick={() => void wizard.next('D1')}
				type="button"
			>
				Go to D1
			</button>
			<button
				className="rounded border border-border px-2 py-1"
				onClick={() => void wizard.next('D2')}
				type="button"
			>
				Go to D2
			</button>
		</div>
	);
}

function buildState(isRootCompleted: boolean) {
	return buildDemoState<Step, Category, Branch>(
		[
			{
				branches: ['D1', 'D2'],
				categoryId: 'Root',
				id: 'R1',
				isActive: !isRootCompleted,
				isCompleted: isRootCompleted,
			},
			{
				branches: ['D1', 'D2'],
				categoryId: 'Root',
				id: 'R2',
				isActive: isRootCompleted,
				isCompleted: isRootCompleted,
			},
			{ branches: ['D1'], categoryId: 'A', id: 'A1' },
			{ branches: ['D1'], categoryId: 'A', id: 'A2' },
			{ branches: ['D1'], categoryId: 'A', id: 'A3' },
			{ branches: ['D2'], categoryId: 'B', id: 'B1' },
			{ branches: ['D1', 'D2'], categoryId: 'End', id: 'E1' },
			{ branches: ['D1', 'D2'], categoryId: 'End', id: 'E2' },
		],
		'D1'
	);
}
