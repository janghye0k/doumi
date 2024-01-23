import tagType from './tagType';

/**
 * Check value is Error
 * @param {*} value The value to check
 * @returns {value is Error} Retruns `true` if `value` is error, else `false`
 * @example
 *
 * isError(new Error()) // true
 * isError('error') // false
 */
const isError = (value: unknown): value is Error => tagType(value) === 'Error';

export default isError;
