import React from 'react';
import styled from 'styled-components';
import AddChildAccount from './AddChildAccount';
import DashAccountPage from './DashAccountPage';
import DashBoardHeader from './DashBoardHeader';
import UserAccountDash from './UserAccountDash';

const DashWelcome = () => {
  return (
    <Container>
      <Wrapper>
        <DashBoardHeader />
        <DashAccountPage />
        {/* <UserAccountDash/> */}
        {/* <AddChildAccount/> */}
      </Wrapper>
    </Container>
  );
};

export default DashWelcome;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Container = styled.div`
  width: 82%;
  height: 100%auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
