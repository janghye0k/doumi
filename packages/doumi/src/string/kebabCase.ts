/**
 * Convert string to kebab case. https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case
 * @since 0.1.0
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * kebabCase('foo bar') // 'foo-bar'
 * kebabCase('foo-bar') // 'foo-bar'
 * kebabCase('FOO__ bar') // 'foo-bar'
 */
function kebabCase(str: string): string {
  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    ) as any[]
  )
    .join('-')
    .toLowerCase();
}

export default kebabCase;
