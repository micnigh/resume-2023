import { type Experience, type Tag } from './index.types';
import { projectsById, tags } from './utils';

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

/**
 * Denormalizes experiences by resolving project and tag IDs to full objects
 */
const denormalizeExperiences = async (): Promise<{
  experiences: Experience[];
  tags: Tag[];
}> => {
  // Get all normalized experiences
  const normalizedExperiences = [
    await macmillanExperience.getExperience(),
    await homeDepotExperience.getExperience(),
    await gditExperience.getExperience(),
    await freelanceExperience.getExperience(),
    await sutisoftExperience.getExperience(),
    await xtracoolExperience.getExperience(),
    await duovuExperience.getExperience(),
    await hobbiesExperience.getExperience(),
  ];

  // Convert normalized experiences to full Experience objects
  const experiences: Experience[] = normalizedExperiences.map((exp) => {
    // Resolve project IDs to full Project objects
    const projects = exp.projects
      .map((projectId) => {
        const normalizedProject = projectsById[projectId];
        if (!normalizedProject) return null;

        // Resolve tag IDs to full Tag objects for this project
        const projectTags = normalizedProject.tags
          .map((tagId) => tags[tagId])
          .filter((tag): tag is Tag => tag !== undefined);

        return {
          ...normalizedProject,
          tags: projectTags,
        };
      })
      .filter(
        (project): project is NonNullable<typeof project> => project !== null
      );

    // Resolve tag IDs to full Tag objects for the experience
    const experienceTags = exp.tags
      .map((tagId) => tags[tagId])
      .filter((tag): tag is Tag => tag !== undefined);

    return {
      ...exp,
      projects,
      tags: experienceTags,
    };
  });

  // Get all tags as an array
  const allTags = Object.values(tags).filter(
    (tag): tag is Tag => tag !== undefined
  );

  return {
    experiences,
    tags: allTags,
  };
};

export const getExperiences = denormalizeExperiences;

export default getExperiences;
