/**
 * Chunks an array into multiple arrays, each containing size or fewer items.
 * @template T
 * @param {T[]} array The array to process.
 * @param {number} size The length of each chunk
 * @returns {Array<T[]>} Returns new array of chunks
 * @example
 *
 * const array = [1, 2, 3, 4, 5, 6]
 * chunk(array, 2) // [[1, 2], [3, 4], [5, 6]]
 */
declare const chunk: <T>(array: T[], size: number) => T[][];

/**
 * Creates an array of array values not included in the other given arrays. The order and references of result values are determined by the first array.
 * @template T
 * @param {T[]} array The array to inspect.
 * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
 * @param [transformer] The transformer invoked per element for comparison.
 * @returns {T[]}
 * @example
 *
 * const arr = [1, 2, 3, 4, 5]
 * const other = [3, 5, 6]
 * difference(arr, other) // [1, 2, 4]
 */
declare function difference<T>(
  array: T[],
  ...other: T[][] | [...T[][], (value: T, index: number) => any]
): T[];

/**
 * Creates an array of values that are included in all given arrays. The order and references of result values are determined by the first array.
 * @template T
 * @param {T[]} array The array to inspect.
 * @param {T[][] | [...T[][], (value: T, index: number) => any]} other The values to exclude.
 * @param [transformer] The transformer invoked per element for comparison.
 * @returns {T[]}
 * @example
 *
 * const arr = [1, 2, 3, 4, 5]
 * const other = [3, 5, 6]
 * intersection(arr, other) // [1, 2, 4]
 */
declare function intersection<T>(
  array: T[],
  ...other: T[][] | [...T[][], (value: T, index: number) => any]
): T[];

/**
 * A function to create numbered lists of integers,
 * @param size The size of array
 * @param start The start index of array, if `arguments.length === 0`, array started at 0 index
 * @returns {number[]} Returns `size` length array, started at `start`
 * @example
 *
 * range(5) // [0, 1, 2, 3, 4]
 * range(3, 4) // [3, 4, 5, 6]
 */
declare function range(size: number): number[];
declare function range(start: number, size: number): number[];

/**
 * Creates an array of shuffled values, using knuth shuffle
 * @template T
 * @param {T[]} array The array to query
 * @returns {T[]} Returns the new shuffled array.
 */
declare const shuffle: <T>(array: T[]) => T[];

/**
 * Checks if predicate returns truthy for all element of collection.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns true if all elements pass the predicate check, else false.
 * @example
 *
 * const arr = [1, 2, 5]
 * every(arr, (value) => value < 10) // true
 *
 * const obj = { a: 1, b: 2 }
 * every(arr, (_, key) => key !== 'a') // false
 */
declare function every<T extends ArrayLike$1<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): boolean;
declare function every<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): boolean;

/**
 * Iterates over elements of collection, returning an array of all elements predicate returns truthy for
 * @template T
 * @param {T} collection The collection to iterate over
 * @param {(value: any, index: any, collection: T) => void} predicate The function invoked per iteration
 * @returns {any[]} Returns the new filterd array
 * @example
 *
 * const arr = [1, 2, 3]
 * filter(arr, (value, index) => index === 1) // [1, 3]
 *
 * const obj = { a: 1, b: 'str' }
 * filter(obj, (value, key) => typeof value === 'string') // ['str']
 */
declare function filter<T extends ArrayLike$1<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): ArrayLikeValue<T>[];
declare function filter<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): DictionaryValue<T>[];

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns the matched element, else `undefined`.
 * @example
 *
 * const arr = [1, 2, 13]
 * find(arr, (value) => value > 10) // 13
 *
 * const obj = { a: 1, b: 2 }
 * find(arr, (_, key) => key === 'c') // undefined
 */
declare function find<T extends ArrayLike$1<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): ArrayLikeValue<T> | undefined;
declare function find<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): DictionaryValue<T> | undefined;

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
 * @example
 *
 * const arr = [1]
 * forEach(arr, (value, index) => console.log(value, index)) // 1, 0
 *
 * const obj = { a: 1 }
 * forEach(obj, (value, key) => console.log(value, key)) // 1, 'a'
 */
