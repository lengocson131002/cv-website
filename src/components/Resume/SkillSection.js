import React from "react"
import styled from "styled-components"
import Card from "../Card"
import { v4 as uuid } from 'uuid'

const Section = styled(Card)`
  border-radius: 10px;
  padding: 4rem;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

const Header = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;

  box-shadow: ${({ theme }) => theme.shadow.shadow_1};
  display: inline-block;
  padding: 2rem 4rem;

  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.color.background};

  border-radius: inherit;
`

const ListSkill = styled.div`
  margin-top: 8rem;
`

const SkillSection = ({ header, children }) => {
  return (
    <Section>
      <Header>{header}</Header>
      <ListSkill>{children}</ListSkill>
    </Section>
  )
}

export default SkillSection
