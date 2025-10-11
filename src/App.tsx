import React, { useEffect } from 'react';
import denormalizeExperience from './lib/data/normalizr/denormalizr/experience';
import { data } from './lib/data';

import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { generateTooltips } from './lib/util/tooltip';
import type { Experience as ExperienceType, Tag } from './lib/data/experiences/index.types';

const App: React.FC = () => {
  useEffect(() => {
    generateTooltips();
  }, []);

  const { entities, result } = data;
  const experiences: ExperienceType[] = result
    .filter((k): k is string => k !== undefined)
    .map((k) => denormalizeExperience(k, entities));
  const tags: Tag[] = entities.tags
    ? Object.keys(entities.tags).map((id) => entities.tags[id]).filter((tag): tag is Tag => tag !== undefined)
    : [];

  return (
    <ErrorBoundary>
      <div className="font-special">
        <main className="max-w-4xl mx-auto p-4 pt-8 space-y-5 print:p-4">
          <Header />
          <Summary />
          <Skills tags={tags} />
          <Experience experiences={experiences} />
          <div className="print:break-after-page" />
          <Education />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;
