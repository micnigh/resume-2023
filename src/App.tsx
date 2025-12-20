import React, { Suspense } from 'react';
import { getData } from './lib/data';

import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { ErrorBoundary } from './components/shared/ErrorBoundary';

const AppContent: React.FC = () => {
  // Data is now already denormalized - use it directly!
  const { experiences, tags } = getData();

  return (
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
  );
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="font-special">
            <main className="max-w-4xl mx-auto p-4 pt-8">
              <div className="text-center">Loading...</div>
            </main>
          </div>
        }
      >
        <AppContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
