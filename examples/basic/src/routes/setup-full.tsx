import { composeWizardProviders, withConfig, WizardCategory, WizardProvider, WizardStep } from 'react-wizard-engine';

import { buildDemoState } from '../demo-shared/build-demo-state';
import { WizardDemoFrame } from '../demo-shared/wizard-demo-frame';
import { WizardStepSettings } from '../demo-shared/wizard-step-settings';

type Category = 'A' | 'B' | 'C';
type Step = 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'C1' | 'C2';

// The engine accumulates active steps within a category — `next()` completes
// the current step without deactivating it, then activates the following one.
// So a preset state mid-way through category C must mark C1 active too;
// otherwise `prev()` from C2 deactivates the only active step and trips
// WizardActiveStepRule.
const initial = buildDemoState<Step, Category>([
	{ categoryId: 'A', id: 'A1', isCompleted: true },
	{ categoryId: 'A', id: 'A2', isCompleted: true },
	{ categoryId: 'A', id: 'A3', isCompleted: true, isShow: false },
	{ categoryId: 'B', id: 'B1', isSkipped: true },
	{ categoryId: 'B', id: 'B2', isSkipped: true },
	{ categoryId: 'C', id: 'C1', isActive: true, isCompleted: true },
	{ categoryId: 'C', id: 'C2', isActive: true },
]);

export default function WizardSetupFullDemo() {
	return (
		<WizardProvider<Step, Category>
			state={initial}
			{...composeWizardProviders<Step, Category>(withConfig({ headerI18n: { A: 'A', B: 'B', C: 'C' } }))}
		>
			<WizardDemoFrame data-test="wizard-setup-full">
				<WizardCategory<Category> categoryId="A">
					<WizardStep id="A1">
						<WizardStepSettings controls="next-only" stepId="A1" />
					</WizardStep>
					<WizardStep id="A2">
						<WizardStepSettings controls="next-only" stepId="A2" />
					</WizardStep>
					<WizardStep id="A3">
						<WizardStepSettings controls="next-only" stepId="A3" />
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="B">
					<WizardStep id="B1">
						<WizardStepSettings controls="next-only" stepId="B1" />
					</WizardStep>
					<WizardStep id="B2">
						<WizardStepSettings controls="next-only" stepId="B2" />
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="C">
					<WizardStep id="C1">
						<WizardStepSettings controls="next-only" stepId="C1" />
					</WizardStep>
					<WizardStep id="C2">
						<WizardStepSettings controls="next-only" stepId="C2" />
					</WizardStep>
				</WizardCategory>
			</WizardDemoFrame>
		</WizardProvider>
	);
}
