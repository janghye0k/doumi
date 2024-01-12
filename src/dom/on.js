/**
 * Bind event listener
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to bind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {import('./typedef').EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {AddEventListenerOptions} [options] An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don’t support it.
 */
const on = (element, eventType, listener, options) =>
  element.addEventListener(eventType, /** @type {any} */ (listener), options);

export default on;
