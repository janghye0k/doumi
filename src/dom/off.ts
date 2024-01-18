import type { EvtListener } from './index';

/**
 * Unbind event listener
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to unbind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 */
const off = <
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>
) => element.removeEventListener(eventType, listener as any);

export default off;