declare function forEach<T extends ArrayLike$1<any>>(
  collection: T,
  callback: (value: ArrayLikeValue<T>, index: number, collection: T) => void
): void;
declare function forEach<T extends Dictionary<any>>(
  collection: T,
  callback: (value: DictionaryValue<T>, key: string, collection: T) => void
): void;

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => void} callback The function invoked per iteration.
 * @example
 *
 * const arr = [1]
 * forEachRight(arr, (value, index) => console.log(value, index)) // 1, 0
 *
 * const obj = { a: 1 }
 * forEachRight(obj, (value, key) => console.log(value, key)) // 1, 'a'
 */
declare function forEachRight<T extends ArrayLike$1<any>>(
  collection: T,
  callback: (value: ArrayLikeValue<T>, index: number, collection: T) => void
): void;
declare function forEachRight<T extends Dictionary<any>>(
  collection: T,
  callback: (value: DictionaryValue<T>, key: string, collection: T) => void
): void;

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => string} callback The function invoked per iteration.
 * @returns {Record<string, any[]>} Returns new grouped array
 * @example
 *
 * const students = [
 *   { name: 'john', class: 'A', score: 100 },
 *   { name: 'alice', class: 'B', score: 91 },
 *   { name: 'smith', class: 'C', score: 65 },
 *   { name: 'gale', class: 'A', score: 74 },
 * ]
 *
 * const results = groupBy(students, (value) => value.score < 70 ? 'fail' : 'pass')
 * results.fail // [{ name: 'smith', class: 'C', score: 65 }]
 * results.pass.length // 3
 */
declare function groupBy<T extends ArrayLike$1<any>>(
  collection: T,
  callback: (value: ArrayLikeValue<T>, index: number, collection: T) => string
): Record<string, ArrayLikeValue<T>[]>;
declare function groupBy<T extends Dictionary<any>>(
  collection: T,
  callback: (value: DictionaryValue<T>, key: string, collection: T) => string
): Record<string, DictionaryValue<T>[]>;

/**
 * Iterates over elements of collection and invokes iteratee for each element.
 * @template [T = any]
 * @template {Collection<any>} [O = Collection<any>]
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: O) => T} callback The function invoked per iteration.
 * @returns {T[]} Returns the new mapped array.
 * @example
 *
 * const arr = [1, 2, 3]
 * map(arr, (value, index) => value + index) // [1, 3, 5]
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * map(obj, (value, key) => value + key) // ['a1', 'b2', 'c3']
 */
declare function map<T = any, O extends ArrayLike<any> = ArrayLike<any>>(
  collection: O,
  callback: (value: ArrayLikeValue<O>, index: number, collection: O) => T
): T[];
declare function map<T = any, O extends Dictionary<any> = Dictionary<any>>(
  collection: O,
  callback: (value: DictionaryValue<O>, key: string, collection: O) => T
): T[];

/**
 * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 *
 * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's first element is used as the initial value
 * @param {*} collection The collection to iterate over.
 * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {any} Returns the accumulated value.
 * @example
 *
 * const arr = [1, 2, 3]
 * reduce(arr, (acc, value) => `${acc}_${value}`, '') // '_1_2_3'
 */
