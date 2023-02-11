import { Tag } from "../../lib/data/experiences/index.types"
import SkillsGraph from "./SkillsGraph"

export const Skills = ({ tags }: { tags: Tag[] }) => {
  return (
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
  )
}