import { WizardCategory, WizardProvider, WizardStep } from 'react-wizard-engine';

import { buildDemoState } from '../demo-shared/build-demo-state';
import { WizardDemoFrame } from '../demo-shared/wizard-demo-frame';
import { WizardStepSettings } from '../demo-shared/wizard-step-settings';
import { ExitNavigator } from '../exit-navigator';

type Category = 'A' | 'B' | 'C';
type Step = 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'C1' | 'C2';

const initial = buildDemoState<Step, Category>([
	{ categoryId: 'A', id: 'A1', isActive: true },
	{ categoryId: 'A', id: 'A2' },
	{ categoryId: 'A', id: 'A3' },
	{ categoryId: 'B', id: 'B1' },
	{ categoryId: 'B', id: 'B2' },
	{ categoryId: 'C', id: 'C1' },
	{ categoryId: 'C', id: 'C2' },
]);

export default function WizardLinearDemo() {
	return (
		<WizardProvider<Step, Category> state={initial}>
			<ExitNavigator />
			<WizardDemoFrame data-test="wizard-linear">
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
					<WizardStep id="B2">
						<WizardStepSettings stepId="B2" />
					</WizardStep>
				</WizardCategory>
				<WizardCategory<Category> categoryId="C">
					<WizardStep id="C1">
						<WizardStepSettings stepId="C1" />
					</WizardStep>
					<WizardStep id="C2">
						<WizardStepSettings stepId="C2" />
					</WizardStep>
				</WizardCategory>
			</WizardDemoFrame>
		</WizardProvider>
	);
}
