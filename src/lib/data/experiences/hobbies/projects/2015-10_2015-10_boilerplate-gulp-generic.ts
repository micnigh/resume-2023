import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'boilerplate gulp generic';

export const start = '2015-10';
export const end = '2015-10';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Boilerplate ES6 project using Gulp tasks and Babel.
`;

export const icons = ['Gulp', 'NodeJS'];

export const portfolio = {
  link: 'https://github.com/micnigh/boilerplate-gulp-generic/',
  hoverTitle: 'View public git repo',
};

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, ['NodeJS', 'Gulp', 'Git', 'Sass', 'HTML', 'CSS']),
  summaryMarkdown,
  portfolio,
});

export default project;
