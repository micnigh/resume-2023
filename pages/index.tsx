import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import moment from 'moment'
import denormalizeExperience from '../lib/data/normalizr/denormalizr/experience'

import { Header } from '../components/Header'
import { Summary } from '../components/Summary'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Education } from '../components/Education'

export const getStaticProps: GetStaticProps<Awaited<ReturnType<Awaited<typeof import('../lib/data')>['getExperiences']>>> = async (_context) => {
  const data = await (await import('../lib/data')).getExperiences();
  return {
    props: JSON.parse(JSON.stringify(data)) as typeof data, // remove undefined - next.js does not allow it
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { entities } = props;
  const experiences = Object.keys(entities.experiences).map(k => denormalizeExperience(k, entities));
  const tags = Object.keys(entities.tags).map(id => entities.tags[id]);

  return (
    <div>
      <Head>
        <title>{`Michael Nigh - Resume - ${moment.utc().format('YYYY-MM-DD')}`}</title>
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <main sx={{
        maxWidth: '56rem',
        m: 'auto',
        p: 3,
        pt: 4,
        '& > * + *': {
          mt: 5,
        },
        '@media print': {
          p: 4,
        },
      }}>
        <Header/>
        <Summary/>
        <Skills tags={tags}/>
        <Experience experiences={experiences}/>
        <div sx={{ '@media print': { breakAfter: 'page' }}}/>
        <Education/>
      </main>
    </div>
  )
}

export default Home
