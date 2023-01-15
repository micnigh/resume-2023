import moment from 'moment';

import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Web Developer - Duovu Inc`;

export let start = `2005-01`;
export let end = `2007-01`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Built a Real Estate PHP/MYSQL website in a small team.  Created a blueprint drawing tool using an applet combined with a DOJO front end.  Utilized XML via JSON to communicate between server and client applications.  Also responsible for building and maintaining LAMP servers and virtual machines used by developers.
`;

export let tags = createTags(duration, [
  `PHP`,
  `MYSQL`,
  `LAMP`,
  `Dojo`,
  `Javascript`,
  `JSON`,
  `XML`,
  `Java`,
  `VMWare Workstation`,
  `HTML`,
  `CSS`,
]);

export let icons = [
  `Java`,
  `Javascript`,
  `PHP`,
  `MYSQL`,
];

export const getExperience = async () => {
  let projects = [];

  let experience: NormalizedExperience = createExperience({
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
}


export default getExperience;
