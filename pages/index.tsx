import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'
import denormalizeExperience from '../lib/data/normalizr/denormalizr/experience'
import Summary from '../lib/data/summary.mdx';
import SkillsGraph from '../components/skillsGraph';

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
    <div className="">
      <Head>
        <title>{`Michael Nigh - Resume - ${moment().format('YYYY-MM-DD')}`}</title>
      </Head>
      <main className="m-auto max-w-4xl space-y-16 pt-8 pb-12 print:p-8">
        <div className='flex'>
          <div className='grow'>
            <h1 className='text-4xl font-bold w-max m-auto'>
              Michael Nigh
            </h1>
            <div className='text-lg w-max m-auto'>
              contact@mnigh.com
            </div>
          </div>
          <div className='flex grow-0 items-end space-x-1'>
            <span>github</span>
            <span>linkedin</span>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold uppercase'>Summary</h2>
          <div className='pl-4 space-y-2'>
            <Summary />
          </div>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold uppercase'>Skills</h2>
          <div className='pl-4'>
            <SkillsGraph tags={tags} />
          </div>
        </div>
        <div className='print:break-after-page'/>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold uppercase'>Experience</h2>
          {experiences.map(e =>
            <div key={e.id} className="space-y-2 print:break-inside-avoid">
              <h2 className="text-2xl font-bold">{e.title}</h2>
              <div className='pl-4 space-y-2' dangerouslySetInnerHTML={{ __html: e.summaryHtml}}/>
              {e.projects.length > 0 &&
              <div className='space-y-2 pl-4'>
                <h3 className='text-xl font-bold'>Projects</h3>
                {e.projects.map(p => 
                <div key={p.id} className='space-y-2 pl-4 print:break-inside-avoid'>
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <div className='pl-4 space-y-2' dangerouslySetInnerHTML={{ __html: p.summaryHtml }}/>
                </div>
                )}
              </div>}
            </div>
          )}
        </div>
        <div className='print:break-after-page'/>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold uppercase'>Education</h2>
          <div className='space-y-2'>
            <h3 className='text-xl font-bold'>San Jose State University</h3>
            <p className='pl-4'>Bachelor of Science - Computer Science</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
