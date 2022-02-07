import React from "react"
import styled from "styled-components"

const Tabs = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: start;
  background: ${({ theme }) => theme.background.background_1};
  box-shadow: ${({ theme }) => theme.shadow.shadow_1};
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 10rem;

  @media (max-width: 1000px) {
    flex-direction: row;
    width: fit-content;
    position: relative;
    top: 0;
    margin: 0 auto;
  }
`

const Tab = styled.li`
  text-align: center;
  font-size: 1.8rem;
  padding: 3rem;
  cursor: pointer;
  border-radius: inherit;
  transition: all 0.3s;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }

  &.active,
  &:hover {
    background: ${({ theme }) => theme.background.background_1};
    box-shadow: ${({ theme }) => theme.shadow.shadow_1};
  }
`

const ResumeTabs = ({ activeTab = 1, handleChangeTab }) => {
  return (
    <Tabs>
      <Tab onClick={() => handleChangeTab(1)} className={activeTab === 1 ? "active" : ""}>
        Education
      </Tab>
      <Tab onClick={() => handleChangeTab(2)} className={activeTab === 2 ? "active" : ""}>
        Experiences
      </Tab>
      <Tab onClick={() => handleChangeTab(3)} className={activeTab === 3 ? "active" : ""}>
        Personal Skills
      </Tab>
    </Tabs>
  )
}

export default ResumeTabs
