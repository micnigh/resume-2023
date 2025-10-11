import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Article Render Squad';

export const start = '2018-10';
export const end = '2019-03';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Work with product owners to optimize SEO and render new article content as lead front end engineer.

Analyze SEO impact of React usage with THD architects as an SPA, element replacement, and SSR.

Create automated tests to validate all new and existing content is rendered correctly.

Implement image snapshot differential testing for components at various states.

Work with multiple teams to improve testing process throughout deployments.

Develop strategies to implement NextGen THD features.

`;

export const icons = ['Webpack', 'NodeJS', 'Docker'];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'Typescript',
    'NodeJS',
    'Webpack',
    'Git',
    'Docker',
    'Sass',
    'JQuery',
    'HTML',
    'CSS',
    'ExpressJS',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
