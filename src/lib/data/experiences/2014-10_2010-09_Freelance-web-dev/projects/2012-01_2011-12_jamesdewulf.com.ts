import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'jamesdewulf.com';

export const start = '2011-12';
export const end = '2012-01';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Rebuilt site as an SPA to be much faster and added new features.  Features include jqZoom for product photos, fancybox display of press magazine articles, and videos of products.  Built with web app generator I began a few months prior.
`;

export const icons = [
  'NodeJS',
];

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'NodeJS',
  'Coffeescript',
  'CoffeeKup',
  'Jasmine',
  'SEO',
  'BDD',
  'TDD',
  'Rackspace Cloud',
  'Rackspace CloudFiles',
  'fancyBox',
  'jqZoom',
  'Flowplayer',
  'HTML',
  'CSS',
]),
  summaryMarkdown,
});

export default project;
