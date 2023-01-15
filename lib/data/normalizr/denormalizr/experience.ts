import { experience as schemaExperience } from '../schema/';
import { Experience } from '../../experiences/index.types';

import { denormalize } from 'normalizr';

export let denormalizeExperience = (id: string, normalizedEntitities: any) => {
  return denormalize(normalizedEntitities.experiences[id], schemaExperience, normalizedEntitities) as Experience;
};

export default denormalizeExperience;
