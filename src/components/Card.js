import styled from "styled-components"

const Card = styled.div`
  position: relative;

  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.shadow_1};

  &::before {
    transition: all 0.4s;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.background.background_1};
    z-index: -1;
  }
  &::after {
    transition: all 0.4s;
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.background.background_2};
    z-index: -1;
  }

  &:hover {
    &::before {
      opacity: 0;
    }

    &::after {
      opacity: 1;
    }
  }
`

export default Card
