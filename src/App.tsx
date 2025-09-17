import React, { useEffect, useState } from 'react'
import denormalizeExperience from './lib/data/normalizr/denormalizr/experience'
import { getExperiences } from './lib/data'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { generateTooltips } from './lib/util/tooltip'

const App: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [loadError, setLoadError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        const experiences = await getExperiences()
        setData(experiences)
        setLoadError(null)
      } catch (error) {
        setLoadError(error as Error)
        console.error('Failed to load data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    if (data) {
      generateTooltips()
    }
  }, [data])

  if (loadError) {
    return <div>Failed to load data</div>
  }

  if (isLoading || !data) {
    return <div>Loading...</div>
  }

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
