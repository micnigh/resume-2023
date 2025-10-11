import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'parveztaj.com';

export const start = '2010-09';
export const end = '2011-01';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Constructed art gallery website using a variety of tools, including GWT, JQuery, and Typeface.  Emphasis on design, compatibility, and performance.  Expanded GWT to allow exact positioning, shadows, custom fonts, and history support.  Worked directly with the client to achieve the exact look and feel they needed.

Maintained and added new content coinciding with launch events for a few years; This included adding new collections, sending out newsletters, and posting to various social media.  Assisted in migration to ecommerce by importing existing products into new Shopify site in 2014.
`;

export const icons = [
  'Java',
];

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
  'Rackspace Cloud',
  'Rackspace CloudFiles',
  'Flowplayer',
  'Facebook',
  'YouTube',
  'Constant Contact',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
});

export default project;
