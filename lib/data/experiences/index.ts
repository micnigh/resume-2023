import { NormalizedExperience, NormalizedProject, Tag } from './index.types';
import { merge } from 'lodash';
import moment from 'moment';
import * as uuid from 'uuid';

import { marked } from 'marked'
import denormalizeExperience from '../normalizr/denormalizr/experience';
const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => {
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

export const getExperiences = async () => {
  let experiencesAsArray: NormalizedExperience[] = [
    await (await import('./2019-04_Sr-Web-Developer-MacMillan/')).getExperience(),
    await (await import('./2018-02_Sr-Web-Developer-Home-Depot/')).getExperience(),
    await (await import('./2016-02_Sr-Web-Developer-GDIT/')).getExperience(),
    await (await import('./2014-10_2010-09_Freelance-web-dev/')).getExperience(),
    await (await import('./2012-08_2012-04_Technical-Lead_Sutisoft/')).getExperience(),
    await (await import('./2012-03_2011-12_Mobile-Game-Dev_Xtracool/')).getExperience(),
    await (await import('./2007-01_2005-01_duovu.com_Duovu-Inc/')).getExperience(),
    await (await import('./hobbies/')).getExperience(),
  ];

  let experiencesById: { [guid: string]: NormalizedExperience; } = {};
  experiencesAsArray.forEach(e => experiencesById[e.id as string] = e);

  const entities = {
    experiences: experiencesById,
    projects: projectsById,
    tags,
  }

  // const denormalizedExperiences = Object.keys(entities.experiences).map(k => denormalizeExperience(k, entities));
  
  return {
    // experiences: denormalizedExperiences,
    entities,
  }
}


export default getExperiences;
