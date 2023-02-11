import SummaryMDX from '../../lib/data/summary.mdx';

export const Summary = () => {
  return (
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
        <SummaryMDX />
      </div>
    </div>
  )
}
