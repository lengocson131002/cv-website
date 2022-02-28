import React, { useLayoutEffect, useState } from "react"
import styled from "styled-components"
import { nav_items } from "../../constants"

const NavWrapper = styled.ul`
  display: flex;
  list-style: none;

  & li {
    position: relative;
    font-weight: 300;
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    transition: all 0.3s;

    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
  

    &::before {
      content: "";
      position: absolute;
      width: 90%;
      bottom: 0;
      left: 0;
      height: 2px;
      background: ${({ theme }) => theme.color.primary};
      transition: all 0.3s;
      transform-origin: center;
      transform: scaleX(0);
    }

    &:hover,
    &.active {
      &::before {
        transform: scaleX(1);
      }
    }

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.text_dark};
      transition: all 0.3s;
    }

    &:hover a {
      color: ${({ theme }) => theme.color.text_light};
    }
  }

  & .active > a {
    color: ${({ theme }) => theme.color.text_light};
  }
`

const NavList = () => {
  const [activeNav, setActiveNav] = useState(nav_items.HOME)

  useLayoutEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setActiveNav(window.location.hash)
    }

    const handleURLHashChange = () => {
      setActiveNav(window.location.hash)
    }

    window.addEventListener("hashchange", handleURLHashChange)

    return () => {
      window.removeEventListener("hashchange", handleURLHashChange)
    }
  }, [])

  return (
    <NavWrapper>
      <li className={activeNav === nav_items.HOME ? "active" : ""}>
        <a href="#home">Home</a>
      </li>
      <li className={activeNav === nav_items.PROJECTS ? "active" : ""}>
        <a href="#projects">Projects</a>
      </li>
      <li className={activeNav === nav_items.RESUME ? "active" : ""}>
        <a href="#resume">Resume</a>
      </li>
      <li className={activeNav === nav_items.CONTACT ? "active" : ""}>
        <a href="#contact">Contact</a>
      </li>
    </NavWrapper>
  )
}

export default NavList
