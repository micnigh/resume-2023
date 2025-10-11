import { NormalizedExperience, NormalizedProject, Tag } from './index.types';
import { merge } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { addDurations, formatDuration } from '../../util/dates';

import { marked } from 'marked';
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  return `<a target='_blank' rel='noopener noreferrer' class='font-bold' href='${href}' title='${title || ''}' >${text}</a>`;
};

const formatTime = (time: string): string => {
  if (time === '') return time;
  const date = new Date(time);
  return date.toISOString();
};

export const createExperience = (options: NormalizedExperience): NormalizedExperience => {
  const experience = merge(
    {
      id: uuidv4(),
    }, 
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    }
  );
  if (typeof experience.portfolio !== 'undefined') {
    experience.portfolio = merge(
      { hoverTitle: `View snapshot of ${experience.title}` },
      experience.portfolio
    );
  }
  return experience;
};

const projectsById: { [guid: string]: NormalizedProject } = {};

export const createProject = (options: NormalizedProject): NormalizedProject => {
  const project = merge(
    { id: uuidv4() },
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    }
  );
  projectsById[project.id!] = project;
  if (typeof project.portfolio !== 'undefined') {
    project.portfolio = merge(
      { hoverTitle: `View snapshot of ${project.title}` },
      project.portfolio
    );
  }
  return project;
};

const tagCacheByName: { [name: string]: Tag } = {};
export const tags: { [guid: string]: Tag } = {};

export const createTags = (duration: string, newTags: string[]): string[] => {
  return newTags.map((t) => {
    const tag = tagCacheByName[t];
    if (typeof tag !== 'undefined') {
      const updatedTag = merge({}, tag, {
        duration: addDurations(tag.duration, duration),
      });
      tagCacheByName[t] = updatedTag;
      tags[updatedTag.id!] = updatedTag;
      return updatedTag;
    } else {
      return createTag({ name: t, duration });
    }
  }).map((t) => t.id) as string[];
};

const createTag = (options: Tag): Tag => {
  const tag = merge(
    { id: uuidv4() }, 
    options,
  );
  tagCacheByName[options.name] = tag;
  tags[tag.id!] = tag;
  return tag;
};

export { projectsById };
