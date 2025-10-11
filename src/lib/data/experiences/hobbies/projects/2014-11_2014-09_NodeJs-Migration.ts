import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'NodeJs Migration';

export const start = '2014-09';
export const end = '2014-11';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Shifted from Rails to Nodejs to unify stack and take advantage of better build tools.  Created Gulp tasks for rapid generation of SPAs and websites.  Modularized tasks using NPM so that new projects can be bootstraped based on application type.  Features include ES6 transpiling, integration testing, Livereload, preprocesser support (SASS, Coffeescript, Jade), and optimized assets based on environment.
`;

export const icons = ['Gulp', 'NodeJS', 'Bower'];

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
    'Ember',
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
