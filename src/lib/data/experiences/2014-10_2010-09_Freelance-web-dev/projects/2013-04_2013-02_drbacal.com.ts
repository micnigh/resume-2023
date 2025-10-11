import { calculateDuration, formatDuration } from '../../../../util/dates';
import { type NormalizedProject } from '../../index.types';
import { createProject, createTags } from '../../utils';

export const title = 'drbacal.com';

export const start = '2013-02';
export const end = '2013-04';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Constructed WordPress backed website using custom deployment tools I built earlier with Sprinkle (similar to Chef).  Worked with client and SEO specialist for design and content.  Used Rails with LiveReload to generate SASS and Coffeescript of WordPress theme.
`;

export const icons = ['Rails', 'Wordpress'];

export const project: NormalizedProject = createProject({
  title,
  start,
  end,
  duration,
  icons,
  tags: createTags(duration, [
    'Rails',
    'Wordpress',
    'AWS EC2',
    'AWS S3',
    'AWS CloudFront',
    'Git',
    'VirtualBox',
    'Sass',
    'Compass',
    'Ruby',
    'PHP',
    'Coffeescript',
    'JQuery',
    'Vagrant',
    'lxc',
    'zsh',
    'oh-my-zsh',
    'Sprinkle',
    'HTML',
    'CSS',
  ]),
  summaryMarkdown,
});

export default project;
