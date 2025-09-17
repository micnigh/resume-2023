import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../utils';

// Project imports
import * as articleRenderProject from './projects/article-render';
import * as accountCreationProject from './projects/account-creation';
import * as forecastToolProject from './projects/forecast-tool';
import * as homerFundProject from './projects/homer-fund';

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
    articleRenderProject.project,
    accountCreationProject.project,
    forecastToolProject.project,
    homerFundProject.project,
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
