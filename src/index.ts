export * from './lang';
export * from './dom';
export * from './object';
export * from './collection';
export * from './array';

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

type CollectionValue<T> = T extends ArrayLike<infer U>
  ? U
  : T extends Dictionary<infer U>
    ? U
    : never;
