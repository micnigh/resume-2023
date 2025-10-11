import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../utils';
import { calculateDuration, formatDuration } from '../../../util/dates';

export const title = 'Web Developer - Duovu Inc';

export const start = '2005-01';
export const end = '2007-01';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Built a Real Estate PHP/MYSQL website in a small team.  Created a blueprint drawing tool using an applet combined with a DOJO front end.  Utilized XML via JSON to communicate between server and client applications.  Also responsible for building and maintaining LAMP servers and virtual machines used by developers.
`;

export const tags = createTags(duration, [
  'PHP',
  'MYSQL',
  'LAMP',
  'Dojo',
  'Javascript',
  'JSON',
  'XML',
  'Java',
  'VMWare Workstation',
  'HTML',
  'CSS',
]);

export const icons = [
  'Java',
  'Javascript',
  'PHP',
  'MYSQL',
];

export const getExperience = async (): Promise<NormalizedExperience> => {
  const projects: string[] = [];

  const experience: NormalizedExperience = createExperience({
    title,
    start,
    end,
    duration,
    icons,
    tags,
    projects,
    summaryMarkdown,
  });

  return experience;
};


export default getExperience;
