import React, { useEffect } from "react"
import styled from "styled-components"
import ProjectBlock from "./ProjectBlock"
import { projects } from "../../constants"
import { v4 as uuid } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ListWrapper = styled.div`
  display: grid;
  row-gap: 5rem;
  column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
`

const ListProjects = () => {

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, [])

  return (
    <ListWrapper data-aos="fade-up">
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
