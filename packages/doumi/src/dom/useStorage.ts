import { isNull } from '../lang';
import { get } from '../object';

type Storage = {
  /** Returns the current value associated with the given key, or null if the given key does not exist. */
  get<T, V = null>(key: string, defaultValue?: V): T | V;
  /** Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously. */
  set(key: string, value: any): void;
  /** Removes the key/value pair with the given key, if a key/value pair with the given key exists. */
  remove(key: string): void;
  /** Removes all key/value pairs, if there are any. */
  clear(): void;
};

/**
 * Create storage. For easy to use browser localStorage(or sessionStorage)
 * @since 1.1.0
 * @param {'local' | 'session'} [storageType = 'local'] The storage to use.
 * @returns {Storage} Returns storage
 * @example
 *
 * const storage = useStorage()
 * storage.get('name') // null
 * storage.get('name', 'Who are you?') // 'Who are you?'
 *
 * storage.set('name', 'Kim')
 * storage.get('name') // 'Kim'
 *
 * storage.set('data', { x: 1, y: 10 }) // Save stringify value, '{ "x": 1, "y": 10 }'
 * storage.get('data') // Get parse value ,{ x: 1, y: 10 }
 *
 * storage.remove('name')
 * storage.get('name') // null
 *
 * storage.clear()
 * storage.get('data') // null
 */
function useStorage(storageType: 'local' | 'session' = 'local'): Storage {
  const target = storageType + 'Storage';
  const store = get(window, target) as any;
  if (!store) throw new Error(`Can't find ${target}`);

  const results = {
    get: (key: string, defaultValue: any = null) => {
      const item = store.getItem(key);
      return isNull(item) ? defaultValue : JSON.parse(item);
    },
    set: (key: string, value: any) => store.setItem(key, JSON.stringify(value)),
    remove: (key: string) => store.removeItem(key),
    clear: () => store.clear(),
  };
  return results;
}

export default useStorage;
