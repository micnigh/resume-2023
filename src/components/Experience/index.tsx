import React, { memo } from 'react';
import { type Experience as ExperienceType } from '../../lib/data/experiences/index.types';
import { Projects } from './Projects';
import { ExperienceItem } from '../shared/ExperienceItem';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = memo(function Experience({
  experiences,
}) {
  return (
    <div className="space-y-2">
      <h2>Experience</h2>
      <div className="space-y-5">
        {experiences.map((e) => (
          <div className="print:break-inside-avoid space-y-3" key={e.id}>
            <ExperienceItem
              item={e}
              headingLevel="h4"
              containerClassName="space-y-3"
            />
            <Projects projects={e.projects} />
          </div>
        ))}
      </div>
    </div>
  );
});
