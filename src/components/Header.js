import React from 'react';
import styled from 'styled-components';
import logo from './images/earli1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoHold>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </LogoHold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const LogoHold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  height: 40px;
  object-fit: contain;
  @media screen and (max-width: 500px) {
    height: 30px;
  }
  @media screen and (max-width: 380px) {
    width: 80px;
    height: 20px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  margin-bottom: 5px;
  /* position: fixed; */
  /* margin-bottom: 50px; */
  @media screen and (max-width: 450px) {
    height: 70px;
  }
  @media screen and (max-width: 380px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;
