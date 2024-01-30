import type { EvtListener } from './index';

/**
 * Bind event listener
 * @since 0.1.0
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to bind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {AddEventListenerOptions} [options] An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don’t support it.
 * @example
 *
 * const handler = () => console.log('hi')
 * on(document.body, 'click', handler)
 * document.body.click() // 'hi'
 */
const on = <
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>,
  options?: AddEventListenerOptions
) => element.addEventListener(eventType, listener as any, options);

export default on;
