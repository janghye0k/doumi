import typeOf from '../base/typeOf';
import findAll$ from './findAll$';
import on from './on';

/**
 * Callback function that determine whether to fire an event listener
 * @template {Element} [T = Element]
 * @template {Element} [E = Element]
 * @callback BindCondition
 * @param {T} parent The parent element where the event is actually registered
 * @param {E} target The selector element on which to fire the event.
 * @returns {boolean} Whether to fire an event
 */

/**
 * @template [T = HTMLElementEventMap]
 * @typedef {{ [K in keyof T]: T[K] extends MouseEvent ? K : never; }[keyof T]} MouseEventKeys
 */

/**
 * Function to pre-register events for elements whose existence is uncertain by registering events on the parent element.
 * @template {MouseEventKeys} K
 * @template {Element} [T = HTMLElement]
 * @param {Element} $element Parent element
 * @param {K} eventType Event type to listen for. It should be of the mouse event type
 * @param {string} selector A string containing one or more selectors to match.
 * @param {import('./typedef').EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {BindCondition} [condition] Callback function that determine whether to fire an event listener
 */
function bind$($element, eventType, selector, listener, condition) {
  const children = [...findAll$(selector, $element)];

  /** @type {*} */
  let EvtClass;

  /**
   * @param {*} target
   * @returns {T | null}
   */
  const findCurrentTarget = (target) => {
    const $el = target?.closest(selector);
    if (!$el) children.includes(target) ? target : null;
    return $el;
  };
  on(
    /** @type {*} */ ($element),
    eventType,
    (/** @type {import('./typedef').Evt<K, T>} */ event) => {
      if (!EvtClass) {
        if (eventType === 'wheel') EvtClass = WheelEvent;
        else if (typeOf(event) === 'PointerEvent') EvtClass = PointerEvent;
        else EvtClass = MouseEvent;
      }
      const $currentTarget = findCurrentTarget(event.target);
      if (!$currentTarget) return false;
      if (
        typeof condition === 'function' &&
        !condition($element, $currentTarget)
      )
        return false;

      const e = new EvtClass(eventType, event);
      ['target', 'currentTarget'].forEach((item) =>
        Object.defineProperty(e, item, {
          value: $currentTarget,
          configurable: true,
        })
      );
      listener.call($currentTarget, e);
    }
  );
}

export default bind$;
