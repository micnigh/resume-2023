import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Docker migration';

export const start = '2014-07';
export const end = '2014-08';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Applied Docker to new and current web projects.  Moved away from shell and ruby scripts to Dockerfiles with simple build scripts.  Over time learned and applied best practices - based on docker usage in small and big companies.
`;

export const icons = [];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'NodeJS',
    'Docker',
    'Wordpress',
    'Grunt',
    'Gulp',
    'Git',
    'HTML',
    'CSS',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
