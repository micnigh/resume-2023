import * as React from 'react';
import moment from 'moment';
import { Tag } from '../../lib/data/experiences/index.types';

export let tagsToDisplay = [
  'Docker',
  'NodeJS',
  'React',
  'Redux',
  'Sass',
  'Java',
  'PHP',
  'Typescript',
];

type SkillsGraphProps = {
  tags: Tag[];
}

export const SkillsGraph = ({ tags }: SkillsGraphProps) => {

  tags = tagsToDisplay.map(name => tags.find(t => t.name === name));

  let maxDuration = tags.reduce((a, b) => moment.duration(b.duration).subtract(moment.duration(a.duration)).asMilliseconds() < 0 ? a : b).duration;
  let yearsToRender = moment.duration(maxDuration).asYears();

  return (
    <div className='space-y-1'>
      {tags.map((t, index) => {
        let normalizedDuration = moment.duration(t.duration).asMilliseconds() / moment.duration(maxDuration).asMilliseconds();
        let percentageWidth = Math.floor(normalizedDuration * 100);
        return (
          <div className='flex justify-end items-center bg-black border border-black even:bg-gray-800 even:border even:border-black text-white print:bg-gray-100 print:even:bg-gray-200 print:text-black print:border-gray-200 print:even:border-gray-300 print:border' key={index} style={{ width: `${percentageWidth}%` }}>
            <span className='text-xl pr-1'>{t.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGraph;
