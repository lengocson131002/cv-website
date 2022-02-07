import React from "react"
import ResumeCard from "./ResumeCard"
import ResumeList from "./ResumeList"
import { education } from "../../constants"
import { v4 as uuid } from 'uuid';

const Education = () => {
  return (
    <ResumeList>
      {
        education.map(eduItem => (
          <ResumeCard
            key={uuid()}
            position={eduItem.major}
            organization={eduItem.organization}
            time={eduItem.time}
            descriptions=""
          />
        ))
      }
    </ResumeList>
  )
}

export default Education
