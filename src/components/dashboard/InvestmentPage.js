import React from 'react';
import styled from 'styled-components';
import { MdNavigateNext } from 'react-icons/md';
import treasury from '../images/treasury.png';
import stocks from '../images/stocks.png';
import { useNavigate } from 'react-router-dom';

const InvestmentPage = ({ parentid, childid }) => {
  const navigate = useNavigate();
  return (
    <LastCard>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
          <SavingsHeading>Create New Investment Plan</SavingsHeading>
          <SavingsCardHolder>
            <SavingsCard
              bg="#d7eeff"
              onClick={() => {
                navigate(`/${parentid}/${childid}/Treasury Bills`);
              }}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={treasury} />
                  <DetailsCont>
                    <DetailsTitle>Treasury Bills</DetailsTitle>
                    <MainDetails>
                      Lend money to the Government and get a return after your
                      specified period
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
            <SavingsCard
              bg="#fff6de"
              onClick={() => {
                navigate(`/${parentid}/${childid}/Stocks`);
              }}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={stocks} />
                  <DetailsCont>
                    <DetailsTitle>Stocks</DetailsTitle>
                    <MainDetails>
                      Buy stocks from top Nigerian companies long as long as you
                      want at 20% per anum
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
            <SavingsCard
              bg="#d7eeff"
              onClick={() => {
                navigate(`/${parentid}/${childid}/Real Estate`);
              }}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={treasury} />
                  <DetailsCont>
                    <DetailsTitle>Real Estate</DetailsTitle>
                    <MainDetails>
                      Invest in treasury bills for as long as you want at 20%
                      per anum
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
            <SavingsCard bg="#fff6de">
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={stocks} />
                  <DetailsCont>
                    <DetailsTitle>Shares</DetailsTitle>
                    <MainDetails>
                      Buy stocks from top Nigerian companies as long as you want
                      at 20% per anum
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
          </SavingsCardHolder>
        </SavingsPlanWrapper>
      </CreateSavingsPlan>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
          <SavingsHeading>Current Investment Plans</SavingsHeading>
          <CurrentCardHold>
            <CurrentCard>
              <CurrentCardWrapper>
                <CurrentPlan>
                  <CurrentIconCircle>
                    <CurrentIcon src={treasury} />
                  </CurrentIconCircle>
                  <CurrentMainPlan>
                    <PlanHead>Plan</PlanHead>
                    <PlanAmount>Treasury Bills</PlanAmount>
                  </CurrentMainPlan>
                </CurrentPlan>
                <CurrentSaved>
                  <PlanHead>Total Investment</PlanHead>
                  <PlanAmount>N239,000</PlanAmount>
                </CurrentSaved>
                <CurrentDuration>
                  <PlanHead>Return</PlanHead>
                  <PlanAmount>
                    10% -{' '}
                    <span style={{ fontSize: '11px', color: 'lightgray' }}>
                      91 Days
                    </span>
                  </PlanAmount>
                </CurrentDuration>
                <NextIcon1 color="#7b69dd" />
              </CurrentCardWrapper>
            </CurrentCard>
          </CurrentCardHold>
        </SavingsPlanWrapper>
      </CreateSavingsPlan>
    </LastCard>
  );
};

export default InvestmentPage;

const PlanAmount = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-top: 5px;
`;
const PlanHead = styled.div`
  font-size: 11px;
  color: lightgray;
`;

const CurrentMainPlan = styled.div`
  display: flex;
  flex-direction: column;
`;
const CurrentIconCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #daecda;
  margin-right: 20px;
`;
const CurrentDuration = styled.div``;
const CurrentSaved = styled.div``;

const CurrentPlan = styled.div`
  display: flex;
`;

const CurrentIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const CurrentCardWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentCard = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
  margin: 10px 0;
`;
const CurrentCardHold = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

`;
const MainDetails = styled.div`
  font-size: 11px;
  line-height: 20px;
  span {
    font-weight: bold;
    font-size: 10px;
  }
`;

const DetailsTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: 500px){
    margin-bottom: 5px;
  }
`;

const DetailsCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  object-fit: contain;
`;

const NextIcon1 = styled(MdNavigateNext)`
  font-size: 22px;
  cursor: pointer;
  color: red;
`;
const NextIcon = styled(MdNavigateNext)`
  font-size: 22px;
  cursor: pointer;
`;
const IconAndDetails = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  @media screen and (max-width: 600px){
    width: 90%;
  }
`;

const SavingsCardWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SavingsCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 95px;
  background-color: ${({ bg }) => bg};
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 500px){
    height: 110px;
  }
`;

const SavingsCardHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const SavingsHeading = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.1px;
  margin-bottom: 10px;
  display: flex;
`;
const SavingsPlanWrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;
const CreateSavingsPlan = styled.div`
  display: flex;
  width: 48%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  height: 530px;
  justify-content: center;
  @media screen and (max-width: 1000px){
    width: 410px;
    // background-color: red;
  }
  @media screen and (max-width: 980px){
    width: 395px;
   
  }
  @media screen and (max-width: 970px){
    width: 385px;
  }
  @media screen and (max-width: 950px){
    // width: 380px;
    width: 90%;
    margin: 15px 0;
  }
  @media screen and (max-width: 910px){
    // width: 380px;
  
    // background-color: red;
  }
  @media screen and (max-width: 600px){
    width: 96%;
  }
  @media screen and (max-width: 500px){
    height: 570px;
  }
`;
// const Navs = styled.div`
//   font-size: 15px;
//   font-weight: 700;
//   padding-bottom: 10px;
//   margin-right: 50px;
//   cursor: pointer;
//   transition: all 350ms;
//   border-bottom: 5px solid #7b69dd;
// `;
const LastCard = styled.div`
width: 100%;
height:auto;
justify-content: space-between;
display: flex;
flex-wrap: wrap;
  @media screen and (max-width: 950px){
    justify-content: center;
  
  }
`;
