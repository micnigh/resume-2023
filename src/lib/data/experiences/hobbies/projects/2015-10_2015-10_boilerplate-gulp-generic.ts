import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `boilerplate gulp generic`;

export let start = `2015-10`;
export let end = `2015-10`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Boilerplate ES6 project using Gulp tasks and Babel.
`;

export let icons = [
  `Gulp`,
  `NodeJS`,
];

export let portfolio = {
  link: `https://github.com/micnigh/boilerplate-gulp-generic/`,
  hoverTitle: `View public git repo`,
};

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Sass`,
  `HTML`,
  `CSS`,
]),
  summaryMarkdown,
  portfolio,
});

export default project;
