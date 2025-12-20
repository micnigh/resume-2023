import {
  type NormalizedExperience,
  type NormalizedProject,
} from './index.types';
import { deepMerge } from '../../util/deepMerge';
import { markdownToHtml } from '../../util/markdown';
import { formatTime } from '../../util/dateFormat';

/**
 * Create a normalized experience with generated ID and processed fields
 * @param options - Experience options
 * @returns Normalized experience with ID, formatted dates, and HTML summary
 */
export const createExperience = (
  options: NormalizedExperience
): NormalizedExperience => {
  const experience = deepMerge(
    {
      id: crypto.randomUUID(),
    } as Record<string, unknown>,
    options as unknown as Record<string, unknown>,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: markdownToHtml(options.summaryMarkdown),
    } as Record<string, unknown>
  ) as unknown as NormalizedExperience;

  if (typeof experience.portfolio !== 'undefined') {
    experience.portfolio = {
      ...{
        hoverTitle: `View snapshot of ${String(experience.title)}`,
      },
      ...experience.portfolio,
    };
  }
  return experience;
};

const projectsById: { [guid: string]: NormalizedProject } = {};

/**
 * Create a normalized project with generated ID and processed fields
 * @param options - Project options
 * @returns Normalized project with ID, formatted dates, and HTML summary
 */
export const createProject = (
  options: NormalizedProject
): NormalizedProject => {
  const project = deepMerge(
    { id: crypto.randomUUID() } as Record<string, unknown>,
    options as unknown as Record<string, unknown>,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: markdownToHtml(options.summaryMarkdown),
    } as Record<string, unknown>
  ) as unknown as NormalizedProject;

  if (project.id) {
    projectsById[project.id] = project;
  }

  if (typeof project.portfolio !== 'undefined') {
    project.portfolio = {
      ...{ hoverTitle: `View snapshot of ${String(project.title)}` },
      ...project.portfolio,
    };
  }
  return project;
};

// Re-export createTags and tags from tagRegistry
export { createTags, tags } from './tagRegistry';

export { projectsById };
