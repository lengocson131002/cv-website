import React from "react"
import styled from "styled-components"
import Card from "../Card"
import ListContactIcons from "../ListContactIcons"
import { avt, JOB } from "../../constants"
import { contacts } from "../../constants"
const Block = styled.div`
  display: flex;
  gap: 3rem;
  padding: 3rem;
  height: 45rem;
  max-width: 100rem;
  width: 100%;
  flex: 1;
  font-size: 1.6rem;
  border-radius: 10px;
  margin: 0 auto;

  box-shadow: ${({ theme }) => theme.shadow.shadow_1};

  .contact-image {
    overflow: hidden;
    border-radius: inherit;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: end;

    & img {
      transition: all 0.3s;
      width: 60%;
      height: 100%;
      object-fit: cover;

      @media(max-width: 768px) {
        width: 100%;
      }
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
  .contact-content {

      padding: 2rem 0;

    .contact-name {
    font-size: 3rem;
    color: ${({ theme }) => theme.color.text_light};
    margin-bottom: 1rem;
    }
    .contact-position {
      display: block;
      font-size: 2rem;
      color: ${({ theme }) => theme.color.primary};
      margin-bottom: 3rem;
      text-transform: uppercase;
    }

    .contact-description {
      margin-bottom: 2rem;
    }

    .contact-phone > span,
    .contact-address > span {
      color: ${({ theme }) => theme.color.text_light};
      position: relative;
      display: inline-block;
      margin-bottom: 1rem;
      transition: all 0.3s;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: ${({ theme }) => theme.color.primary};
        transform-origin: bottom right;
        transition: transform 0.6s ease;
        transform: scaleX(0);
      }

      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }

      &:hover::before {
        transform-origin: bottom left;
        transform: scaleX(1);
      }
    }
    .contact-address {
      margin-bottom: 2rem;
    }
  }
`

const ContactBlock = () => {
  return (
    <Block>
      <Card className="contact-image">
        <img src={avt} alt="" />
      </Card>
      <div className="contact-content">
        <h3 className="contact-name">LE THI HOA</h3>
        <span className="contact-position">{JOB}</span>
        <p className="contact-phone">
          Phone: <span>+0372066464</span>
        </p>
        <p className="contact-address">
          Address: <span>{contacts.ADDRESS}</span>
        </p>
        <ListContactIcons />
      </div>
    </Block>
  )
}

export default ContactBlock
