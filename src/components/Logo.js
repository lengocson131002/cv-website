import React from "react"
import styled from "styled-components"
import { avt } from "../constants"

const LogoWrapper = styled.a`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.gray};
  align-items: center;
  text-decoration: none;
  width: fit-content;

  .logo-img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #868e96;
  }
  .logo-name {
    font-weight: bold;
    font-size: 2rem;

    & span:nth-child(2) {
      color: ${({ theme }) => theme.color.primary};
    }

    & span:nth-child(3) {
      color: #74b816;
    }
  }
`

const Logo = () => {
  return (
    <LogoWrapper href="#">
      <div className="logo-img">
        <img src={avt} alt="" />
      </div>
      <div className="logo-name">
        <span>HOA.</span>
        <span>L.</span>
        <span>T</span>
      </div>
    </LogoWrapper>
  )
}

export default Logo
