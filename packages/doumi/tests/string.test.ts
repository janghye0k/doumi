import {
  camelCase,
  capitalize,
  kebabCase,
  pascalCase,
  snakeCase,
} from 'string';

describe('STRING TEST', () => {
  it('capitalize', () => {
    expect(capitalize('HELLO')).toBe('Hello');
  });

  it('camelCase', () => {
    expect(camelCase('foo bar')).toBe('fooBar');
    expect(camelCase('foo-bar')).toBe('fooBar');
    expect(camelCase('FOO __bar')).toBe('fooBar');
  });

  it('kebabCase', () => {
    expect(kebabCase('foo bar')).toBe('foo-bar');
    expect(kebabCase('foo-bar')).toBe('foo-bar');
    expect(kebabCase('FOO __bar')).toBe('foo-bar');
  });

  it('pascalCase', () => {
    expect(pascalCase('foo bar')).toBe('FooBar');
    expect(pascalCase('foo-bar')).toBe('FooBar');
    expect(pascalCase('FOO __bar')).toBe('FooBar');
  });

  it('snakeCase', () => {
    expect(snakeCase('foo bar')).toBe('foo_bar');
    expect(snakeCase('foo-bar')).toBe('foo_bar');
    expect(snakeCase('FOO __bar')).toBe('foo_bar');
  });
});
