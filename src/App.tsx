import React, { useEffect } from 'react';
import { data } from './lib/data';

import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { generateTooltips } from './lib/util/tooltip';

const App: React.FC = () => {
  useEffect(() => {
    generateTooltips();
  }, []);

  // Data is now already denormalized - use it directly!
  const { experiences, tags } = data;

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
