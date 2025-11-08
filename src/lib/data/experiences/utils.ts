import {
  type NormalizedExperience,
  type NormalizedProject,
  type Tag,
} from './index.types';
import { addDurations } from '../../util/dates';

import { marked } from 'marked';
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  return `<a target='_blank' rel='noopener noreferrer' class='font-bold' href='${href}' title='${title || ''}' >${text}</a>`;
};

// Native deep merge utility to replace lodash merge
const deepMerge = <T extends Record<string, unknown>>(
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

const isObject = (item: unknown): item is Record<string, unknown> => {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
};

const formatTime = (time: string): string => {
  if (time === '') return time;
  const date = new Date(time);
  return date.toISOString();
};

export const createExperience = (
  options: NormalizedExperience
): NormalizedExperience => {
  const experience = deepMerge(
    {
      id: crypto.randomUUID(),
    } as NormalizedExperience,
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    } as Partial<NormalizedExperience>
  );
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

export const createProject = (
  options: NormalizedProject
): NormalizedProject => {
  const project = deepMerge(
    { id: crypto.randomUUID() } as NormalizedProject,
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    } as Partial<NormalizedProject>
  );
  projectsById[project.id] = project;
  if (typeof project.portfolio !== 'undefined') {
    project.portfolio = {
      ...{ hoverTitle: `View snapshot of ${String(project.title)}` },
      ...project.portfolio,
    };
  }
  return project;
};

const tagCacheByName: { [name: string]: Tag } = {};
export const tags: { [guid: string]: Tag } = {};

export const createTags = (duration: string, newTags: string[]): string[] => {
  return newTags
    .map((t) => {
      const tag = tagCacheByName[t];
      if (typeof tag !== 'undefined') {
        const updatedTag: Tag = {
          ...tag,
          duration: addDurations(tag.duration, duration),
        };
        tagCacheByName[t] = updatedTag;
        if (updatedTag.id) {
          tags[updatedTag.id] = updatedTag;
        }
        return updatedTag;
      } else {
        return createTag({ name: t, duration });
      }
    })
    .map((t) => t.id)
    .filter((id): id is string => typeof id === 'string');
};

const createTag = (options: Tag): Tag => {
  const tag: Tag = {
    id: crypto.randomUUID(),
    ...options,
  };
  tagCacheByName[options.name] = tag;
  if (tag.id) {
    tags[tag.id] = tag;
  }
  return tag;
};

export { projectsById };