declare function reduce<T extends ArrayLike$1<any> = ArrayLike$1<any>>(
  collection: T,
  reducer: (
    accumulator: ArrayLikeValue<T>,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => ArrayLikeValue<T>,
  accumulator?: ArrayLikeValue<T>
): ArrayLikeValue<T>;
declare function reduce<T extends ArrayLike$1<any> = ArrayLike$1<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => V,
  accumulator: V
): V;
declare function reduce<T extends Dictionary<any> = Dictionary<any>>(
  collection: T,
  reducer: (
    accumulator: DictionaryValue<T>,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => DictionaryValue<T>,
  accumulator?: DictionaryValue<T>
): DictionaryValue<T>;
declare function reduce<T extends Dictionary<any> = ArrayLike$1<any>, V = any>(
  collection: T,
  reducer: (
    accumulator: V,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => V,
  accumulator: V
): V;

/**
 * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 *
 * The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the collection's last element is used as the initial value
 * @param {*} collection The collection to iterate over.
 * @param {(accumulator: any, value: any, index: any, collection: any) => any} reducer The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {any} Returns the accumulated value.
 * @example
 *
 * const arr = [1, 2, 3]
 * reduceRight(arr, (acc, value) => `${acc}_${value}`, '') // '_3_2_1'
 */
declare function reduceRight<T extends ArrayLike$1<any> = ArrayLike$1<any>>(
  collection: T,
  reducer: (
    accumulator: ArrayLikeValue<T>,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => ArrayLikeValue<T>,
  accumulator?: ArrayLikeValue<T>
): ArrayLikeValue<T>;
declare function reduceRight<
  T extends ArrayLike$1<any> = ArrayLike$1<any>,
  V = any,
>(
  collection: T,
  reducer: (
    accumulator: V,
    value: ArrayLikeValue<T>,
    index: number,
    collection: T
  ) => V,
  accumulator: V
): V;
declare function reduceRight<T extends Dictionary<any> = Dictionary<any>>(
  collection: T,
  reducer: (
    accumulator: DictionaryValue<T>,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => DictionaryValue<T>,
  accumulator?: DictionaryValue<T>
): DictionaryValue<T>;
declare function reduceRight<
  T extends Dictionary<any> = ArrayLike$1<any>,
  V = any,
>(
  collection: T,
  reducer: (
    accumulator: V,
    value: DictionaryValue<T>,
    key: string,
    collection: T
  ) => V,
  accumulator: V
): V;

/**
 * Checks if predicate returns truthy for any element of collection.
 * @template T
 * @param {T} collection The collection to iterate over.
 * @param {(value: any, index: any, collection: T) => boolean} predicate The function invoked per iteration.
 * @returns {boolean} Returns true if any element passes the predicate check, else false.
 * @example
 *
 * const arr = [1, 2, 13]
 * some(arr, (value) => value > 10) // true
 *
 * const obj = { a: 1, b: 2 }
 * some(arr, (_, key) => key === 'c') // false
 */
declare function some<T extends ArrayLike$1<any>>(
  collection: T,
  predicate: (value: ArrayLikeValue<T>, index: number, collection: T) => boolean
): boolean;
declare function some<T extends Dictionary<any>>(
  collection: T,
  predicate: (value: DictionaryValue<T>, key: string, collection: T) => boolean
): boolean;

/**
 * Returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.
 * @template {Element} [T = HTMLElement]
 * @param {string} selector A string containing one or more selectors to match.
 * @param {Element} [element] The target element to find selector
 * @returns {T | null}
 */
declare function find$<T extends Element = HTMLElement>(
  selector: string,
  element?: Element
): T | null;

/**
 * Returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.
 * @template {Element} [T = HTMLElement]
 * @param {string} selector A string containing one or more selectors to match.
 * @param {Element} [element] The target element to find selector
 * @returns {NodeListOf<T>} A non-live `NodeList` containing one `Element` object for each element that matches at least one of the specified selectors or an empty `NodeList` in case of no matches.
 */
declare function findAll$<T extends Element = HTMLElement>(
  selector: string,
  element?: Element
): NodeListOf<T>;

/**
 * Bind event listener
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to bind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {AddEventListenerOptions} [options] An object that specifies characteristics about the event listener. If `true`, allows you to take advantage of event bubbling for events that otherwise don’t support it.
 */
declare const on: <
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>,
  options?: AddEventListenerOptions
) => void;

/**
 * Unbind event listener
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @param {T} element The element to unbind event
 * @param {K} eventType A case-sensitive string representing the event type to listen for.
 * @param {EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 */
declare const off: <
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
>(
  element: T,
  eventType: K,
  listener: EvtListener<K, T>
) => void;

/**
 * Callback function that determine whether to fire an event listener
 * @callback BindCondition
 * @param {Element} parent The parent element where the event is actually registered
 * @param {Element} target The selector element on which to fire the event.
 * @returns {boolean} Whether to fire an event
 */
type BindCondition<P extends Element = Element, T extends Element = Element> = (
  parent: P,
  target: T
) => boolean;
type MouseEventKeys<T = HTMLElementEventMap> = {
  [K in keyof T]: T[K] extends MouseEvent ? K : never;
}[keyof T];
/**
 * Function to pre-register events for elements whose existence is uncertain by registering events on the parent element.
 * @template {MouseEventKeys} K
 * @template {Element} [T = HTMLElement]
 * @param {Element} $element Parent element
 * @param {K} eventType Event type to listen for. It should be of the mouse event type
 * @param {string} selector A string containing one or more selectors to match.
 * @param {import('./index').EvtListener<K, T>} listener The object that receives a notification when an event of the specified type occurs.
 * @param {BindCondition} [condition] Callback function that determine whether to fire an event listener
 */
declare function bind$<
  K extends MouseEventKeys,
  T extends Element = HTMLElement,
>(
  $element: Element,
  eventType: K,
  selector: string,
  listener: EvtListener<K, T>,
  condition: BindCondition
): void;

type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    {
      [Q in P]: T[P];
    },
    {
      -readonly [Q in P]: T[P];
    },
    P,
    never
  >;
}[keyof T];
type Writable<T> = {
  [P in WritableKeys<T>]: T[P];
};
type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
type OmitFunction<T> = {
  [P in Exclude<keyof T, FunctionKeys<T>>]: T[P];
};
type CreateOptions<T> = Partial<Writable<OmitFunction<T>>> &
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
 */
declare function create$<
  K extends keyof HTMLElementTagNameMap,
  T = HTMLElementTagNameMap[K],
>(tagName: K, options?: CreateOptions<T>): HTMLElementTagNameMap[K];

type Evt<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
> = HTMLElementEventMap[K] & {
  currentTarget: T;
};
type EvtListener<
  K extends keyof HTMLElementEventMap,
  T extends Element = HTMLElement,
> = (this: T, event: Evt<K, T>) => any;
/** All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions */
type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'cell'
  | 'checkbox'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'
  | (string & object);

type Debounced<T extends (...args: T[]) => any> = {
  (...args: Parameters<T>): ReturnType<T>;
  cancel: () => void;
};
/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay
 * @param {boolean} [immediate] If immediate is `true`, the argument `func` will be triggered at the beginning of the sequence instead of at the end.
 * @returns {Function} Returns debounce function. You can cancel debounce using `debounced.cancel`
 */
declare function debounce<
  T extends (...args: any[]) => any = (...args: any[]) => any,
>(func: T, wait: number, immediate?: boolean): Debounced<T>;

/**
 * Trigger delay
 * @param {number} wait The number of milliseconds to delay
 */
declare const sleep: (wait: number) => Promise<void>;

type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
};
type Throttled<T extends (...args: T[]) => any> = {
  (...args: Parameters<T>): ReturnType<T>;
  cancel: () => void;
};
/**
 *Creates a throttled function that only invokes func at most once per every wait milliseconds.
 
 The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them.
 * @param {Function} func The function to throttle.
 * @param {number} wait The number of milliseconds to delay
 * @param {ThrottleOptions} [options] The options object.
 * @param {boolean} [options.leading] Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing] Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns throttled function. You can cancel throttle using `throttled.cancel`
 */
declare function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: ThrottleOptions
): Throttled<T>;

