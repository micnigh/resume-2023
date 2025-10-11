import { calculateDuration, formatDuration } from '../../../../util/dates';
import { NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'android app';

export const start = '2015-04';
export const end = '2015-05';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Built networked application in a small team for a class.  The application needed to synchronize data between clients.  Credentials were validated via Google oAuth tokens and data was synced via an API server built in NodeJS express and socket.io .
`;

export const icons = [
  'NodeJS',
  'Docker',
  'Java',
  'Android',
];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
  'NodeJS',
  'Digital Ocean',
  'Git',
  'Docker',
  'Android',
  'socket.io',
  'Java',
]),
  summaryMarkdown,
  portfolio,
});

export default project;
