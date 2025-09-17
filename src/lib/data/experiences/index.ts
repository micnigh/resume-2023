import { NormalizedExperience } from './index.types';
import { createExperience, createTags, projectsById, tags } from './utils';

// Experience imports
import * as macmillanExperience from './2019-04_Sr-Web-Developer-MacMillan/';
import * as homeDepotExperience from './2018-02_Sr-Web-Developer-Home-Depot/';
import * as gditExperience from './2016-02_Sr-Web-Developer-GDIT/';
import * as freelanceExperience from './2014-10_2010-09_Freelance-web-dev/';
import * as sutisoftExperience from './2012-08_2012-04_Technical-Lead_Sutisoft/';
import * as xtracoolExperience from './2012-03_2011-12_Mobile-Game-Dev_Xtracool/';
import * as duovuExperience from './2007-01_2005-01_duovu.com_Duovu-Inc/';
import * as hobbiesExperience from './hobbies/';

// Re-export utilities for backward compatibility
export { createExperience, createTags, createProject, tags } from './utils';

export const getExperiences = async () => {
  // Get the normalized data
  let normalizedExperiences: NormalizedExperience[] = [
    await macmillanExperience.getExperience(),
    await homeDepotExperience.getExperience(),
    await gditExperience.getExperience(),
    await freelanceExperience.getExperience(),
    await sutisoftExperience.getExperience(),
    await xtracoolExperience.getExperience(),
    await duovuExperience.getExperience(),
    await hobbiesExperience.getExperience(),
  ];

  // Create a proper entities structure manually since we already have normalized data
  const entities = {
    experiences: {},
    projects: projectsById,
    tags,
  };

  // Populate experiences
  normalizedExperiences.forEach(exp => {
    entities.experiences[exp.id] = exp;
  });

  // Create result array with experience IDs
  const result = normalizedExperiences.map(exp => exp.id);
  
  return {
    entities,
    result,
  }
}


export default getExperiences;
