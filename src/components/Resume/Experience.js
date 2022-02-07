import React from "react"
import ResumeCard from "./ResumeCard"
import ResumeList from "./ResumeList"
import { experiment } from "../../constants"
import { v4 as uuid } from 'uuid'
const Experience = () => {
  return (
    <ResumeList>
      {
        experiment.map(ex => (
          <ResumeCard
            key={uuid()}
            position={ex.position}
            organization={ex.organization}
            time={ex.time}
            descriptions={ex.descriptions}
          />
        ))
      }
    </ResumeList>
  )
}

export default Experience