type ConstructorObject = {
  name: string;
};
/**
 * @param {*} object The object (constructor) to used for comparison
 * @param {*} value The value to compare
 * @returns {boolean} Retruns `true` if the `value` is `object`, else `false`
 * @example
 *
 * is(String, 'str') // true
 * is(Boolean, true) // true
 * is(Boolean, 'true') // false
 */
declare const is: <T extends ConstructorObject>(
  object: T,
  value: unknown
) => value is T;

/**
 * Check value is array
 * @param {*} value The value to check
 * @returns {value is any[]} Retruns `true` if `value` is array, else `false`
 * @example
 *
 * isArray([1, 2, 3]) // true
 * isArray(new Array()) // true
 * isArray(1) // false
 */
declare const isArray: <T = any>(value: unknown) => value is T[];

/**
 * Check value is array-like
 * @template {ArrayLike<any>} T
 * @param {*} value The value to check
 * @returns {value is T} Retruns `true` if `value` is array-like, else `false`
 * @example
 *
 * isArrayLike([1, 2, 3]) // true
 * isArrayLike('string') // true
 * isArrayLike(1) // false
 */
declare const isArrayLike: <T extends ArrayLike$1<any>>(
  value: any
) => value is T;

/**
 * Check value is blank
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value.length` is falsy, else `false`
 * @example
 *
 * isBlank('') // true
 * isBlank(undefined) // true
 * isBlank('a') // false
 */
declare const isBlank: (value: unknown) => boolean;

/**
 * Check value is boolean
 * @param {*} value The value to check
 * @returns {value is boolean} Retruns `true` if `value` is boolean, else `false`
 * @example
 *
 * isBoolean(true) // true
 * isBoolean('true') // false
 */
