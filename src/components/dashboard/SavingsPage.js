import React from 'react';
import styled from 'styled-components';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { BsFillBarChartFill, BsBarChartFill } from 'react-icons/bs';
import { GrFormNext } from 'react-icons/gr';
import { FaPiggyBank } from 'react-icons/fa';
import avatar from '../images/avatar.png';
import { FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EarliIcon } from '../AllIcons';

const SavingsPage = ({ parentid, childid }) => {
  console.log(parentid, childid);
  return (
    <LastCard>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
          <SavingsHeading>Create New Savings Plan</SavingsHeading>
          <SavingsCardHolder>
            <SavingsCard
              bg="#fff6de"
              to={`/firstearliplan/${parentid}/${childid}`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  {/* <EarliIcon /> */}
                  <DetailsCont>
                    <DetailsTitle>Earli</DetailsTitle>
                    <MainDetails>
                      Save short term for urgent needs:
                      <span>3-6 Months</span> at 10% per anum
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
            <SavingsCard
              bg="#d7eeff"
              to={`/firstearliplan/${parentid}/${childid}`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage />
                  <DetailsCont>
                    <DetailsTitle>Freedom</DetailsTitle>
                    <MainDetails>
                      Save long term for the future:
                      <span>3 Months-5 Years</span> at 10% per anum
                    </MainDetails>
                  </DetailsCont>
                </IconAndDetails>
                <NextIcon />
              </SavingsCardWrapper>
            </SavingsCard>
            <SavingsCard
              bg="#d7eeff"
              to={`/firstearliplan/${parentid}/${childid}`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage />
                  <DetailsCont>
                    <DetailsTitle>Kolo</DetailsTitle>
                    <MainDetails>
                      Lock up some money short term:
                      <span>30 Days-2 Years at 10% per anum</span>
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
          <SavingsHeading>Create New Savings Plan</SavingsHeading>
          <CurrentCardHold>
            <CurrentCard>
              <CurrentCardWrapper>
                <CurrentPlan>
                  <CurrentIconCircle>
                    <CurrentIcon />
                  </CurrentIconCircle>
                  <CurrentMainPlan>
                    <PlanHead>Plan</PlanHead>
                    <PlanAmount>Kolo</PlanAmount>
                  </CurrentMainPlan>
                </CurrentPlan>
                <CurrentSaved>
                  <PlanHead>Saved</PlanHead>
                  <PlanAmount>N239,000</PlanAmount>
                </CurrentSaved>
                <CurrentDuration>
                  <PlanHead>Durations</PlanHead>
                  <PlanAmount>6 Months</PlanAmount>
                </CurrentDuration>
                <NextIcon1 color="#7b69dd" />
              </CurrentCardWrapper>
            </CurrentCard>
            <CurrentCard>
              <CurrentCardWrapper>
                <CurrentPlan>
                  <CurrentIconCircle>
                    <CurrentIcon />
                  </CurrentIconCircle>
                  <CurrentMainPlan>
                    <PlanHead>Plan</PlanHead>
                    <PlanAmount>Freedom</PlanAmount>
                  </CurrentMainPlan>
                </CurrentPlan>
                <CurrentSaved>
                  <PlanHead>Saved</PlanHead>
                  <PlanAmount>N139,000</PlanAmount>
                </CurrentSaved>
                <CurrentDuration>
                  <PlanHead>Durations</PlanHead>
                  <PlanAmount>3 Years</PlanAmount>
                </CurrentDuration>
                <NextIcon1 color="#7b69dd" />
              </CurrentCardWrapper>
            </CurrentCard>
            <CurrentCard>
              <CurrentCardWrapper>
                <CurrentPlan>
                  <CurrentIconCircle>
                    <CurrentIcon />
                  </CurrentIconCircle>
                  <CurrentMainPlan>
                    <PlanHead>Plan</PlanHead>
                    <PlanAmount>Earli</PlanAmount>
                  </CurrentMainPlan>
                </CurrentPlan>
                <CurrentSaved>
                  <PlanHead>Saved</PlanHead>
                  <PlanAmount>N239,000</PlanAmount>
                </CurrentSaved>
                <CurrentDuration>
                  <PlanHead>Durations</PlanHead>
                  <PlanAmount>6 Months</PlanAmount>
                </CurrentDuration>
                <NextIcon1 color="#7b69dd" />
              </CurrentCardWrapper>
            </CurrentCard>
            <CurrentCard>
              <CurrentCardWrapper>
                <CurrentPlan>
                  <CurrentIconCircle>
                    <CurrentIcon />
                  </CurrentIconCircle>
                  <CurrentMainPlan>
                    <PlanHead>Plan</PlanHead>
                    <PlanAmount>Kolo</PlanAmount>
                  </CurrentMainPlan>
                </CurrentPlan>
                <CurrentSaved>
                  <PlanHead>Saved</PlanHead>
                  <PlanAmount>N239,000</PlanAmount>
                </CurrentSaved>
                <CurrentDuration>
                  <PlanHead>Durations</PlanHead>
                  <PlanAmount>6 Months</PlanAmount>
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

export default SavingsPage;

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
  background: red;
  margin-right: 20px;
`;
const CurrentDuration = styled.div``;
const CurrentSaved = styled.div``;

const CurrentPlan = styled.div`
  display: flex;
`;

const CurrentIcon = styled.img``;

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
`;

const DetailsCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconImage = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`;

const NextIcon1 = styled(GrFormNext)`
  font-size: 20px;
  cursor: pointer;
  color: #7b69dd;
`;
const NextIcon = styled(GrFormNext)`
  font-size: 20px;
  cursor: pointer;
`;
const IconAndDetails = styled.div`
  display: flex;
  width: 80%;
`;

const SavingsCardWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SavingsCard = styled(Link)`
  width: 100%;
  display: flex;
  text-decoration: none;
  color: black;
  justify-content: center;
  height: 95px;
  background-color: ${({ bg }) => bg};
  margin: 10px 0;
  border-radius: 5px;
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
  height: 100%;
  justify-content: center;
`;
const Navs = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding-bottom: 10px;
  margin-right: 50px;
  cursor: pointer;
  transition: all 350ms;
  border-bottom: 5px solid #7b69dd;
`;
const LastCard = styled.div`
  width: 100%;
  height: 450px;
  justify-content: space-between;
  display: flex;
`;
