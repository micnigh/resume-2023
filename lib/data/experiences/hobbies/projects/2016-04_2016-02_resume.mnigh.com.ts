import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `resume.mnigh.com`;

export let start = `2016-02`;
export let end = `2016-04`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

// tslint:disable
export let summaryMarkdown = `
Published resume as open source project.

Fork of previous boilerplate project, streamlined and improved from past iterations. Replaced graphs with simple React components, vastly improved skill calculations, and reogranized structure to better represent project associations.
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
  link: `https://github.com/micnigh/resume-2016/`,
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
