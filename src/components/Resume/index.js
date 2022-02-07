import React, { useState } from "react"
import styled from "styled-components"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SectionWrapper from "../SectionWrapper"
import SubSectionHeader from "../SubSectionHeader"
import Education from "./Education"
import Experience from "./Experience"
import PersonalSkills from "./PersonalSkills"
import ResumeTabs from "./ResumeTabs"

const ResumeContainer = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Resume = () => {
  const [tab, setTab] = useState(1)

  const handleChangeTab = tab => {
    setTab(tab)
  }

  return (
    <Container>
      <SectionWrapper id="resume">
        <SubSectionHeader center>2+ Year Experience</SubSectionHeader>
        <SectionHeader center>My Resume</SectionHeader>
        <ResumeContainer>
          <ResumeTabs activeTab={tab} handleChangeTab={handleChangeTab} />

          {tab === 1 && <Education />}
          {tab === 2 && <Experience />}
          {tab === 3 && <PersonalSkills />}
        </ResumeContainer>
      </SectionWrapper>
    </Container>
  )
}

export default Resume
