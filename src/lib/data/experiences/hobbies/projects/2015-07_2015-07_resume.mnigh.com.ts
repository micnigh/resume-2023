import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'resume.mnigh.com';

export const start = '2015-07';
export const end = '2015-08';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Updated, upgraded, and easier to maintain after working on various Docker and Gulp projects over the last year.
`;

export const icons = ['Gulp', 'NodeJS', 'Bower', 'Docker'];

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
