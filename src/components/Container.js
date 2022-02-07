import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1350px;
  padding: 0 1.5rem;

  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 992px) {
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
`

export default Container
