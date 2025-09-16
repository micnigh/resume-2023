import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Forecast Tool`;

export let start = `2018-03`;
export let end = `2018-08`;

export let duration = moment.duration(moment.utc().diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Architected modern React/Redux SPA of internal HR budgeting application used throughout the .com organization.

Backend built using NodeJS Express with apis written in Apollo GraphQL pulling data from PostgreSQL.

Frontends written with React/Redux in Typescript.

Deployments using the [twelve-factor](http://12factor.net/) approach on [google cloud platforms](https://cloud.google.com).

`;

export let tags = parentTags.concat(createTags(duration, [
  `Typescript`,
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Docker`,
  `Sass`,
  `React`,
  `Redux`,
  `HTML`,
  `CSS`,
  `PostgreSQL`,
  `GraphQL`,
  `ExpressJS`,
]));

export let icons = [
  `Webpack`,
  `NodeJS`,
  `Docker`,
  `React`,
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
