import React from "react"
import styled from "styled-components"
import ProjectBlock from "./ProjectBlock"
import { projects } from "../../constants"
import { v4 as uuid } from 'uuid';
const ListWrapper = styled.div`
  display: grid;
  row-gap: 5rem;
  column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`

const ListProjects = () => {
  return (
    <ListWrapper>
      {
        projects.map(prj => (
          <ProjectBlock
            key={uuid()}
            project={prj}
          />
        ))
      }
    </ListWrapper>
  )
}

export default ListProjects
