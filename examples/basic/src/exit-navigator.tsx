import { useNavigate } from 'react-router-dom';

import { useWizardEvent, WizardEventType } from 'react-wizard-engine';

/**
 * Navigates back to the demo index when the wizard exits or completes.
 */
export function ExitNavigator() {
	const navigate = useNavigate();
	useWizardEvent(WizardEventType.Exit, () => navigate('/'));
	useWizardEvent(WizardEventType.Complete, () => navigate('/'));
	return null;
}
