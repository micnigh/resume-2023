import React, { memo } from 'react';
import { type Project as ProjectType } from '../../../lib/data/experiences/index.types';
import { ExperienceItem } from '../../shared/ExperienceItem';

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects: React.FC<ProjectsProps> = memo(function Projects({
  projects,
}) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="pl-3 space-y-4">
      <h4 className="mt-4">Projects</h4>
      {projects.map((p) => (
        <div key={p.id} className="pl-3">
          <ExperienceItem
            item={p}
            headingLevel="h5"
            dateRangeClassName="print:justify-end"
            containerClassName="print:break-inside-avoid space-y-2"
          />
        </div>
      ))}
    </div>
  );
});
