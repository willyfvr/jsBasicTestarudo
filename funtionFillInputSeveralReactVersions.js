/**
 * Fills a text input element with the specified value and properly triggers
 * React's internal change detection.
 *
 * This function directly sets the input's value, creates and dispatches
 * an "input" event, and updates React's internal value tracker so that
 * the UI and virtual DOM stay in sync.
 *
 * Works for React 15 and React 16+.
 *
 * @param {HTMLInputElement} element - The input element to fill.
 * @param {string} value - The new value to set in the input field.
 */
function fillInputText(element, value) {
	let lastValue = element.value;
	element.value = value;
	let event = new Event("input", {
		target: element,
		bubbles: true
	});
	//React 15
	event.simulated = true;
	//React 16
	let tracker = element._valueTracker;
	if(tracker) {
		tracker.setValue(lastValue);
	}
	element.dispatchEvent(event);
}