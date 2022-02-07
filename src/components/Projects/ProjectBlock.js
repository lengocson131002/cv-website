import React, { useContext } from "react"
import styled from "styled-components"
import projImg from "../../asset/project.webp"
import Card from "../Card"
import { BsArrowRight } from "react-icons/bs"
import { ModalContext } from "../../context/ModalProvider"

const Block = styled(Card)`
  padding: 3rem;

  .thumbnail {
    width: 100%;
    height: 27rem;
    overflow: hidden;
    border-radius: inherit;
    margin-bottom: 4rem;

    & img {
      transition: all 0.3s;
      height: 100%;
      width: 100%;
    }

    &:hover {
      & img {
        transform: scale(1.1);
      }
    }
  }

  & > .field {
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.subtitle};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  & > .project-name {
    display: block;
    font-size: 2.4rem;
    font-weight: 400;
    transition: all 0.3s;
    cursor: pointer;
    color: ${({ theme }) => theme.color.text_dark};

    &:hover {
      color: ${({ theme }) => theme.color.subtitle};

      .icon-arrow {
        transform: scale(1);
        transform-origin: 0 50%;
      }
    }
    .icon-arrow {
      transition: all 0.3s;
      margin-left: 1rem;
      vertical-align: middle;
      transform: scale(0);
    }
  }
`

const ProjectBlock = ({ project }) => {

  const { openModal } = useContext(ModalContext);

  return (
    <Block>
      <div className="thumbnail">
        <img src={project.profile} alt="" />
      </div>
      <p className="field">{project.field}</p>
      <h3 className="project-name" onClick={() => { openModal(project) }}>
        <span>{project.name}</span>
        <BsArrowRight className="icon-arrow" />
      </h3>
    </Block>
  )
}

export default ProjectBlock
