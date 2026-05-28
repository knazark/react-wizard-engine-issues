import {
	composeWizardProviders,
	type IWizardTreeState,
	withInitializer,
	WizardCategory,
	WizardInitializer,
	WizardProvider,
	WizardStep,
	WizardTreeStateBuilder,
} from 'react-wizard-engine';

import { buildDemoState } from '../demo-shared/build-demo-state';
import { WizardDemoFrame } from '../demo-shared/wizard-demo-frame';
import { WizardStepSettings } from '../demo-shared/wizard-step-settings';

type Category = 'A' | 'B' | 'C';
type Step = 'A1' | 'A2' | 'A3' | 'B1' | 'B2' | 'C1' | 'C2';

class MyCustomInitializer extends WizardInitializer<Step, Category> {
	public override getState(
		_tree: Readonly<IWizardTreeState<Step, Category>>,
		htmlTree: Readonly<IWizardTreeState<Step, Category>>
	) {
		return new WizardTreeStateBuilder<Step, Category>(htmlTree)
			.hideStep('A3')
			.completeCategory('A')
			.skipCategory('B')
			.completeCategory('C')
			.activateCategory('C')
			.build();
	}
}

// `MyCustomInitializer` builds the active state from `htmlTree`, so the
// initial state must not pre-mark any step active — otherwise A1 stays active
// alongside C and trips `WizardSingleActiveCategoryRule`.
const initial = buildDemoState<Step, Category>([
	{ categoryId: 'A', id: 'A1' },
	{ categoryId: 'A', id: 'A2' },
	{ categoryId: 'A', id: 'A3' },
	{ categoryId: 'B', id: 'B1' },
	{ categoryId: 'B', id: 'B2' },
	{ categoryId: 'C', id: 'C1' },
	{ categoryId: 'C', id: 'C2' },
]);

export default function WizardSetupInitializerDemo() {
	return (
		<WizardProvider<Step, Category>
			state={initial}
			{...composeWizardProviders<Step, Category>(withInitializer(new MyCustomInitializer()))}
		>
			<WizardDemoFrame data-test="wizard-setup-initializer">
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
