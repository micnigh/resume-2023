import getExperiences from './experiences';

export { getExperiences } from './experiences';

// Load and denormalize all data at startup
export const data = await getExperiences();
