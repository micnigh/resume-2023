import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `boilerplate isomorphic typescript`;

export let start = `2016-01`;
export let end = `2016-02`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

// tslint:disable
export let summaryMarkdown = `
Boilerplate isomorphic React Typescript project.

Experimented with various build systems such as JSPM, Webpack, and Gulp, then combined the best of each into one project.  Sucessfully forked for a wide variety of projects, thanks to a type enhanced configuration file and related Gulp tasks.
`;
// tslint:enable

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Sass`,
  `HTML`,
  `CSS`,
  `React`,
  `Redux`,
  `Typescript`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `React`,
];

export let portfolio = {
  link: `https://github.com/micnigh/boilerplate-isomorphic-typescript/`,
  hoverTitle: `View public git repo`,
};

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
