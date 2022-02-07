import React from "react"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SectionWrapper from "../SectionWrapper"
import SubSectionHeader from "../SubSectionHeader"
import ListProjects from "./ListProjects"

const Project = () => {
  return (
    <Container>
      <SectionWrapper id="projects">
        <SubSectionHeader center={true}>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</SubSectionHeader>
        <SectionHeader center={true}>My Projects</SectionHeader>
        <ListProjects />
      </SectionWrapper>
    </Container>
  )
}

export default Project
