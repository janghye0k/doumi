import type { EvtListener } from './index';

/**
 * Unbind event listener
 * @since 0.1.0
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to unbind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @example
 *
 * const handler = () => console.log('hi')
 * document.body.addEventListener('click', handler)
 * document.body.click() // 'hi'
 * off(document.body, 'click', handler)
 * document.body.click() //
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
