import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Web App Generator';

export const start = '2011-11';
export const end = '2012-01';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Created Coffeescript based single page app generator.  Solved SEO by rendering first page from server and remaining pages from application.  Utilized TDD and BDD to ensure SPA worked well in all browsers.

Interesting features include an AATree (heavily stress and performance tested), priority based image download queue, and a package system similar to AMD for modular code and easy mocking.
`;

export const icons = ['NodeJS'];

export const portfolio = undefined;

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
    'HTML',
    'CSS',
  ]),
  summaryMarkdown,
  portfolio,
});

export default project;
