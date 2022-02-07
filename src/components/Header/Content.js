import React from "react"
import styled from "styled-components"
import { FaPython } from "react-icons/fa"
import Card from "../Card"
import ListContactIcons from "../ListContactIcons"
import { ABOUT_ME, JOB } from "../../constants"
import { SiMicrosoftoffice } from "react-icons/si"

const ContentWrapper = styled.div`
  width: 58%;
  height: 100%;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 3rem 5rem 0 5rem;
  }

  .subtitle {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 5rem;
    letter-spacing: -1px;
    color: #fff;

    & > span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  .job {
    display: block;
    font-size: 4.8rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 4rem;
  }
  .description {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 3rem;
    margin-bottom: 9rem;
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    p {
      padding-left: 1rem;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 200;
      margin-bottom: 1rem;
    }

    ul {
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
    }
  }
`

const Content = () => {
  return (
    <ContentWrapper>
      <div className="top">
        <p className="subtitle">Welcome to my website</p>
        <h1>
          Hi, I'm <span>Le Thi Hoa</span>
        </h1>
        <span className="job">{JOB}</span>
        <p className="description">
          {ABOUT_ME}
        </p>
      </div>
      <div className="bottom">
        <div>
          <p>Find me with</p>
          <ListContactIcons />
        </div>
        <div>
          <p>Best skill on</p>
          <ul className="best">
            <li>
              <Card>
                <FaPython />
              </Card>
            </li>
            <li>
              <Card>
                <SiMicrosoftoffice />
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </ContentWrapper>
  )
}

export default Content
