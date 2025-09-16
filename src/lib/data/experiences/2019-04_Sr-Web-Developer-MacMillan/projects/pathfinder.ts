import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../..';

import { tags as parentTags } from '..';

export let title = `Pathfinder`;

export let start = `2019-04`;
export let end = ``;

export let duration = moment.duration(moment.utc().diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Test student competency to generate studyplan on areas that need improvement
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
  `Koa`,
  `Docker`,
  `GraphQL`,
  `AWS`,
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
