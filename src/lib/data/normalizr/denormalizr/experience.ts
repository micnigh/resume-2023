import { experience as schemaExperience } from '../schema/';
import { Experience, NormalizedExperience, NormalizedProject, Tag } from '../../experiences/index.types';
import { denormalize } from 'normalizr';

interface NormalizedEntities {
  experiences: { [id: string]: NormalizedExperience };
  projects: { [id: string]: NormalizedProject };
  tags: { [id: string]: Tag };
}

export const denormalizeExperience = (id: string, normalizedEntities: NormalizedEntities): Experience => {
  return denormalize(normalizedEntities.experiences[id], schemaExperience, normalizedEntities) as Experience;
};

export default denormalizeExperience;
