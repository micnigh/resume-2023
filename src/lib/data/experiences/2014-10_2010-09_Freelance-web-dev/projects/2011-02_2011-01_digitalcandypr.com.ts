import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'digitalcandypr.com';

export const start = '2011-01';
export const end = '2011-02';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Expanded on GWT experience to design small business site with a very simple clean look.  Features include Twitter integration and AWS hosting.
`;

export const icons = ['Java'];

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'GWT',
    'Twitter JS API',
    'Rackspace Cloud',
    'LAMP',
    'AWS EC2',
    'AWS S3',
    'AWS CloudFront',
    'HTML',
    'CSS',
    'Java',
  ]),
  summaryMarkdown,
});

export default project;
