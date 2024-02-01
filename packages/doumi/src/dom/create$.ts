import type { AriaRole } from './index';
import tagType from '../lang/tagType';

type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P,
    never
  >;
}[keyof T];

type Writable<T> = { [P in WritableKeys<T>]: T[P] };

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type OmitFunction<T> = { [P in Exclude<keyof T, FunctionKeys<T>>]: T[P] };

type CreateOptions<T> = Partial<
  Omit<Writable<OmitFunction<T>>, keyof CreateCustomOptions>
> &
  CreateCustomOptions;

type CreateCustomOptions = {
  id?: string | undefined;
  className?: string | undefined;
  classList?: string[] | undefined;
  role?: AriaRole;
  style?: Partial<CSSStyleDeclaration> | undefined;
  dataset?: Record<string, string | boolean | number | undefined> | undefined;
};

/**
 * Create Element
 * @template {keyof HTMLElementTagNameMap} K
 * @template [T = HTMLElementTagNameMap[K]]
 * @param {K} tagName The tag name of element
 * @param {CreateOptions<T>} options The element options
 * @example
 *
 * const $div = create$('div', { className: 'my-class', innerHTML: 'welcome' })
 * // <div class="my-class">welcome</div>
 */
function create$<
  K extends keyof HTMLElementTagNameMap,
  T = HTMLElementTagNameMap[K],
>(tagName: K, options: CreateOptions<T> = {}) {
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
  if (tagType(props) === 'Object') {
    for (const key in props) {
      const value = (props as any)[key];
      if (value === undefined) continue;
      ($el as any)[key] = value;
    }
  }

  return $el;
}

export default create$;
