import React from "react"
import styled from "styled-components"
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { FiLinkedin } from "react-icons/fi"
import Card from "./Card"
import { contacts } from "../constants"

const ListIcons = styled.ul`
  display: flex;
  list-style: none;

  & li {
    padding: 0 1rem;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-5px);
    }

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.text_dark};
    }
    & ${Card} {
      display: flex !important;
      padding: 1.5rem;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;
    }
  }
`
const ListContactIcons = () => {

  const mailTo = "mailto:" + contacts.EMAIL;

  return (
    <ListIcons className="contacts" >
      <li>
        <a href={contacts.GITHUB} target="_blank">
          <Card>
            <AiFillGithub />
          </Card>
        </a>
      </li>
      <li>
        <a href={contacts.LINKEDIN} target="_blank">
          <Card>
            <FiLinkedin />
          </Card>
        </a>
      </li>
      <li>
        <a href={`mailto:${contacts.EMAIL}`} target="_blank" >
          <Card>
            <HiOutlineMail />
          </Card>
        </a>
      </li>
    </ListIcons >
  )
}

export default ListContactIcons
