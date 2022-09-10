import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrFormNext } from 'react-icons/gr';
import earli from '../images/eali.png';
import freedom from '../images/freedom.png';
import kolo from '../images/kolo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SavingsPage = ({ parentid, childid }) => {
  console.log(parentid, childid);

  const navigate = useNavigate();
  const [savingsData, setSavingsData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/onechild/${childid}`);
    console.log(res?.data?.data);
    setSavingsData(res?.data?.data?.savings);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LastCard>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
          <SavingsHeading>Create New Savings Plan</SavingsHeading>
          <SavingsCardHolder>
            <SavingsCard
              bg="#fff6de"
              to={`/firstearliplan/${parentid}/${childid}/Earli`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  {/* <EarliIcon /> */}
                  <IconImage src={earli} />

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
              to={`/firstearliplan/${parentid}/${childid}/Freedom`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={freedom} />
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
              to={`/firstearliplan/${parentid}/${childid}/Kolo`}
            >
              <SavingsCardWrapper>
                <IconAndDetails>
                  <IconImage src={kolo} />
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
      <CreateSavingsPlan
      style=
      {{
        '@media (max-width: 450px)': {
          display:"flex",
          height: "500px",
          boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        },
       
       
      }}
      >
        <SavingsPlanWrapper>
          <SavingsHeading>Current Savings Plan</SavingsHeading>
          <CurrentCardHold>
            {savingsData.length > 0 ? (
              savingsData?.map((props, i) =>
                i <= 3 ? (
                  <CurrentCard key={props?._id}>
                    <CurrentCardWrapper>
                      <CurrentPlan>
                        <CurrentIconCircle>
                          {props?.plan === 'Earli' ? (
                            <CurrentIcon src={earli} />
                          ) : props?.plan === 'Kolo'||'kolo' ? (
                            <CurrentIcon src={kolo} />
                          ) : props?.plan === 'Freedom' ? (
                            <CurrentIcon src={freedom} />
                          ) : null}
                        </CurrentIconCircle>
                        <CurrentMainPlan>
                          <PlanHead>Plan</PlanHead>
                          <PlanAmount>{props.plan}</PlanAmount>
                        </CurrentMainPlan>
                      </CurrentPlan>
                      <CurrentSaved>
                        <PlanHead>Saved</PlanHead>
                        <PlanAmount>N{(props.balance/100).toFixed(2)}</PlanAmount>
                      </CurrentSaved>
                      <CurrentDuration>
                        <PlanHead>Durations</PlanHead>
                        <PlanAmount>{props.duration}</PlanAmount>
                      </CurrentDuration>
                      <NextIcon1
                        color="#7b69dd"
                        onClick={() => {
                          navigate(`/kolooverview/${parentid}/${props._id}`);
                        }}
                      />
                    </CurrentCardWrapper>
                  </CurrentCard>
                ) : null
              )
            ) : (
              <NoPlan>You do not have any savings plan</NoPlan>
            )}
          </CurrentCardHold>
        </SavingsPlanWrapper>
      </CreateSavingsPlan >
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
const NoPlan = styled.div`
  font-size: 13px;
  color: lightgray;
  text-align: center;
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
  /* opacity: 0.6; */
  background: ${({ bg }) => bg};
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
  /* background: red; */
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
  align-items: center;
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
  height: 420px;
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
    width: 90%;
  }
  @media screen and (max-width: 500px){
    width: 100%;
    box-shadow: none;
    height: auto;
    padding: 20px 0;
  }

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
  height:100%;
  // padding-bottom: 40px;
  justify-content: space-between;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  // margin-bottom: 40px;
  @media screen and (max-width: 950px){
    justify-content: center;
    // background-color: red;
  }
`;
