import type { EvtListener } from './index';

/**
 * Unbind event listener
 * @since 0.1.0
 * @template {*} [T = HTMLElement]
 * @param {T} element The element to unbind event
 * @param {string} eventType A case-sensitive string representing the event type to listen for.
 * @param {(this: T, event: Event) => any} listener The object that receives a notification when an event of the specified type occurs.
 * @example
 *
 * const handler = () => console.log('hi')
 * document.body.addEventListener('click', handler)
 * document.body.click() // 'hi'
 * off(document.body, 'click', handler)
 * document.body.click() //
 */
function off<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>,
  options?: AddEventListenerOptions | boolean
): void;
function off<K extends keyof WindowEventMap, T = Window>(
  element: T,
  eventType: K,
  listener: (this: T, event: WindowEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean
): void;
function off<K extends keyof DocumentEventMap, T = Document>(
  element: T,
  eventType: K,
  listener: (this: T, event: DocumentEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean
): void;
function off<T extends Window | Document | Element>(
  element: T,
  eventType: string,
  listener: (this: T, event: Event) => any,
  options?: AddEventListenerOptions | boolean
): void;
function off<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(element: T, eventType: K, listener: EvtListener<K, T>): void {
  element.removeEventListener(eventType, listener as any);
}

export default off;
