import React from 'react';
import styled from 'styled-components';
import DashBoardHeader from '../DashBoardHeader';
import DashNav from '../DashNavs';
import TreasuryStep1 from './TreasuryStep1';

const TreasuryPlan1 = () => {
  return (
    <Container>
      <Wrapper>
        <DashNav />
        <Cont>
          <Wrap>
            <DashBoardHeader />
            <TreasuryStep1 />
          </Wrap>
        </Cont>
      </Wrapper>
    </Container>
  );
};

export default TreasuryPlan1;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Cont = styled.div`
  width: 82%;
  height: 100%auto;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  height: 100%;
  display: flex;
  background-color: #fafcff;
  font-family: work sans;
  @media screen and (max-width: 500px) {
    /* background: white; */
  }
`;
