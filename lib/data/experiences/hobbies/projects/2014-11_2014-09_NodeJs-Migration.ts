import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `NodeJs Migration`;

export let start = `2014-09`;
export let end = `2014-11`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Shifted from Rails to Nodejs to unify stack and take advantage of better build tools.  Created Gulp tasks for rapid generation of SPAs and websites.  Modularized tasks using NPM so that new projects can be bootstraped based on application type.  Features include ES6 transpiling, integration testing, Livereload, preprocesser support (SASS, Coffeescript, Jade), and optimized assets based on environment.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Bootstrap`,
  `Gulp`,
  `Bower`,
  `Ember`,
  `Git`,
  `Sass`,
  `Coffeescript`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Bower`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags,
  summaryMarkdown,
  portfolio,
});

export default project;
