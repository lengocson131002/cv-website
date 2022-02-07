import React from "react"
import Card from "../Card"
import styled from "styled-components"

const Block = styled(Card)`
  padding: 5rem 6rem;
  cursor: pointer;

  .inner {
    transition: all 0.3s;

    & > div {
      font-size: 5rem;
      color: ${({ theme }) => theme.color.primary};
      margin-bottom: 1rem;
    }

    & > span {
      display: block;
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    & > p {
      font-size: 1.6rem;
      line-height: 2.5rem;
      font-weight: 400;
    }
  }
  &:hover .inner {
    transform: translateY(-2rem);
  }
`

const FeatureBlock = ({ icon, header, description }) => {
  return (
    <Block>
      <div className="inner">
        <div>{icon}</div>
        <span>{header}</span>
        <p>{description}</p>
      </div>
    </Block>
  )
}

export default FeatureBlock
