import React, { useEffect } from 'react'
import denormalizeExperience from './lib/data/normalizr/denormalizr/experience'
import { getExperiences } from './lib/data'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { generateTooltips } from './lib/util/tooltip'

// Load data directly at module level
let data: any = null
let loadError: Error | null = null

// Initialize data synchronously
getExperiences()
  .then(experiences => {
    data = experiences
  })
  .catch(error => {
    loadError = error
    console.error('Failed to load data:', error)
  })

const App: React.FC = () => {
  if (loadError) {
    return <div>Failed to load data</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  useEffect(() => {
    generateTooltips()
  }, [])

  const { entities, result } = data
  const experiences = result.map(k => denormalizeExperience(k, entities))
  const tags = entities.tags ? Object.keys(entities.tags).map(id => entities.tags[id]) : []

  return (
    <div className="font-special">
      <main
        className="max-w-4xl mx-auto p-4 pt-8 space-y-5 print:p-4"
      >
        <Header />
        <Summary />
        <Skills tags={tags} />
        <Experience experiences={experiences} />
        <div className="print:break-after-page" />
        <Education />
      </main>
    </div>
  )
}

export default App
