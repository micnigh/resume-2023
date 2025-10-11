import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Account Creation';

export const start = '2018-09';
export const end = '2018-09';

export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Rapidly created a React/Redux SPA to integrate with simple API.
`;

export const icons = [
  'Webpack',
  'NodeJS',
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
  'ExpressJS',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
