import moment from 'moment';
import Image from "next/image";
import * as svgPaths from '../../lib/data/experiences/tags/icons';
import { Experience as ExperienceType } from "../../lib/data/experiences/index.types"
import { Projects } from './Projects';

export const Experience = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <div sx={{ '& > *:not(style) ~ *:not(style)': { mt: 2 }}}>
      <h2>Experience</h2>
      <div sx={{ '& > *:not(style) ~ *:not(style)': { mt: 5 }}}>
        {experiences.map(e =>
          <div sx={{
            '@media print': { breakInside: 'avoid' },
            '& > *:not(style) ~ *:not(style)': { mt: 3 },
          }} key={e.id}>
            <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: ['wrap', 'nowrap'], '& > *:not(style) ~ *:not(style)': { ml: [3, 4], mt: [3, 0] }, '@media print': { flexWrap: 'nowrap', '& > *:not(style) ~ *:not(style)': { ml: 4, mt: 0 }}}}>
              <h4 sx={{ flexGrow: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden', width: ['100%', 'auto'], '@media print': { width: 'auto' } }}>{e.title}</h4>
              {(e.portfolio || e.icons.length > 0) &&
              <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', '& > *:not(style) ~ *:not(style)':{ ml: 2 }}}>
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
              <div sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: [e.icons.length > 0 ? 'right' : 'left', 'right'], whiteSpace: 'nowrap', alignContent: 'end', '@media print': { justifyContent: 'right' } }}>{e.start && `${moment.utc(e.start).format('YYYY-MM')} to ${e.start && !e.end ? 'present' : moment.utc(e.end).format('YYYY-MM')}`}</div>
            </div>
            <div sx={{ pl: 3, '& > *:not(style) ~ *:not(style)': { mt: 2 }}} dangerouslySetInnerHTML={{ __html: e.summaryHtml}}/>
            <Projects projects={e.projects}/>
          </div>
        )}
      </div>
    </div>
  )
}
