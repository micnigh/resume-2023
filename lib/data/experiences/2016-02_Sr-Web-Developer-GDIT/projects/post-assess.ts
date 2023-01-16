import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

import { tags as parentTags } from '../';

export let title = `Post & Assess`;

export let start = ``;
export let end = ``;

export let duration = moment.duration({ months: 3 }).toJSON();

export let summaryMarkdown = `
Tool for students to publish posts, be assessed by peers, and graded by an instructor.

Hides posts until each period is over, preventing students from being influenced by early posts.
`;

export let tags = parentTags.concat(createTags(duration, [
  `React`,
  `Redux`,
  `Typescript`,
]));

export let icons = [
  `Gulp`,
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
