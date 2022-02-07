import React from "react"
import styled from "styled-components"

const BarWrapper = styled.div`
  & .skill-name {
    font-size: 1.4rem;
    font-weight: 300;
  }
`

const Bar = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  height: 8px;
  margin-bottom: 3rem;
  box-shadow: inset 8px 8px 16px #00000075, inset -8px -8px 16px #383e4575;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ value }) => (value ? value + "%" : "100%")};
    border-radius: inherit;
    background: linear-gradient(145deg, #f02981, #c81901);
  }
`

const ProgressBar = ({ name, value }) => {
  return (
    <BarWrapper>
      <p className="skill-name">{name}</p>
      <Bar value={value} />
    </BarWrapper>
  )
}
export default ProgressBar
