import { NormalizedExperience } from '../index.types';
import { createExperience, createTags } from '../utils';
import { calculateDuration, formatDuration } from '../../../util/dates';

export const title = 'Mobile Game Dev - xtracool';

export const start = '2011-12';
export const end = '2012-03';
export const duration = formatDuration(calculateDuration(start, end));

export const summaryMarkdown = `
Architected cross platform game engine for use with iOS and Android.  Built on the Moai SDK with game and game engine written in Moonscript and Lua.  Built against actively evolving SDKs.  Chipmunk used for physics and collision detection.
`;

export const tags = createTags(duration, [
  'iOS',
  'Apple',
  'Android',
  'Moai SDK',
  'Moonscript',
  'Lua',
  'Chipmunk',
]);

export const icons = ['Apple'];

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
