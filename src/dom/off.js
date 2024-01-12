/**
 * Unbind event listener
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to unbind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {import('./typedef').EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 */
const off = (element, eventType, listener) =>
  element.removeEventListener(eventType, /** @type {any} */ (listener));

export default off;
