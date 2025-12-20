import React, { useMemo } from 'react';
import { type Tag } from '../../../lib/data/experiences/index.types';
import { parseDuration } from '../../../lib/util/dates';
import { SKILLS_TO_DISPLAY } from '../../../lib/constants/skills';

type SkillsGraphProps = {
  tags: Tag[];
};

export const SkillsGraph: React.FC<SkillsGraphProps> = ({ tags }) => {
  // Memoize the filtered tags to avoid recalculating on every render
  const displayTags = useMemo(() => {
    return SKILLS_TO_DISPLAY.map((name) =>
      tags.find((t) => t.name === name)
    ).filter((t): t is Tag => t !== undefined);
  }, [tags]);

  // Memoize the max duration calculation
  const maxDurationMs = useMemo(() => {
    if (displayTags.length === 0) return 1;
    const maxDuration = displayTags.reduce((max, tag) => {
      const tagDuration = parseDuration(tag.duration);
      const maxDuration = parseDuration(max.duration);
      return tagDuration > maxDuration ? tag : max;
    }).duration;
    return parseDuration(maxDuration);
  }, [displayTags]);

  return (
    <div className="space-y-px">
      {displayTags.map((t, index) => {
        const normalizedDuration = parseDuration(t.duration) / maxDurationMs;
        const percentageWidth = Math.floor(normalizedDuration * 100);
        return (
          <div
            className="flex justify-end items-center bg-black text-white print:bg-gray-200 print:text-black print:mb-1 print:border-r-2"
            key={index}
            style={{ width: `${percentageWidth}%` }}
          >
            <span className="font-capture-it text-lg md:text-xl leading-7 md:leading-8 pr-1">
              {t.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGraph;
