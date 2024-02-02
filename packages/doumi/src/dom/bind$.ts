import type { EvtListener } from './index';
import tagType from '../lang/tagType';
import findAll$ from './findAll$';
import on from './on';

/**
 * Callback function that determine whether to fire an event listener
 * @callback BindCondition
 * @param {Window | Document | Element} parent The parent element where the event is actually registered
 * @param {Element} target The selector element on which to fire the event.
 * @returns {boolean} Whether to fire an event
 */
type BindCondition = (
  parent: Window | Document | Element,
  target: Element
) => boolean;

type MouseEventKeys<T = HTMLElementEventMap> = {
  [K in keyof T]: T[K] extends MouseEvent ? K : never;
}[keyof T];

/**
 * Function to pre-register events for elements whose existence is uncertain by registering events on the parent element.
 * @since 0.1.0
 * @template {MouseEventKeys} K
 * @template {Element} [T = HTMLElement]
 * @param {Element} $element Parent element
 * @param {K} eventType Event type to listen for. It should be of the mouse event type
 * @param {string} selector A string containing one or more selectors to match.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {BindCondition} [condition] Callback function that determine whether to fire an event listener
 * @example
 *
 * bind$(document.body, 'click', '.some-selector', (event) => console.log(event))
 */
function bind$<K extends MouseEventKeys, T extends Element = HTMLElement>(
  $element: Window | Document | Element,
  eventType: K,
  selector: string,
  listener: EvtListener<K, T>,
  condition?: BindCondition
) {
  const children = Array.from(
    findAll$(
      selector,
      (tagType($element) === 'Window' ? window.document : $element) as Element
    )
  );

  let EvtClass: any;

  const findCurrentTarget = (target: any) => {
    const $el = target?.closest(selector) as T;
    if (!$el) children.includes(target) ? target : null;
    return $el;
  };
  on($element, eventType, (event) => {
    if (!EvtClass) {
      if (eventType === 'wheel') EvtClass = WheelEvent;
      else if (tagType(event) === 'PointerEvent') EvtClass = PointerEvent;
      else EvtClass = MouseEvent;
    }
    const $currentTarget = findCurrentTarget(event.target);
    if (!$currentTarget) return false;
    if (typeof condition === 'function' && !condition($element, $currentTarget))
      return false;

    const e = new EvtClass(eventType, event);
    ['target', 'currentTarget'].forEach((item) =>
      Object.defineProperty(e, item, {
        value: $currentTarget,
        configurable: true,
      })
    );

    listener.call($currentTarget, e);
  });
}

export default bind$;
