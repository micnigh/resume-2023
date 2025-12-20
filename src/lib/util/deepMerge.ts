/**
 * Deep merge utility to combine multiple objects recursively
 * @param target - The target object to merge into
 * @param sources - Source objects to merge from
 * @returns The merged object
 */
export const deepMerge = <T extends Record<string, unknown>>(
  target: T,
  ...sources: Array<Partial<T>>
): T => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (source === undefined) return target;

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      const sourceValue = source[key];
      if (isObject(sourceValue)) {
        if (!target[key]) {
          (target as Record<string, unknown>)[key] = {};
        }
        deepMerge(
          target[key] as Record<string, unknown>,
          sourceValue as Record<string, unknown>
        );
      } else {
        (target as Record<string, unknown>)[key] = sourceValue;
      }
    }
  }

  return deepMerge(target, ...sources);
};

/**
 * Type guard to check if a value is a plain object
 */
const isObject = (item: unknown): item is Record<string, unknown> => {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
};
