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
    <div sx={{
      '& > * + *': {
        mt: '2px',
      }
    }}>
      {tags.map((t, index) => {
        let normalizedDuration = moment.duration(t.duration).asMilliseconds() / moment.duration(maxDuration).asMilliseconds();
        let percentageWidth = Math.floor(normalizedDuration * 100);
        return (
          <div sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            bg: 'black',
            color: 'white',
            fontFamily: 'var(--font-capture-it)',
          }} key={index} style={{ width: `${percentageWidth}%` }}>
            <span sx={{
              fontSize: [3, 4],
              lineHeight: ['1.75rem', '2rem'],
              pr: 1,
            }}>{t.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGraph;
