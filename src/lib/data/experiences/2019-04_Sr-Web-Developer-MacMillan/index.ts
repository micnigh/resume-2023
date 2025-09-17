import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../utils';

// Project imports
import * as pathfinderProject from './projects/pathfinder';
import * as learningcurveProject from './projects/learningcurve';
import * as readingProject from './projects/reading';

export let title = `Senior Software Engineer - MacMillan`;

const tekStart = `2019-04`;
const tekEnd = `2020-07`

const fulltimeStart = `2020-07`;

export let start = `2019-04`;
export let end = ``;
export let duration = moment.duration(moment.utc().endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
**Senior Software Engineer**  ${fulltimeStart} to present

**Senior Software Engineer - Contracted through TekSystems** ${tekStart} to ${tekEnd}

Support production applications for the Learning Support Tools team.

LST is a small team of developers maintaining multiple production applications.  As much of the team is remote good communication is a must.  Pair programming is strongly encouraged.

A typical week may include bug fixes, feature work, coordination with other teams, meetings with architects, and coordinating deploys to AWS with SRE's.

`;

export let tags = createTags(duration, [

]);

export let icons = [

];


export const getExperience = async () => {
  let projects = ([
    pathfinderProject.project,
    learningcurveProject.project,
    readingProject.project,
    // pathfinder2Project.project,
  ] as NormalizedProject[]).map(p => p.id) as string[];
  
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
