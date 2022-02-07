import React from "react"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SubSectionHeader from "../SubSectionHeader"
import ListFeatures from "./ListFeatures"
import SectionWrapper from "../SectionWrapper"

const Features = () => {
  return (
    <Container>
      <SectionWrapper>
        <SubSectionHeader>Features</SubSectionHeader>
        <SectionHeader>What I do</SectionHeader>
        <ListFeatures />
      </SectionWrapper>
    </Container>
  )
}

export default Features
