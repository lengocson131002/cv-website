import React from 'react';
import SectionWrapper from '../SectionWrapper';
import styled from 'styled-components';
import Logo from '../Logo';

const FooterWrapper = styled.footer`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  
`;
const Footer = () => {
  return <FooterWrapper>
    <Logo />
  </FooterWrapper>;
};

export default Footer;
