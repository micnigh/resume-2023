import { Tag } from "../../lib/data/experiences/index.types"
import SkillsGraph from "./SkillsGraph"

export const Skills = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="space-y-3 print:break-after-page">
      <h2>Skills</h2>
      <div className="pl-3">
        <SkillsGraph tags={tags} />
      </div>
    </div>
  )
}
