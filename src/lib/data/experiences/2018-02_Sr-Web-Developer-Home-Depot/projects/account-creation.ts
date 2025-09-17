import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Account Creation`;

export let start = `2018-09`;
export let end = `2018-09`;

export let duration = moment.duration(moment.utc().diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Rapidly created a React/Redux SPA to integrate with simple API.
`;

export let icons = [
  `Webpack`,
  `NodeJS`,
  `React`,
];

export let portfolio = undefined;

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `Typescript`,
  `NodeJS`,
  `Webpack`,
  `Git`,
  `Sass`,
  `React`,
  `Redux`,
  `HTML`,
  `CSS`,
  `ExpressJS`,
]),
  summaryMarkdown,
  portfolio,
});

export default project;
