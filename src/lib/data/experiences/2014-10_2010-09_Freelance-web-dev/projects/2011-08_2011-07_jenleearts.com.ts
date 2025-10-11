import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'jenleearts.com';

export const start = '2011-07';
export const end = '2011-08';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Extended parveztaj.com GWT template to another site.  Setup domain, hosting, and CDN.
`;

export const icons = ['Java'];

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'GWT',
    'JQuery',
    'Typeface',
    'Java',
    'Javascript',
    'Rackspace CloudFiles',
    'Rackspace Cloud',
    'HTML',
    'CSS',
  ]),
  summaryMarkdown,
});

export default project;
