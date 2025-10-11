import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';
import { calculateDuration, formatDuration } from '../../../../util/dates';

export const title = 'Pathfinder';

export const start = '2019-04';
export const end = '';

export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Test student competency to generate studyplan on areas that need improvement
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
    'AWS',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
