import moment from 'moment';
import Image from "next/image";
import * as svgPaths from '../../../lib/data/experiences/tags/icons';
import { Project as ProjectType } from "../../../lib/data/experiences/index.types"

export const Projects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <>
      {projects.length > 0 &&
      <div sx={{ pl: 3, '& > * + *': { mt: 4 }}}>
        <h4 sx={{ mt: 4 }}>Projects</h4>
        {projects.map(p => 
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
    </>
  )
}