declare const isBoolean: (value: unknown) => value is boolean;

/**
 * Check value is date
 * @param {*} value The value to check
 * @returns {value is Date} Retruns `true` if `value` is date, else `false`
 * @example
 *
 * isDate(new Date()) // true
 * isDate('2024-01-01') // false
 */
declare const isDate: (value: unknown) => value is Date;

/**
 * Check value is date-like
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is date-like, else `false`
 * @example
 *
 * isDateLike(new Date()) // true
 * isDateLike('2024-01-01') // true
 * isDateLike(100000000) // true
 * isDateLike('string') // false
 */
declare const isDateLike: <T = unknown>(value: T) => boolean;

/**
 * Check value is element
 * @param {*} value The value to check
 * @returns {value is Element} Retruns `true` if `value` is element, else `false`
 * @example
 *
 * isElement(document.body) // true
 * isElement('<div></div>') // false
 */
declare const isElement: (value: unknown) => value is Element;

/**
 * Check value is empty
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is empty, else `false`
 * @example
 *
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(new Set()) // true
 * isEmpty(false) // false
 */
declare const isEmpty: (value: unknown) => boolean;

/**
 * Check values are equal
 * @param {*} value
 * @param {*} compare
 * @returns {boolean} Retruns `true` if the values are equal, else `false`
 * @example
 *
 * const obj = { a: 1 };
 *
 * isEqual(obj, obj) // true
 * isEqual(obj, {...obj}) // false
 */
declare const isEqual: (value: any, compare: any) => boolean;

/**
 * Check value is Error
 * @param {*} value The value to check
 * @returns {value is Error} Retruns `true` if `value` is error, else `false`
 * @example
 *
 * isError(new Error()) // true
 * isError('error') // false
 */
declare const isError: (value: unknown) => value is Error;

/**
 * Check value is function
 * @param {*} value The value to check
 * @returns {value is Function} Retruns `true` if `value` is function, else `false`
 * @example
 *
 * isFunction(() => null) // true
 * isFunction({}) // false
 */
declare const isFunction: (value: unknown) => value is (...arg: any[]) => any;

/**
 * Check value is Map
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is Map, else `false`
 * @example
 *
 * isMap(new Map()) // true
 * isMap({ a: 1, b: 2 }) // false
 */
declare const isMap: <T = Map<any, any>>(value: unknown) => value is T;

/**
 * Check value is null
 * @param {*} value The value to check
 * @returns {value is null} Retruns `true` if `value` is null, else `false`
 * @example
 *
 * isNull(null) // true
 * isNull(true) // false
 */
declare const isNull: (value: unknown) => value is null;

/**
 * Check value is nullish
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is null or undefined, else `false`
 * @example
 *
 * isNullish(null) // true
 * isNullish(undefined) // true
 * isNullish(0) // false
 */
declare const isNullish: (value: unknown) => boolean;

/**
 * Check value is number
 * @param {*} value The value to check
 * @returns {value is number} Retruns `true` if `value` is number, else `false`
 * @example
 *
 * isNumber(123) // true
 * isNumber('123') // false
 */
declare const isNumber: (value: unknown) => value is number;

/**
 * Check value is plain object
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is plain object, else `false`
 * @example
 *
 * isPlainObject({}) // true
 * isPlainObject(new Map()) // false
 * isPlainObject(1) // false
 */
declare const isPlainObject: <T extends Object = Dictionary<any> & Object>(
  value: unknown
) => value is T;

/**
 * Check value is RegExp
 * @param {*} value The value to check
 * @returns {value is RegExp} Retruns `true` if `value` is RegExp, else `false`
 * @example
 *
 * isRegExp(/\d/gi) // true
 * isRegExp(new RegExp()) // true
 * isRegExp('d') // false
 */
declare const isRegExp: (value: unknown) => value is RegExp;

/**
 * Check value is object-like
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is object-like, else `false`
 * @example
 *
 * isObject({}) // true
 * isObject(() => false) // true
 * isObject([]) // true
 * isObject(1) // false
 */
declare const isObject: <T extends object = Dictionary<any>>(
  value: unknown
) => value is T;

/**
 * Check value is Set
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is Set, else `false`
 * @example
 *
 * isSet(new Set()) // true
 * isSet([1, 2, 3]) // false
 */
declare const isSet: <T extends Set<any> = Set<any>>(
  value: unknown
) => value is T;

