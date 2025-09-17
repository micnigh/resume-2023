import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `Monterey Phoenix`;

export let start = ``;
export let end = ``;

export let duration = moment.duration({ months: 3 }).toJSON();

export let summaryMarkdown = `
Code editor for the [Monterey Phoenix language](https://wiki.nps.edu/display/MP/Monterey+Phoenix+Home) with graph visualizations and automated layouts.  Used to examine process flow in a variety of disciplines to clarify and find problems in the execution of asynchronous events.
`;

export let icons = [
  `Gulp`,
  `NodeJS`,
  `Docker`,
  `Backbone`,
];

export let portfolio = {
  link: `http://firebird.nps.edu/`,
  hoverTitle: `View public website`,
};

export let project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  `socket.io`,
]),
  summaryMarkdown,
  portfolio,
});

export default project;
