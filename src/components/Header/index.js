import React from "react"
import Container from "../Container"
import Content from "./Content"
import ProfilePicture from "./ProfilePicture"
import styled from "styled-components"
import SectionWrapper from "../SectionWrapper"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding-top: 0rem;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
  }


`

const Header = () => {
  return (
    <Container>
      <SectionWrapper id="home">
        <HeaderWrapper>
          <Content />
          <ProfilePicture />
        </HeaderWrapper>
      </SectionWrapper>
    </Container>
  )
}

export default Header;