/**
 * Check value is string
 * @param {*} value The value to check
 * @returns {value is string} Retruns `true` if `value` is string, else `false`
 * @example
 *
 * isString('is this string?') // true
 * isString(0) // false
 */
declare const isString: (value: unknown) => value is string;

/**
 * Check value is symbol
 * @param {*} value The value to check
 * @returns {value is symbol} Retruns `true` if `value` is symbol, else `false`
 * @example
 *
 * isSymbol(Symbol('a')) // true
 * isSymbol('a') // false
 */
declare const isSymbol: (value: unknown) => value is symbol;

/**
 * Check value is undefined
 * @param {*} value The value to check
 * @returns {value is undefined} Retruns `true` if `value` is undefined, else `false`
 * @example
 *
 * isUndefined(undefined) // true
 * isUndefined(0) // false
 */
declare const isUndefined: (value: unknown) => value is undefined;

/**
 * Check value is WeakMap
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is WeakMap, else `false`
 * @example
 *
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
declare const isWeakMap: <T extends WeakMap<any, any> = WeakMap<any, any>>(
  value: unknown
) => value is T;

/**
 * Check value is WeakSet
 * @param {*} value The value to check
 * @returns {boolean} Retruns `true` if `value` is WeakSet, else `false`
 * @example
 *
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
declare const isWeakSet: <T extends WeakSet<any> = WeakSet<any>>(
  value: unknown
) => value is T;

/**
 * Get Object.prototype.toString() type of value
 * @param {*} value
 * @returns {string}
 */
declare const tagType: (value: any) => string;

/**
 * Computes the average of the values
 * @param {number[]} values
 * @returns {number}
 * @example
 *
 * average([1, 2, 3]) // 2
 */
declare function average(values: number[]): number;

/**
 * Checks if n is between start and up to end
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if number is in the range, else `false`.
 * @example
 *
 * between(3, 1, 5) // true
 * between(8, 1, 5) // false
 */
declare function between(number: number, start: number, end: number): boolean;

/**
 * Clamp number
 * @param {number} number The number to clamp
 * @param {number} lower The lower bound
 * @param {number} upper The upper bound
 * @returns {number} Returns the clamped number
 * @example
 *
 * clamp(3, 1, 5) // 3
 * clamp(8, 1, 5) // 5
 */
declare function clamp(number: number, lower: number, upper: number): number;

/**
 * Computes the sum of the values
 * @param {number[]} values
 * @returns {number}
 * @example
 *
 * sum([1, 2, 3]) // 6
 */
declare function sum(values: number[]): number;

declare const assign: {
  <T extends {}, U>(target: T, source: U): T & U;
  <T_1 extends {}, U_1, V>(
    target: T_1,
    source1: U_1,
    source2: V
  ): T_1 & U_1 & V;
  <T_2 extends {}, U_2, V_1, W>(
    target: T_2,
    source1: U_2,
    source2: V_1,
    source3: W
  ): T_2 & U_2 & V_1 & W;
  (target: object, ...sources: any[]): any;
};

/**
 * @param {object} object The object to merged
 * @param {...any} sources The source objects
 * @returns {any} Returns object
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 * Foo.prototype.c = 3;
 *
 * assignIn({ x: 'x' }, new Foo()) // { x: 'x', a: 1, b: 2, c: 3 }
 */
declare function assignIn<T extends object, U>(object: T, source: U): T & U;
declare function assignIn<T extends object, U, V>(
  object: T,
  source1: U,
  source2: V
): T & U & V;
declare function assignIn<T extends object, U, V, W>(
  object: T,
  source1: U,
  source2: V,
  source3: W
): T & U & V & W;

/**
 * Get the value at paths of object
 * @template [T = any]
 * @param {object} object The object to query.
 * @param {string} paths The path of the property to get.
 * @returns {T | undefined} Returns the resolved value.
 * @example
 *
 * onst obj = { a: { b: [{}, { c: 3 }] } };
 * get(obj, 'a.b[1].c') // 3
 */
declare const get: <T = any>(object: object, paths: string) => T | undefined;

/**
 * Sets the value at path of object.
 * @param {object} object The object to modify.
 * @param {string} paths The path of the property to set.
 * @param {*} value The value to set
 * @example
 *
 * onst obj = { };
 * set(obj, 'a.b[1].c', 3) // { a: { b: [undefined, { c: 3 }] } }
 */
