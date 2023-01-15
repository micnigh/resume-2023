import moment from 'moment';
import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../';

export let title = `Mobile Game Dev - xtracool`;

export let start = `2011-12`;
export let end = `2012-03`;
export let duration = moment.duration(moment(end).endOf(`month` as any).diff(moment(start))).toJSON();

export let summaryMarkdown = `
Architected cross platform game engine for use with iOS and Android.  Built on the Moai SDK with game and game engine written in Moonscript and Lua.  Built against actively evolving SDKs.  Chipmunk used for physics and collision detection.
`;

export let tags = createTags(duration, [
  `iOS`,
  `Apple`,
  `Android`,
  `Moai SDK`,
  `Moonscript`,
  `Lua`,
  `Chipmunk`,
]);

export let icons = [
  `Apple`,
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
