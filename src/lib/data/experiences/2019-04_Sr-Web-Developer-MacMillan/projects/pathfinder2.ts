import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';
import { calculateDuration, formatDuration } from '../../../../util/dates';

export const title = 'Pathfinder 2';

export const start = '2019-10';
export const end = '';

export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Rewrite to reduce technical debt of pathfinder

`;

export const icons = [
  'Webpack',
  'NodeJS',
  'Docker',
  'React',
];

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
    'Sass',
    'React',
    'Redux',
    'HTML',
    'CSS',
    'Koa',
    'Docker',
    'GraphQL',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
