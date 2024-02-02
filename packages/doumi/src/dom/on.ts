import type { EvtListener } from './index';

/**
 * Bind event listener
 * @since 0.1.0
 * @template {Element | Window | Document} T
 * @param {T} element The element to bind event
 * @param {string} eventType A case-sensitive string representing the event type to listen for.
 * @param {(this: T, event: Event) => any} listener The object that receives a notification when an event of the specified type occurs.
 * @param {AddEventListenerOptions | boolean} [options] An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don’t support it.
 * @example
 *
 * const handler = () => console.log('hi')
 * on(document.body, 'click', handler)
 * document.body.click() // 'hi'
 */
function on<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>,
  options?: AddEventListenerOptions | boolean
): void;
function on<K extends keyof WindowEventMap, T = Window>(
  element: T,
  eventType: K,
  listener: (this: T, event: WindowEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean
): void;
function on<K extends keyof DocumentEventMap, T = Document>(
  element: T,
  eventType: K,
  listener: (this: T, event: DocumentEventMap[K]) => any,
  options?: AddEventListenerOptions | boolean
): void;
function on<T extends Window | Document | Element>(
  element: T,
  eventType: string,
  listener: (this: T, event: Event) => any,
  options?: AddEventListenerOptions | boolean
): void;
function on<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>,
  options?: AddEventListenerOptions | boolean
): void {
  element.addEventListener(eventType, listener as any, options);
}

export default on;