declare const set: (object: object, paths: string, value: any) => void;

/**
 * Checks if path is a direct property of object.
 * @param {object} object The object to query
 * @param {string} paths The path to check
 * @returns {boolean} Returns `true` if path exists, else `false`
 * @example
 *
 * const obj = { a: { b: c: 3 } }
 * has('a') // true
 * has('a.b.c') // true
 * has('a.b.d') // false
 */
declare const has: (object: object, paths: string) => boolean;

/**
 * Create an array of a given object's own enumerable string-keyed property names.
 * @template {string} T
 * @param {object} object The object to extract keys
 * @returns {T[]} Retruns the array of property names
 * @example
 *
 * keys({ a: 1, b: 2 }) // ['a', 'b']
 *
 * function Foo() {
 *  this.a = 1
 *  this.b = 2
 * }
 * Foo.prototype.c = 3
 * keys(new Foo()) // ['a', 'b']
 */
declare const keys: <T extends string>(object: object) => T[];

/**
 * Create an array of a given object's own and inherited enumerable property names.
 * @template {string} T
 * @param {object} object The object to extract keys
 * @returns {T[]} Retruns the array of property names
 * @example
 *
 * keysIn({ a: 1, b: 2 }) // ['a', 'b']
 *
 * function Foo() {
 *  this.a = 1
 *  this.b = 2
 * }
 * Foo.prototype.c = 3
 * keysIn(new Foo()) // ['a', 'b', 'c']
 */
declare const keysIn: <T extends string>(object: object) => T[];

/**
 * Create an array of a given object's own enumerable string-keyed property values.
 * @template {object} T
 * @template [V = any]
 * @param {T} object The object to extract values
 * @returns {V[]} Returns the array of property values.
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = values(object) // [1, '2']
 */
declare const values: <T = any>(
  object: object | Dictionary<T> | ArrayLike<T>
) => T[];

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property values.
 * @template [T = any]
 * @param {object | Dictionary<T> | ArrayLike<T>} object The object to extract values
 * @returns {T[]} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * valuesIn(new Foo()) // [1, 2, 3]
 */
declare const valuesIn: <T = any>(
  object: object | Dictionary<T> | ArrayLike<T>
) => T[];

/**
 * Create an array of a given object's own enumerable string-keyed property key-value pairs.
 * @template [V = any]
 * @template {string} [K = string]
 * @param {object | Dictionary<V> | ArrayLike<V>} object The object to extract entries
 * @returns {Array<[V, K]>} Returns the array of key-value pairs
 * @example
 *
 * const object = { a: 1, b: '2' }
 * const results = entries(object) // [['a', 1], ['b', '2']]
 */
declare const entries: <V = any, K extends string = string>(
  object: object | Dictionary<V> | ArrayLike$1<V>
) => [V, K][];

/**
 * Create an array of a given object's own and inherited enumerable string-keyed property key-value pairs.
 * @template [V = any]
 * @template {string} [K = string]
 * @param {object | Dictionary<V> | ArrayLike<V>} object The object to extract entries
 * @returns {Array<[V, K]>} Returns the array of key-value pairs
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 * Foo.prototype.c = 3
 * const results = entriesIn(new Foo()) // [['a', 1], ['b', '2'], ['c', 3]]
 */
declare const entriesIn: <V = any, K extends string = string>(
  object: object | Dictionary<V> | ArrayLike$1<V>
) => [V, K][];

/**
 * Returns the key of the first element predicate
 * @template {object} T
 * @param {T} object The object to inspect.
 * @param {(value: any) => boolean} predicate The function invoked per iteration.
 * @returns {string | undefined} Returns the key of the matched element, else undefined.
 * @example
 *
 * const obj = {
 *   john: { class: 1, grade: 'A' },
 *   anna: { class: 3, grade: 'C' },
 *   smith: { class: 2, grade: 'B' },
 * };
 * findKey(obj, (o) => 'class' in o) // 'john'
 * findKey(obj, (o) => o.class === 3) // 'anna'
 */
declare const findKey: <T extends object>(
  object: T,
  predicate: (value: any) => boolean
) => string | undefined;

