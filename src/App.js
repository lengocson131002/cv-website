import React from "react"
import styled from "styled-components"
import Contact from "./components/Contact"
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Modal from "./components/Modal"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
const AppStyled = styled.div`
  position: relative;
`;

const App = () => {
  return (
    <AppStyled>
      <Navbar />
      <Container>
        <Header />
        <Projects />
        <Resume />
        <Contact />
      </Container>
      <Footer />
      <Modal />
    </AppStyled>
  )
}

export default App
