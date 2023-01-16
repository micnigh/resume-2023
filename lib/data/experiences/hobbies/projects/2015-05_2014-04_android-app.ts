import moment from 'moment';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../';

export let title = `android app`;

export let start = `2015-04`;
export let end = `2015-05`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Built networked application in a small team for a class.  The application needed to synchronize data between clients.  Credentials were validated via Google oAuth tokens and data was synced via an API server built in NodeJS express and socket.io .
`;

export let tags = createTags(duration, [
  `NodeJS`,
  `Digital Ocean`,
  `Git`,
  `Docker`,
  `Android`,
  `socket.io`,
  `Java`,
]);

export let icons = [
  `NodeJS`,
  `Docker`,
  `Java`,
  `Android`,
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
