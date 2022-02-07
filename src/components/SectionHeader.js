import styled from "styled-components"

const SectionHeader = styled.h2`
  font-size: 6rem;
  font-weight: 600;
  margin-bottom: 5rem;
  text-align: ${({ center }) => (center ? "center" : "left")};

  @media(max-width: 1000px) {
    font-size: 4rem;
  }
`
export default SectionHeader
