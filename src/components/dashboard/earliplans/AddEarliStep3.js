import React from 'react';
import styled from 'styled-components';
import DashBoardHeader from '../DashBoardHeader';
import DashNav from '../DashNavs';
import NewCardModa from './NewCardModa';
import Step3Comp from './Step3Comp';

const AddEarliStep3 = () => {
  const [showPayment, setShowPayment] = React.useState(false);

  return (
    <Container>
      {showPayment ? (
        <NewCardModa
          showPayment={showPayment}
          setShowPayment={setShowPayment}
        />
      ) : null}

      <Wrapper>
        <DashNav />
        <Cont>
          <Wrap>
            <DashBoardHeader />

            {/* Step3Comp is the main component that you can choose payment method*/}
            <Step3Comp
              showPayment={showPayment}
              setShowPayment={setShowPayment}
            />
          </Wrap>
        </Cont>
      </Wrapper>
    </Container>
  );
};

export default AddEarliStep3;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Cont = styled.div`
  width: 82%;
  height: 100%;
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
    background: white;
  }
`;
