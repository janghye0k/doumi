/**
 * Converts string to camel case. https://developer.mozilla.org/en-US/docs/Glossary/Camel_case
 * @since 0.1.0
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('foo bar') // 'fooBar'
 * camelCase('foo-bar') // 'fooBar'
 * camelCase('FOO__bar') // 'fooBar'
 */
function camelCase(str: string = ''): string {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export default camelCase;
