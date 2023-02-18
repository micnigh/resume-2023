import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../..';

import { tags as parentTags } from '..';

export let title = `Learning Curve`;

export let start = `2019-04`;
export let end = ``;
export let duration = moment.duration(moment.utc().endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Learn topics by answering questions until a target score is reached

`;

export let tags = parentTags.concat(createTags(duration, [
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
  `PHP`,
]));

export let icons = [
  `PHP`,
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
