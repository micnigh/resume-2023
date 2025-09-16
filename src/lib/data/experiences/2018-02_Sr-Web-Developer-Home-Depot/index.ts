import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Senior Web Developer - Home Depot`;

export let start = `2018-02`;
export let end = `2019-03`;
export let duration = moment.duration(moment.utc().endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
**Contracted through Visionaire**

Develop internal applications and support homedepot.com content creation using a variety of modern and legacy tools for front and backend.

`;

export let tags = createTags(duration, [

]);

export let icons = [

];

export const getExperience = async () => {
  let projects = ([
    (await import('./projects/article-render')).project,
    (await import('./projects/account-creation')).project,
    (await import('./projects/forecast-tool')).project,
    (await import('./projects/homer-fund')).project,
  ] as NormalizedProject[]).map(p => p.id) as string[];

  let experience: NormalizedExperience = createExperience({
    title,
    start,
    end,
    duration,
    icons,
    tags,
    projects,
    summaryMarkdown,
  });

  return experience;
}

export default getExperience;
