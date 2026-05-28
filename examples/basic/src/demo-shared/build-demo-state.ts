import type { IWizardStepState } from 'react-wizard-engine';

interface StepSpec<Step extends string, Category extends string, Branch extends string> {
	branches?: Branch[];
	categoryId: Category;
	id: Step;
	isActive?: boolean;
	isCompleted?: boolean;
	isShow?: boolean;
	isSkipped?: boolean;
}

/**
 * Build an `IWizardStepState[]` array from a compact declarative list. Fills in
 * `htmlIndex` from declaration order and applies sensible defaults
 * (`isShow: true`, all other flags `false`).
 *
 * Used only by demo pages — the production engine always receives fully
 * derived state from the consumer.
 */
export function buildDemoState<Step extends string, Category extends string, Branch extends string = 'main'>(
	specs: ReadonlyArray<StepSpec<Step, Category, Branch>>,
	defaultBranch: Branch = 'main' as Branch
): IWizardStepState<Step, Category, Branch>[] {
	return specs.map((spec, htmlIndex) => ({
		branches: spec.branches ?? [defaultBranch],
		categoryId: spec.categoryId,
		htmlIndex,
		id: spec.id,
		isActive: spec.isActive ?? false,
		isCompleted: spec.isCompleted ?? false,
		isShow: spec.isShow ?? true,
		isSkipped: spec.isSkipped ?? false,
	}));
}
