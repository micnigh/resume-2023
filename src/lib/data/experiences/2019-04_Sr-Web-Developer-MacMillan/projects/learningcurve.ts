import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';
import { calculateDuration, formatDuration } from '../../../../util/dates';

export const title = 'Learning Curve';

export const start = '2019-04';
export const end = '';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Learn topics by answering questions until a target score is reached

`;

export const icons = [
  'PHP',
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
    'PHP',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
