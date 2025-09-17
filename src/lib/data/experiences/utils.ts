import { NormalizedExperience, NormalizedProject, Tag } from './index.types';
import { merge } from 'lodash';
import moment from 'moment';
import * as uuid from 'uuid';

import { marked } from 'marked'
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
  return `<a target='_blank' class='font-bold' href='${ href }' title='${title || ''}' >${ text }</a>`;
};

let formatTime = (time: string) => {
  return time === `` ? time : moment.utc(time).format();
};

export let createExperience = (options: NormalizedExperience): NormalizedExperience => {
  let experience = merge(
    {
      id: uuid.v4(),
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

let projectsById: { [guid: string]: NormalizedProject; } = {};
export let createProject = (options: NormalizedProject): NormalizedProject => {
  let project = merge(
    { id: uuid.v4() },
    options,
    {
      start: formatTime(options.start),
      end: formatTime(options.end),
      summaryHtml: marked(options.summaryMarkdown, { renderer }),
    }
  );
  projectsById[project.id] = project;
  if (typeof project.portfolio !== 'undefined') {
    project.portfolio = merge(
      { hoverTitle: `View snapshot of ${project.title}` },
      project.portfolio
    );
  }
  return project;
};

let tagCacheByName = {};
export let tags: { [guid: string]: Tag; } = {};
export let createTags = (duration: string, newTags: string[]): string[] => {
  return newTags.map(t => {
    let tag = tagCacheByName[t] as Tag;
    if (typeof tag !== 'undefined') {
      tag = merge(tag, {
        duration: moment.duration(tag.duration).add(moment.duration(duration)).toJSON(),
      });
      return tag;
    } else {
      return createTag({ name: t, duration });
    }
  }).map(t => t.id) as string[];
};
let createTag = (options: Tag): Tag => {
  let tag = merge(
    { id: uuid.v4() }, 
    options,
  );
  tagCacheByName[options.name] = tag;
  tags[tag.id] = tag;
  return tag;
};

export { projectsById };