/**
 * Returns the key of the last element predicate
 * @template {object} T
 * @param {T} object The object to inspect.
 * @param {(value: any) => boolean} predicate The function invoked per iteration.
 * @returns {string | undefined} Returns the key of the matched element, else undefined.
 * @example
 *
 * const obj = {
 *   john: { class: 1, grade: 'A' },
 *   anna: { class: 3, grade: 'C' },
 *   smith: { class: 2, grade: 'B' },
 * };
 * findKey(obj, (o) => 'class' in o) // 'smith'
 * findKey(obj, (o) => o.class === 3) // 'anna'
 */
declare const findLastKey: <T extends object>(
  object: T,
  predicate: (value: any) => boolean
) => string | undefined;

/**
 * Create object omitted by given keys
 * @template {object} T
 * @template {keyof T} K
 * @param {T} object
 * @param  {...K} keys The property keys to omit.
 * @returns {Omit<T, K>} Returns omitted object
 * @example
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * omit(obj, 'a', 'c') // { b: 2 }
 */
declare const omit: <T extends object, K extends keyof T>(
  object: T,
  ...keys: K[]
) => Omit<T, K>;

/**
 * Create object pickted by given keys
 * @template {object} T
 * @template {keyof T} K
 * @param {T} object
 * @param  {...K} keys The property keys to pick.
 * @returns {Pick<T, K>} Returns pickted object
 * @example
 *
 * const obj = { a: 1, b: 2, c: 3 }
 * pick(obj, 'a', 'c') // { a: 1, c: 3 }
 */
declare const pick: <T extends object, K extends keyof T>(
  object: T,
  ...keys: K[]
) => Pick<T, K>;

/**
 * Converts string to camel case. https://developer.mozilla.org/en-US/docs/Glossary/Camel_case
 * @param {string} str The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * camelCase('foo bar') // 'fooBar'
 * camelCase('foo-bar') // 'fooBar'
 * camelCase('FOO__bar') // 'fooBar'
 */
declare function camelCase(str?: string): string;

/**
 * Converts the first character of string to upper case and the remaining to lower case
 * @param {string} str The string to capitalize
 * @returns {string} Retruns the capitalized string
 * @example
 *
 * capitalize('HELLO') // 'Hello'
 */
declare const capitalize: (str: string) => string;

/**
 * Convert string to kebab case. https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * kebabCase('foo bar') // 'foo-bar'
 * kebabCase('foo-bar') // 'foo-bar'
 * kebabCase('FOO__ bar') // 'foo-bar'
 */
declare function kebabCase(str: string): string;

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
declare function pascalCase(str: string): string;

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
declare function snakeCase(str: string): string;

type ArrayLike$1<T> = {
  [index: number]: T;
  length: number;
};
type Dictionary<T> = {
  [key: string]: T;
};
type ArrayLikeValue<T> = T extends ArrayLike$1<infer U> ? U : never;
type DictionaryValue<T> = T extends Dictionary<infer U> ? U : never;
type Collection<T> = ArrayLike$1<T> | Dictionary<T>;
type CollectionValue<T> =
  T extends ArrayLike$1<infer U>
    ? U
    : T extends Dictionary<infer U>
      ? U
      : never;

export {
  type AriaRole,
  type ArrayLike$1 as ArrayLike,
  type ArrayLikeValue,
  type Collection,
  type CollectionValue,
  type Dictionary,
  type DictionaryValue,
  type Evt,
  type EvtListener,
  assign,
  assignIn,
  average,
  between,
  bind$,
  camelCase,
  capitalize,
  chunk,
  clamp,
  create$,
  debounce,
  difference,
  entries,
  entriesIn,
  every,
  filter,
  find,
  find$,
  findAll$,
  findKey,
  findLastKey,
  forEach,
  forEachRight,
  get,
  groupBy,
  has,
  intersection,
  is,
  isArray,
  isArrayLike,
  isBlank,
  isBoolean,
  isDate,
  isDateLike,
  isElement,
  isEmpty,
  isEqual,
  isError,
  isFunction,
  isMap,
  isNull,
  isNullish,
  isNumber,
  isObject,
  isPlainObject,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakSet,
  kebabCase,
  keys,
  keysIn,
  map,
  off,
  omit,
  on,
  pascalCase,
  pick,
  range,
  reduce,
  reduceRight,
  set,
  shuffle,
  sleep,
  snakeCase,
  some,
  sum,
  tagType,
  throttle,
  values,
  valuesIn,
};
