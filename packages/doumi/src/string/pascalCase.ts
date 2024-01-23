import camelCase from './camelCase';

/**
 * Convert string to camel case, but the first character of string to upper case
 * @param {string} str The string to convert.
 * @returns {string} Returns the pascal cased string.
 * @example
 *
 * camelCase('foo bar') // 'FooBar'
 * camelCase('foo-bar') // 'FooBar'
 * camelCase('FOO__bar') // 'FooBar'
 */
function pascalCase(str: string): string {
  const camel = camelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export default pascalCase;
