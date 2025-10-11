import {
  type NormalizedExperience,
  type NormalizedProject,
} from '../index.types';
import { createExperience, createTags } from '../utils';
import { calculateDuration, formatDuration } from '../../../util/dates';

// Project imports
import * as articleRenderProject from './projects/article-render';
import * as accountCreationProject from './projects/account-creation';
import * as forecastToolProject from './projects/forecast-tool';
import * as homerFundProject from './projects/homer-fund';

export const title = 'Senior Web Developer - Home Depot';

export const start = '2018-02';
export const end = '2019-03';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
**Contracted through Visionaire**

Develop internal applications and support homedepot.com content creation using a variety of modern and legacy tools for front and backend.

`;

export const tags = createTags(duration, []);

export const icons: string[] = [];

export const getExperience = (): Promise<NormalizedExperience> => {
  const projects = (
    [
      articleRenderProject.project,
      accountCreationProject.project,
      forecastToolProject.project,
      homerFundProject.project,
    ] as NormalizedProject[]
  ).map((p) => p.id) as string[];

  const experience: NormalizedExperience = createExperience({
    title,
    start,
    end,
    duration,
    icons,
    tags,
    projects,
    summaryMarkdown,
  });

  return Promise.resolve(experience);
};

export default getExperience;
