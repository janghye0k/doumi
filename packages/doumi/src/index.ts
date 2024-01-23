export * from './array';
export * from './collection';
export * from './dom';
export * from './function';
export * from './lang';
export * from './math';
export * from './object';
export * from './string';

export type {
  ArrayLike,
  Collection,
  Dictionary,
  ArrayLikeValue,
  CollectionValue,
  DictionaryValue,
};

type ArrayLike<T> = {
  [index: number]: T;
  length: number;
};

type Dictionary<T> = {
  [key: string]: T;
};

type ArrayLikeValue<T> = T extends ArrayLike<infer U> ? U : never;

type DictionaryValue<T> = T extends Dictionary<infer U> ? U : never;

type Collection<T> = ArrayLike<T> | Dictionary<T>;

type CollectionValue<T> =
  T extends ArrayLike<infer U> ? U : T extends Dictionary<infer U> ? U : never;
