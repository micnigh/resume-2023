import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `yet another isomorphic blog`;

export let start = `2015-10`;
export let end = `2015-11`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Created an isomorphic React blog.

Bootstrapped from past boilerplate project, creates a static isomorphic website which can be hosted on github pages at no cost.
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Gulp`,
  `Git`,
  `Sass`,
  `HTML`,
  `CSS`,
  `React`,
  `jsonapi`,
]);

export let icons = [
  `Gulp`,
  `NodeJS`,
  `React`,
];

export let portfolio = {
  link: `https://github.com/micnigh/yet-another-isomorphic-blog/`,
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
