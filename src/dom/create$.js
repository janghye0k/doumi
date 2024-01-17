import tagType from '../lang/tagType';

/**
 * @template X
 * @template Y
 * @template [A = X]
 * @template [B = never]
 * @typedef {(<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B} IfEquals
 */

/**
 * @template T
 * @typedef {{
 * [P in keyof T]-?: IfEquals<{ [Q in P]: T[P]; }, { -readonly [Q in P]: T[P]; }, P, never>;
 * }[keyof T]
 * } WritableKeys
 */

/**
 * @template T
 * @typedef {Pick<T, WritableKeys<T>>} Writable
 */

/**
 * @template T
 * @typedef {{ [K in keyof T]: T[K] extends Function ? K : never; }[keyof T]} FunctionKeys
 */

/**
 * @template T
 * @typedef {Omit<T, FunctionKeys<T>>} OmitFunction
 */

/**
 * @template T
 * @typedef {CreateCustomOptions & Partial<Writable<OmitFunction<T>>>} CreateOptions
 */

/**
 * @typedef {object} CreateCustomOptions
 * @property {string} [id]
 * @property {string} [className]
 * @property {string[]} [classList]
 * @property {import('./index').AriaRole} [role]
 * @property {Partial<CSSStyleDeclaration>} [style]
 * @property {Record<string, string | boolean | number | undefined>} [dataset]
 */

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @template [T = HTMLElementTagNameMap[K]]
 * @param {K} tagName
 * @param {CreateOptions<T>} options
 * @returns
 */
function create$(tagName, options = {}) {
  const $el = document.createElement(tagName);
  const { id, className, classList, role, style, dataset, ...props } = options;
  if (id) $el.id = id;
  if (className) $el.classList.add(className);
  if (Array.isArray(classList)) $el.classList.add(...classList);
  if (role) $el.role = role;
  if (style && tagType(style) === 'Object') {
    for (const key in style) {
      const value = style[key];
      if (value === undefined) continue;
      $el.style[key] = value;
    }
  }
  if (tagType(dataset) === 'Object') {
    for (const key in dataset) {
      const value = dataset[key];
      if (value === undefined) continue;
      $el.dataset[key] = `${value}`;
    }
  }
  if (tagType(dataset) === 'Object') {
    for (const key in props) {
      const value = /** @type {any} */ (props)[key];
      if (value === undefined) continue;
      /** @type {any} */ ($el)[key] = value;
    }
  }

  return $el;
}

export default create$;
