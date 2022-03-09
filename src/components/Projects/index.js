import React, { useEffect } from "react"
import Container from "../Container"
import SectionHeader from "../SectionHeader"
import SectionWrapper from "../SectionWrapper"
import SubSectionHeader from "../SubSectionHeader"
import ListProjects from "./ListProjects"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <SectionWrapper id="projects">
        <SubSectionHeader center={true}>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</SubSectionHeader>
        <SectionHeader center={true}>My Projects</SectionHeader>
        <ListProjects data-aos="fade-up" />
      </SectionWrapper>
    </Container>
  )
}

export default Project
