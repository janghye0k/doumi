/**
 * Convert string to snake case. https://developer.mozilla.org/en-US/docs/Glossary/Snake_case
 * @param {string} str The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * snakeCase('foo bar') // 'foo_bar'
 * snakeCase('foo-bar') // 'foo_bar'
 * snakeCase('FOO__ bar') // 'foo_bar'
 */
function snakeCase(str: string): string {
  return (
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    ) as any[]
  )
    .join('_')
    .toLowerCase();
}

export default snakeCase;
