import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Account Creation`;

export let start = `2018-09`;
export let end = `2018-09`;

export let duration = moment.duration(moment().diff(moment(start))).toJSON();

export let summaryMarkdown = `
Rapidly created a React/Redux SPA to integrate with simple API.
`;

export let tags = parentTags.concat(createTags(duration, [
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
]));

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
  tags,
  summaryMarkdown,
  portfolio,
});

export default project;
