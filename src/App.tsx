import React, { useEffect } from "react";
import denormalizeExperience from "./lib/data/normalizr/denormalizr/experience";
import { data } from "./lib/data";

import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { generateTooltips } from "./lib/util/tooltip";

const App: React.FC = () => {
  useEffect(() => {
    generateTooltips();
  }, []);

  const { entities, result } = data;
  const experiences = result.map((k) => denormalizeExperience(k, entities));
  const tags = entities.tags
    ? Object.keys(entities.tags).map((id) => entities.tags[id])
    : [];

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

export default App;
