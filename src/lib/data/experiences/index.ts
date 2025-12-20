import {
  type Experience,
  type Tag,
  type NormalizedExperience,
} from './index.types';
import { projectsById, tags } from './utils';

// Re-export utilities for backward compatibility
export { createExperience, createTags, createProject, tags } from './utils';

// Dynamically import all experience modules
// This automatically discovers all experience directories with index.ts files
const experienceModules = import.meta.glob<{
  getExperience: () => Promise<NormalizedExperience>;
}>('./*/index.ts', { eager: false });

/**
 * Denormalizes experiences by resolving project and tag IDs to full objects
 */
const denormalizeExperiences = async (): Promise<{
  experiences: Experience[];
  tags: Tag[];
}> => {
  // Dynamically load all experience modules
  const experiencePromises = Object.values(experienceModules).map(
    (moduleLoader) => moduleLoader().then((module) => module.getExperience())
  );

  // Get all normalized experiences
  const normalizedExperiences = await Promise.all(experiencePromises);

  // Convert normalized experiences to full Experience objects
  const experiences: Experience[] = normalizedExperiences.map((exp) => {
    // Resolve project IDs to full Project objects
    const projects = exp.projects
      .map((projectId) => {
        const normalizedProject = projectsById[projectId];
        if (!normalizedProject) {
          console.warn(
            `Project with ID "${projectId}" not found for experience "${exp.title}"`
          );
          return null;
        }

        // Resolve tag IDs to full Tag objects for this project
        const projectTags = normalizedProject.tags
          .map((tagId) => {
            const tag = tags[tagId];
            if (!tag) {
              console.warn(
                `Tag with ID "${tagId}" not found for project "${normalizedProject.title}"`
              );
            }
            return tag;
          })
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
      .map((tagId) => {
        const tag = tags[tagId];
        if (!tag) {
          console.warn(
            `Tag with ID "${tagId}" not found for experience "${exp.title}"`
          );
        }
        return tag;
      })
      .filter((tag): tag is Tag => tag !== undefined);

    return {
      ...exp,
      projects,
      tags: experienceTags,
    };
  });

  // Sort experiences by start date (most recent first)
  // If start dates are equal, sort by end date (ongoing experiences first)
  experiences.sort((a, b) => {
    const aStart = a.start ? new Date(a.start).getTime() : 0;
    const bStart = b.start ? new Date(b.start).getTime() : 0;

    // Primary sort: by start date (descending - most recent first)
    if (bStart !== aStart) {
      return bStart - aStart;
    }

    // Secondary sort: by end date (ongoing experiences first, then most recent end)
    const aEnd = a.end ? new Date(a.end).getTime() : Date.now();
    const bEnd = b.end ? new Date(b.end).getTime() : Date.now();
    return bEnd - aEnd;
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
