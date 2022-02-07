import React from "react"
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import SkillSection from "./SkillSection"
import { personalSkills } from "../../constants"
import Skill from "./Skill"
import { v4 as uuid } from 'uuid'
const Wrapper = styled.div`
  flex: 1;
`

const PersonalSkills = () => {

  const { skills, languages } = personalSkills;

  return (
    <Wrapper>
      <SkillSection header="Skills">
        {skills && skills.map(skill => (
          <Skill
            key={uuid()}
            name={skill.name}
            description={skill.description} />
        ))}
      </SkillSection>
      <SkillSection header="Languages">
        {languages && languages.map(language => (
          <Skill
            key={uuid()}
            name={language.language}
            description={language.description}
            subSkills={language.subSkills}
          />
        ))}
      </SkillSection>
    </Wrapper>
  )
}

export default PersonalSkills
