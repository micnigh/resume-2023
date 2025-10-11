import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'Homer Fund';

export const start = '2018-02';
export const end = '2018-02';

export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Rapidly shipped updates to Python Flask app to support the Homer Fund 2018 charity.

Also created a small support service in Spring Boot to consume APIs otherwise innacessible internally through Python.

`;

export const icons = ['Python', 'Java'];

export const portfolio = undefined;

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, ['Python', 'Flask', 'Java']),
  summaryMarkdown,
  portfolio,
});

export default project;
