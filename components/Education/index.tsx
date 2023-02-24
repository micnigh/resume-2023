export const Education = () => {
  return (
    <div sx={{ '& > *:not(style) ~ *:not(style)': { mt: 2 }}}>
      <h2>Education</h2>
      <div sx={{ '& > *:not(style) ~ *:not(style)': { mt: 2 }}}>
        <div sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'baseline' }}>
          <h4 sx={{ flexGrow: 0, width: ['100%', 'auto'], '@media print': { width: 'auto' } }} >San Jose State University</h4>
          <div sx={{ flexGrow: 1, pl: 0, textAlign: ['left', 'right'], mt: [3, 0], ml: [3, 0], '@media print': { textAlign: 'right', mt: 0, ml: 0 } }}>2004-08 to 2009-12</div>
        </div>
        <p sx={{ pl: 3 }}>Bachelor of Science - Computer Science</p>
      </div>
    </div>
  )
}
