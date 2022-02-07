import styled from "styled-components"

const SubSectionHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.subtitle};
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? "center" : "left")};
`
export default SubSectionHeader
