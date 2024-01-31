/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
 * @since 0.1.0
 * @param {object} target The target object to copy to.
 * @param {...object} sources The source object from which to copy properties.
 * @returns {any} Returns the merged `target` object.
 * @example
 *
 * assign({}, { x: 1 }, { y: 10 }) // { x: 1, y: 10 }
 */
const assign = Object.assign;

export default assign;
