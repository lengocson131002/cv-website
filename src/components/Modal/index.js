import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalProvider";
import Video from "./Video";

const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.background};
  backdrop-filter: blur(2px);
  z-index: 999;

  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
`;
const ModalWrapper = styled.div`

  background: ${({ theme }) => theme.background.background_1};
  box-shadow: ${({ theme }) => theme.shadow.shadow_1};

  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 100rem;
  height: 80vh;
  max-height: 60rem ;
  overflow: auto;
  transform: translate(-50%, -50%);

  border-radius: 10px;
  padding: 5rem;
  overflow: auto;

  .buttonClose {
    position: absolute;
    border: none;
    right: 2rem;
    top: 2rem;
    box-shadow: ${({ theme }) => theme.shadow.shadow_1};
    border-radius: 50%;
    padding: 1rem;
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text_dark};
    cursor: pointer;
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const ProjectName = styled.p`
  font-size: 2rem;
  /* text-transform: uppercase; */
  color: ${({ theme }) => theme.color.primary};
  font-weight: 500;
  margin-bottom: 2rem;
`
const ProjectDescription = styled.p`
  font-size: 1.5rem;
  border-bottom: 1px solid #000;
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  white-space: pre-wrap;
`

const ProjectImg = styled.div`
  text-align: center;
  & img {
    border-radius: 5px;
    width: 80%;
    margin-bottom: 1rem;
  }
  & p {
    font-size: 1.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`

const Modal = ({ children }) => {

  const { context, closeModal, openModal } = useContext(ModalContext);

  const { project } = context;



  return (
    <ModalOverLay isOpen={context.isOpen} onClick={closeModal}>
      <ModalWrapper onClick={(e) => { e.stopPropagation() }}>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDescription>{project.description}</ProjectDescription>
        {
          project.imgs && project.imgs.map(img => (
            <ProjectImg>
              <img src={img.path} alt="" />
              <p>{img.caption}</p>
            </ProjectImg>
          ))
        }
        {project.video && (
          <Video
            path={project.video.path}
            caption={project.video.caption} />
        )}
        <button className="buttonClose" onClick={closeModal} >
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </ModalWrapper>
    </ModalOverLay>
  )
}
export default Modal;