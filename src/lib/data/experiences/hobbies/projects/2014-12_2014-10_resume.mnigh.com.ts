import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'resume.mnigh.com';

export const start = '2014-11';
export const end = '2014-12';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Rebuilt resume with NodeJs stack from custom Gulp tasks.  Snapshots of previous projects ported into Docker containers and run on a single VPS behind an Nginx proxy.
`;

export const icons = [
  'Gulp',
  'NodeJS',
  'Bower',
  'Docker',
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
  'Gulp',
  'Bower',
  'Digital Ocean',
  'Git',
  'Docker',
  'Sass',
  'Compass',
  'Coffeescript',
  'JQuery',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
