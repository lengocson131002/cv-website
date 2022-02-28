import Logo from "../Logo"
import NavList from "./NavList"
import styled from "styled-components"

const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  transition: all 0.3s;

  position: sticky;
  top: 0;
  left: 0;

  /* position: ${props => (props.sticky ? "fixed" : "relative")}; */
  z-index: 10;

  background: #212428de;
  backdrop-filter: blur(15px);
  box-shadow: ${({ theme }) => theme.shadow.shadow_1};

`

const Navbar = () => {

  return (
    <NavbarWrapper>
      <Logo />
      <NavList />
    </NavbarWrapper>
  )
}

export default Navbar
