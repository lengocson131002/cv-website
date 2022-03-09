import React, { useEffect } from "react"
import styled from "styled-components"
import Card from "../Card"
import avt from "../../asset/avt.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const PictureWrapper = styled(Card)`
  width: 50rem;
  height: 40rem;
  position: relative;

  @media (max-width: 1200px) {
    margin-top: 8rem;
  }

  & img {
    position: absolute;
    width: 95%;
    bottom: 0;
    right: 1rem;
  }
`

const ProfilePicture = () => {

  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);


  return (
    <PictureWrapper data-aos="fade-left">
      <img src={avt} />
    </PictureWrapper>
  )
}

export default ProfilePicture
