import React, { useEffect } from "react"
import Container from "../Container"
import Content from "./Content"
import ProfilePicture from "./ProfilePicture"
import styled from "styled-components"
import SectionWrapper from "../SectionWrapper"
import AOS from "aos"
import "aos/dist/aos.css"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    padding-top: 0rem;
    margin-top: 5rem;
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Header = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <Container>
            <SectionWrapper id="home">
                <HeaderWrapper>
                    <Content data-aos="fade-right" />
                    <ProfilePicture data-aos="fade-left" />
                </HeaderWrapper>
            </SectionWrapper>
        </Container>
    )
}

export default Header
