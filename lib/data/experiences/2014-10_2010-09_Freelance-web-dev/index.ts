import moment from 'moment';
import { NormalizedExperience, NormalizedProject } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Freelance Web Developer`;

export let start = `2010-09`;
export let end = `2014-10`;
export let duration = moment.duration(moment.utc(end).endOf(`month` as any).diff(moment.utc(start))).toJSON();

export let summaryMarkdown = `
Building highly customized personal and small businesses websites.

See projects for details.
`;

export let tags = createTags(duration, [

]);

export let icons = [

];


export const getExperience = async () => {
  let projects = ([
    (await import('./projects/2013-07_2013-06_noahsarkretreat.com')).project,
    (await import('./projects/2013-04_2013-02_drbacal.com')).project,
    (await import('./projects/2012-06_2012-05_teresajanela.com')).project,
    (await import('./projects/2012-01_2011-12_jamesdewulf.com')).project,
    (await import('./projects/2011-08_2011-07_jenleearts.com')).project,
    (await import('./projects/2011-02_2011-01_digitalcandypr.com')).project,
    (await import('./projects/2011-01_2010-09_parveztaj.com')).project,
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
