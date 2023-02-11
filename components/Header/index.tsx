import * as svgPaths from '../../lib/data/experiences/tags/icons';
import Image from "next/image"

export const Header = () => {
  return (
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
  )
}
