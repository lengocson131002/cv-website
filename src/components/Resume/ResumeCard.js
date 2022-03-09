import React from "react"
import styled from "styled-components"
import Card from "../Card"
import { v4 as uuid } from 'uuid'
const ResumeCardStyled = styled.div`
  position: relative;

  ${Card} {
    width: 100%;
    margin-left: 4rem;
    padding: 4rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &::before,
  &::after {
    content: "";
    background: #17191c;
    top: 50%;
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    width: 3.5rem;
    height: 5px;
    left: 0.5rem;
  }
  &::after {
    transition: all 0.3s;
    border-radius: 50%;
    left: -1.3rem;
    width: 1rem;
    height: 1rem;
    border: 5px solid #17191c;
    background: ${({ theme }) => theme.color.background};
  }

  &:hover {
    &::after {
      background: ${({ theme }) => theme.color.primary};
    }
  }

  .position {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .organization,
  .time {
    font-size: 1.5rem;
    font-weight: 300;
  }

  .organization {
    display: inline-block;
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.color.primary};
  }

  .descriptions {
    font-size: 1.6rem;
    margin-top: 3rem;
    border-top: 1px solid #010101;
    padding-top: 2rem;
    font-weight: 300;
    padding-left: 2rem;

    & li:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

const ResumeCard = ({ position, organization, time, descriptions, subtitle }) => {
  return (
    <ResumeCardStyled>
      <Card>
        <h2 className="position">{position}</h2>
        <span className="organization">{organization}</span>
        <span className="time">({time})</span>
        {subtitle && <span className="organization">{subtitle}</span>}
        {
          descriptions &&
          <ul className="descriptions">
            {descriptions.map(des => (
              <li key={uuid()} className="description-item">{des}</li>
            ))}
          </ul>

        }
      </Card>
    </ResumeCardStyled>
  )
}

export default ResumeCard
