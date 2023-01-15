import { project as schemaProject } from '../schema/';
import { Project } from '../../experiences/index.types';

let { denormalize } = require('denormalizr');

export let denormalizeProject = (id: string, normalizedEntitities: any) => {
  return denormalize(normalizedEntitities.projects[id], schemaProject, normalizedEntitities) as Project;
};

export default denormalizeProject;
