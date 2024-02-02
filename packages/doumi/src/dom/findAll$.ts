/**
 * Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
 * @since 0.1.0
 * @template {Element} [T = HTMLElement]
 * @param {string} selector A string containing one or more selectors to match.
 * @param {Element | Document} [element] The target element to find selector
 * @returns {NodeListOf<T>} A non-live `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches.
 * @example
 *
 * const $items = findAll$('.some-item')
 */
function findAll$<T extends Element = HTMLElement>(
  selector: string,
  element: Element | Document = document
): NodeListOf<T> {
  return element.querySelectorAll<T>(selector);
}

export default findAll$;
