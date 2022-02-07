import React from "react"
import styled from "styled-components"
import Card from "../Card"
import avt from "../../asset/avt.png"

const PictureWrapper = styled(Card)`
  width: 50rem;
  height: 40rem;
  position: relative;

  @media (max-width: 1200px) {
    margin-top: 4rem;
  }

  & img {
    position: absolute;
    width: 95%;
    bottom: 0;
    right: 1rem;
  }
`

const ProfilePicture = () => {
  return (
    <PictureWrapper>
      <img src={avt} />
    </PictureWrapper>
  )
}

export default ProfilePicture
