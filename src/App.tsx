import React, { useEffect, useState } from 'react'
import denormalizeExperience from './lib/data/normalizr/denormalizr/experience'
import { getExperiences } from './lib/data'

import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'

const App: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const experiences = await getExperiences()
        setData(experiences)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Failed to load data</div>
  }

  const { entities } = data
  const experiences = Object.keys(entities.experiences).map(k => denormalizeExperience(k, entities))
  const tags = Object.keys(entities.tags).map(id => entities.tags[id])

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
