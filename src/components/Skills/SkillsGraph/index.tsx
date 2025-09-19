import moment from 'moment';
import { Tag } from '../../../lib/data/experiences/index.types';

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

  return (
    <div
      className="space-y-px"
    >
      {tags.map((t, index) => {
        let normalizedDuration =
          moment.duration(t.duration).asMilliseconds() /
          moment.duration(maxDuration).asMilliseconds();
        let percentageWidth = Math.floor(normalizedDuration * 100);
        return (
          <div
            className="flex justify-end items-center bg-black text-white print:bg-gray-200 print:text-black print:mb-1 print:border-r-2"
            key={index}
            style={{ width: `${percentageWidth}%` }}
          >
            <span
              className="font-capture-it text-lg md:text-xl leading-7 md:leading-8 pr-1"
            >
              {t.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGraph;
