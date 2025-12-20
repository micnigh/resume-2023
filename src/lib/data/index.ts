import getExperiences from './experiences';

export { getExperiences } from './experiences';

// Cache for loaded data
let dataCache: Awaited<ReturnType<typeof getExperiences>> | null = null;
let dataPromise: Promise<Awaited<ReturnType<typeof getExperiences>>> | null =
  null;

/**
 * Load and denormalize all data
 * Uses caching to ensure data is only loaded once
 */
export const loadData = (): Promise<
  Awaited<ReturnType<typeof getExperiences>>
> => {
  if (dataCache) {
    return Promise.resolve(dataCache);
  }
  if (!dataPromise) {
    dataPromise = getExperiences();
    void dataPromise.then((data) => {
      dataCache = data;
    });
  }
  return dataPromise;
};

/**
 * Get cached data synchronously (throws if not loaded)
 * Use with React Suspense
 */
export const getData = (): Awaited<ReturnType<typeof getExperiences>> => {
  if (!dataCache) {
    const promise = dataPromise || loadData();
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw promise; // Throwing a promise is the correct pattern for React Suspense
  }
  return dataCache;
};
