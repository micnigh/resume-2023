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
    <div>
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
        p: [3, 2],
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
            }}>
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
              ml: [4, 3],
            },
            position: [null, 'absolute'],
            right: [null, 0],
            bottom: [null, 0],
            '.social-icon': {
              display: 'inline-block',
              width: ['2rem', '1.5rem'],
              height: 'auto',
            },
            '@media print': {
              position: 'absolute',
              right: 0,
              bottom: 0,
              '& > * + *': {
                ml: 3,
              },
              '.social-icon': {
                width: '1.75rem',
              }
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
        <div sx={{
          '& > * + *': {
            mt: 2,
          }
        }}>
          <h2>Summary</h2>
          <div sx={{
            pl: 3,
            '& > * + *': {
              mt: 2,
            }
          }}>
            <Summary />
          </div>
        </div>
        <div sx={{
          '& > * + *': {
            mt: 3,
          },
          '@media print': {
            breakAfter: 'page',
          }
        }}>
          <h2>Skills</h2>
          <div sx={{ pl: 3 }}>
            <SkillsGraph tags={tags} />
          </div>
        </div>
        <div sx={{ '& > * + *': { mt: 2 }}}>
          <h2>Experience</h2>
          <div sx={{ '& > * + *': { mt: 5 }}}>
            {experiences.map(e =>
              <div sx={{
                '@media print': { breakInside: 'avoid' },
                '& > * + *': { mt: 3 },
              }} key={e.id}>
                <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: ['wrap', 'nowrap'], '& > * + *': { ml: [3, 4], mt: [3, 0] }, '@media print': { flexWrap: 'nowrap', '& > * + *': { ml: 4, mt: 0 }}}}>
                  <h4 sx={{ flexGrow: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden', width: ['100%', 'auto'], '@media print': { width: 'auto' } }}>{e.title}</h4>
                  {(e.portfolio || e.icons.length > 0) &&
                  <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', '& > * + *':{ ml: 2 }}}>
                    {e.portfolio &&
                    <a sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }} href={e.portfolio.link} target='_blank'>
                      <Image sx={{ maxHeight: '2rem' }} src={svgPaths.Chain} alt={e.portfolio.hoverTitle} width={24} height={24} title={e.portfolio.hoverTitle} />
                    </a>}
                    {e.icons.map((i, iIndex) => {
                      const t = e.tags.find(t => t.name === i);
                      return svgPaths[t.name] && (
                        <Image key={iIndex} sx={{ maxHeight: '2rem' }} src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                      )
                    })}
                  </div>}
                  <div sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: [e.icons.length > 0 ? 'right' : 'left', 'right'], whiteSpace: 'nowrap', alignContent: 'end', '@media print': { justifyContent: 'right' } }}>{e.start && `${moment(e.start).format('YYYY-MM')} to ${e.start && !e.end ? 'present' : moment(e.end).format('YYYY-MM')}`}</div>
                </div>
                <div sx={{ pl: 3, '& > * + *': { mt: 2 }}} dangerouslySetInnerHTML={{ __html: e.summaryHtml}}/>
                {e.projects.length > 0 &&
                <div sx={{ pl: 3, '& > * + *': { mt: 4 }}}>
                  <h4 sx={{ mt: 4 }}>Projects</h4>
                  {e.projects.map(p => 
                  <div key={p.id} sx={{ pl: 3,
                    '@media print': { breakInside: 'avoid' },
                    '& > * + *': { mt: 2 },
                  }}>
                    <div sx={{ display: 'flex', flexWrap: ['wrap', 'nowrap'], flexDirection: 'row', '& > * + *': { ml: [3, 4], mt: [3, 0] }, '@media print': { flexWrap: 'nowrap', '& > * + *': { ml: 4, mt: 0 } }}}>
                      <h5 sx={{ flexGrow: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden', width: ['100%', 'auto'], '@media print': { width: 'auto'} }}>{p.title}</h5>
                      {(p.portfolio || p.icons.length > 0) &&
                      <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', '& > * + *': { ml: 2 }}}>
                        {p.portfolio &&
                        <a sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }} href={p.portfolio.link} target='_blank'>
                          <Image sx={{ maxHeight: '2rem' }} src={svgPaths.Chain} alt={p.portfolio.hoverTitle} width={24} height={24} title={p.portfolio.hoverTitle} />
                        </a>}
                        {p.icons.map((i, iIndex) => {
                          const t = p.tags.find(t => t.name === i);
                          return svgPaths[t.name] && (
                            <Image key={iIndex} sx={{ maxHeight: '2rem' }} src={svgPaths[t.name]} alt={t.name} width={24} height={24} title={t.name} />
                          )
                        })}
                      </div>}
                      <div sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: [p.icons.length > 0 ? 'right' : 'left', 'right'], alignContent: 'end', flexGrow: 1, whiteSpace: 'nowrap', '@media print': { justifyContent: 'right' }}}>{p.start && `${moment(p.start).format('YYYY-MM')} to ${p.start && !p.end ? 'present' : moment(p.end).format('YYYY-MM')}`}</div>
                    </div>
                    <div sx={{ pl: 3, '& > * + *': { mt: 2 }}} dangerouslySetInnerHTML={{ __html: p.summaryHtml }}/>
                  </div>
                  )}
                </div>}
              </div>
            )}
          </div>
        </div>
        <div sx={{ '@media print': { breakAfter: 'page' }}}/>
        <div sx={{ '& > * + *': { mt: 2 }}}>
          <h2>Education</h2>
          <div sx={{ '& > * + *': { mt: 2 }}}>
            <div sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'baseline' }}>
              <h4 sx={{ flexGrow: 0, width: ['100%', 'auto'], '@media print': { width: 'auto' } }} >San Jose State University</h4>
              <div sx={{ flexGrow: 1, pl: 0, textAlign: ['left', 'right'], mt: [3, 0], ml: [3, 0], '@media print': { textAlign: 'right', mt: 0, ml: 0 } }}>2004-08 to 2009-12</div>
            </div>
            <p sx={{ pl: 3 }}>Bachelor of Science - Computer Science</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
