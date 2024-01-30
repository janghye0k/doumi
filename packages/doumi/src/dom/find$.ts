import isElement from '../lang/isElement';

/**
 * Returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.
 * @since 0.1.0
 * @template {Element} [T = HTMLElement]
 * @param {string} selector A string containing one or more selectors to match.
 * @param {Element} [element] The target element to find selector
 * @returns {T | null}
 * @example
 *
 * find$('.some-class')
 */
function find$<T extends Element = HTMLElement>(
  selector: string,
  element?: Element
): T | null {
  const $el = isElement(element) ? element : document;
  return $el.querySelector<T>(selector);
}

export default find$;
