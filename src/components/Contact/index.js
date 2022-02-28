import React from "react"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SectionWrapper from "../SectionWrapper"
import SubSectionHeader from "../SubSectionHeader"
import ContactBlock from "./ContactBlock"
import styled from "styled-components"

const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Contact = () => {
  return (
    <Container>
      <SectionWrapper id="contact">
        <SubSectionHeader>Contact</SubSectionHeader>
        <SectionHeader>Contact With Me</SectionHeader>
        <ContactBlock className="block-left" />
      </SectionWrapper>
    </Container>
  )
}

export default Contact
