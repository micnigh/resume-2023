import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'mnigh.com';

export const start = '2014-11';
export const end = '2014-11';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Created blog to increase my online presence and demonstrate technical knowledge in an informal way.  Built with NodeJs stack using custom Gulp tasks.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'Bower',
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
  'Bootstrap',
  'Gulp',
  'Bower',
  'Git',
  'Sass',
  'Coffeescript',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
