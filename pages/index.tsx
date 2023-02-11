import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'
import denormalizeExperience from '../lib/data/normalizr/denormalizr/experience'
import Summary from '../lib/data/summary.mdx';
import SkillsGraph from '../components/skillsGraph';
import * as svgPaths from '../lib/data/experiences/tags/icons';

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
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>
      <main sx={{
        m: 'auto',
        maxWidth: '56rem',
        '& > * + *': {
          mt: 5,
        },
        '@media print': {
          p: 4,
        },
        '@media (min-width: 540px)': {
          p: 2,
        },
        p: 3,
        pt: 4,
      }}>
        <div sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '& > * + *': {
            mt: 4,
          }
        }}>
          <div sx={{ flexGrow: 1 }}>
            <h1 sx={{
              lineHeight: '1',
              width: 'max-content',
              m: 'auto',
            }} className=''>
              Michael Nigh
            </h1>
            <div sx={{
              fontSize: 3,
              lineHeight: 1.5,
              width: 'max-content',
              m: 'auto',
            }}>
              <a href='mailto:contact@mnigh.com'>contact@mnigh.com</a>
            </div>
          </div>
          <div sx={{
            display: 'flex',
            justifyContent: 'center',
            '& > * + *': {
              ml: 4,
            },
            '@media (min-width: 540px)': {
              position: 'absolute',
              right: 0,
              bottom: 0,
              '& > * + *': {
                ml: 3,
              },
              '.social-icon': {
                width: '1.5rem',
              }
            },
            '.social-icon': {
              // filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
              display: 'inline-block',
              width: '2rem',
              height: 'auto',
            }
          }}>
            <a href='https://github.com/micnigh/' target='_blank'>
              <Image className='social-icon' src={svgPaths.Github} width={24} height={24} alt='Check out my github' title={'Check out my github'} />
            </a>
            <a href='https://www.linkedin.com/in/michaelnigh' target='_blank'>
              <Image className='social-icon' src={svgPaths.LinkedIn} width={24} height={24} alt='Visit my LinkedIn' title={'Visit my LinkedIn'} />
            </a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-4xl uppercase'>Summary</h2>
          <div className='pl-4 space-y-2'>
            <Summary />
          </div>
        </div>
        <div className='space-y-4 print:break-after-page'>
          <h2 className='text-4xl uppercase'>Skills</h2>
          <div className='pl-4'>
            <SkillsGraph tags={tags} />
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-4xl uppercase'>Experience</h2>
          <div className='space-y-12'>
            {experiences.map(e =>
              <div key={e.id} className="space-y-4 print:break-inside-avoid">
                <div className='flex flex-row items-center space-x-6'>
                  <h2 className="text-md sm:text-2xl grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden">{e.title}</h2>
                  {/* >= sm */}
                  {(e.portfolio || e.icons.length > 0) &&
                  <div className='hidden sm:flex sm:flex-row sm:space-x-2 sm:items-center'>
                    {e.portfolio &&
                    <a href={e.portfolio.link} target='_blank'>
                      <Image className='drop-shadow max-h-6' src={svgPaths.Chain} alt={e.portfolio.hoverTitle} width={24} height={24} title={e.portfolio.hoverTitle} />
                    </a>}
                    {e.icons.map((i, iIndex) => {
                      const t = e.tags.find(t => t.name === i);
                      return svgPaths[t.name] && (
                        <Image key={iIndex} className='drop-shadow max-h-6' src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                      )
                    })}
                  </div>}
                  <div className='hidden sm:block grow text-right whitespace-nowrap'>{e.start && `${moment(e.start).format('YYYY-MM')} to ${e.start && !e.end ? 'present' : moment(e.end).format('YYYY-MM')}`}</div>
                </div>
                {/* < sm */}
                {(e.portfolio || e.icons.length > 0 || e.start) &&
                <div className={`sm:hidden space-x-2 flex flex-row pl-4 py-2`}>
                  {(e.portfolio || e.icons.length > 0) ?
                  <>
                    <div className='space-x-2 items-center min-w-min flex flex-row'>
                      {e.portfolio &&
                      <a href={e.portfolio.link} target='_blank'>
                        <Image className='drop-shadow max-h-6' src={svgPaths.Chain} alt={e.portfolio.hoverTitle} width={24} height={24} title={e.portfolio.hoverTitle} />
                      </a>}
                      {e.icons.map((i, iIndex) => {
                        const t = e.tags.find(t => t.name === i);
                        return svgPaths[t.name] && (
                          <Image key={iIndex} className='drop-shadow max-h-6' src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                        )
                      })}
                    </div>
                    <div className='block sm:hidden grow text-right whitespace-nowrap'>{e.start && `${moment(e.start).format('YYYY-MM')} to ${e.start && !e.end ? 'present' : moment(e.end).format('YYYY-MM')}`}</div>
                  </>
                  : <div className='block sm:hidden grow text-left whitespace-nowrap'>{e.start && `${moment(e.start).format('YYYY-MM')} to ${e.start && !e.end ? 'present' : moment(e.end).format('YYYY-MM')}`}</div>}
                </div>}
                <div className='pl-4 space-y-2' dangerouslySetInnerHTML={{ __html: e.summaryHtml}}/>
                {e.projects.length > 0 &&
                <div className='space-y-8 pl-4'>
                  <h3 className='text-lg sm:text-2xl mt-8'>Projects</h3>
                  {e.projects.map(p => 
                  <div key={p.id} className='space-y-2 pl-4 print:break-inside-avoid'>
                    <div className='flex flex-row space-x-6'>
                      <h4 className="text-md sm:text-lg grow-0 whitespace-nowrap text-ellipsis overflow-x-hidden">{p.title}</h4>
                      {/* >= sm */}
                      {(p.portfolio || p.icons.length > 0) &&
                      <div className='hidden sm:flex sm:flex-row sm:space-x-2 sm:items-center'>
                        {p.portfolio &&
                        <a href={p.portfolio.link} target='_blank'>
                          <Image className='drop-shadow max-h-6' src={svgPaths.Chain} alt={p.portfolio.hoverTitle} width={24} height={24} title={p.portfolio.hoverTitle} />
                        </a>}
                        {p.icons.map((i, iIndex) => {
                          const t = p.tags.find(t => t.name === i);
                          return svgPaths[t.name] && (
                            <Image key={iIndex} className='drop-shadow max-h-6' src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                          )
                        })}
                      </div>}
                      <div className='hidden sm:block grow text-right whitespace-nowrap'>{p.start && `${moment(p.start).format('YYYY-MM')} to ${p.start && !p.end ? 'present' : moment(p.end).format('YYYY-MM')}`}</div>
                    </div>
                    {/* < sm */}
                    <div className='sm:hidden flex space-x-2 items-center'>
                      {(p.portfolio || p.icons.length > 0) ?
                      <>
                        <div className='flex flex-row space-x-2 items-center pl-4 py-4'>
                          {p.portfolio &&
                          <a href={p.portfolio.link} target='_blank'>
                            <Image className='drop-shadow max-h-6' src={svgPaths.Chain} alt={p.portfolio.hoverTitle} width={24} height={24} title={p.portfolio.hoverTitle} />
                          </a>}
                          {p.icons.map((i, iIndex) => {
                            const t = p.tags.find(t => t.name === i);
                            return svgPaths[t.name] && (
                              <Image key={iIndex} className='drop-shadow max-h-6' src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                            )
                          })}
                        </div>
                        <div className='grow whitespace-nowrap text-right'>{p.start && `${moment(p.start).format('YYYY-MM')} to ${p.start && !p.end ? 'present' : moment(p.end).format('YYYY-MM')}`}</div>
                      </>
                      : <div className='grow whitespace-nowrap text-left pl-4 py-4'>{p.start && `${moment(p.start).format('YYYY-MM')} to ${p.start && !p.end ? 'present' : moment(p.end).format('YYYY-MM')}`}</div>}
                    </div>
                    <div className='pl-4 space-y-2' dangerouslySetInnerHTML={{ __html: p.summaryHtml }}/>
                  </div>
                  )}
                </div>}
              </div>
            )}
          </div>
        </div>
        <div className='print:break-after-page'/>
        <div className='space-y-2'>
          <h2 className='text-4xl uppercase'>Education</h2>
          <div className='space-y-2'>
            <div className='flex-col space-y-4 sm:space-y-0 sm:flex sm:flex-row items-baseline'>
              <h3 className='grow-0 text-xl'>San Jose State University</h3>
              <div className='grow pl-4 sm:pl-0 sm:text-right'>2004-08 to 2009-12</div>
            </div>
            <p className='pl-4'>Bachelor of Science - Computer Science</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
