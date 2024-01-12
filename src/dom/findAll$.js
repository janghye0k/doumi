import isElement from '../base/isElement';

/**
 * Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
 * @template {Element} [T = HTMLElement]
 * @param {string} selector A string containing one or more selectors to match.
 * @param {Element} [element] The target element to find selector
 * @returns {NodeListOf<T>} A non-live `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches.
 */
function findAll$(selector, element) {
  const $el = isElement(element) ? element : document;
  return $el.querySelectorAll(selector);
}

export default findAll$;
