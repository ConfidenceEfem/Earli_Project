import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {CopyToClipboard} from "react-copy-to-clipboard"
import { AiOutlineInfoCircle, AiOutlineLeft } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa";
import { BsDashCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import img from "../../images/avatar.png";
import { useParams, useNavigate } from "react-router-dom";
import { NoIcon } from './../../AllIcons';
import axios from "axios";
import moment from "moment";

const KoloOverviewComp = () => {
  const { savingsid,parentid, childid } = useParams();

  const navigate = useNavigate()

  const [savings, setSavings] = useState();

  const fetchSavingsData = async () => {
    const mainLink = "https://earlifinance.herokuapp.com";

    const res = await axios.get(`${mainLink}/savings/${savingsid}`);
    setSavings(res?.data?.data);
    console.log(res);
  };

  useEffect(() => {
    fetchSavingsData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <BackComp>
          <IconAndText
          onClick={()=>{
            navigate(`/dashaccount/${parentid}/${childid}`)
          }}
          >
            <BackIcon />
            <IconText>Back</IconText>
          </IconAndText>
        </BackComp>
        <CardComp>
          <CardCompWrapper>
            <LeftCardComp>
              <SavedCard>
                <SavingsCardWrapper>
                  <SavingsHeader>
                    <IconAndKoloText>
                      <IconCircle>
                        <KoloIcon />
                      </IconCircle>
                      <KoloText>{savings?.plan}</KoloText>
                    </IconAndKoloText>
                    <InfoIcon />
                  </SavingsHeader>
                  <SavingsAmounts>
                    <LabelAndAmount>
                      <Label>Saved</Label>
                      <Amount>N{savings?.balance}</Amount>
                    </LabelAndAmount>
                    <LabelAndAmount>
                      <Label>Interest</Label>
                      <Amount style={{ fontSize: "13px" }}>9% p.a</Amount>
                    </LabelAndAmount>
                  </SavingsAmounts>
                  <SavingsButton>
                    <ButtonComp style={{ marginRight: "10px" }}>
                      <BsDashCircle size="15px" />
                         <ButtonText>Withdraw Savings </ButtonText>                     
                    </ButtonComp>
                    <ButtonComp
                      style={{
                        width: "130px",
                        backgroundColor: "rgba(255,105,180,0.15)",
                        color: "red",
                      }}
                    >
                      <IoIosCloseCircleOutline size="15px" />
                      <ButtonText>Cancel Plan</ButtonText>
                    </ButtonComp>
                  </SavingsButton>
                </SavingsCardWrapper>
              </SavedCard>
              <SavedCard1>
                <SavingsCardWrapper>
                  <SavingsHeader>
                    <KoloText style={{ marginLeft: "0px" }}>Details</KoloText>
                  </SavingsHeader>
                  <DetailAccountCard>
                    <DetailData>
                      <GrayAcc>Account</GrayAcc>
                      <ImageandName>
                        <ChildImage src={savings?.childId?.image} />
                        <ChildName>{`${savings?.childId?.lastname} ${savings?.childId?.firstname}`}</ChildName>
                      </ImageandName>
                    </DetailData>
                    <DurationMonth>
                      <GrayAcc>Duration</GrayAcc>
                      <Month>{savings?.duration}</Month>
                    </DurationMonth>
                  </DetailAccountCard>
                  <LabelAndDate>
                    <DateLabel>Start date</DateLabel>
                    <TheDate>
                    
                      {moment(savings?.startDate).format("DD MM yy")}
                      </TheDate>
                  </LabelAndDate>
                  <LabelAndDate>
                    <DateLabel>End date</DateLabel>
                    <TheDate>
                      {moment(savings?.endDate).format("DD MM yy")}
                      </TheDate>
                  </LabelAndDate>
                  <LabelAndDate>
                    <DateLabel>Status</DateLabel>
                    <TheDate>{savings?.status}</TheDate>
                  </LabelAndDate>
                </SavingsCardWrapper>
              </SavedCard1>
            </LeftCardComp>
            <RightCardComp>
              <TransactionHolder>
                <TransactionWrapper>
                  <TransactionHeading>
                    <TransHeading>Transaction History</TransHeading>
                  </TransactionHeading>
                  <TransactionBody>

                    {savings?.savingsTransaction?.length > 0

                      ? savings?.savingsTransaction?.map((el) => {
                          return (
                            <TransactionCard>
                              <TransactionDetails>
                                {/* <TransactionImage src={avatar} /> */}
                                <TransactionNameDetail>
                                  <TransactionName>Money Added</TransactionName>
                                  <TranDetail>
                                    {`**** **** **** ${savings?.card?.last4} was debited`}
                                  </TranDetail>
                                </TransactionNameDetail>
                              </TransactionDetails>
                              <AmountDate>
                                <TransAmount>{`+N${el?.amount}`}</TransAmount>
                                <TransDate>{el?.createdAt}</TransDate>
                              </AmountDate>
                            </TransactionCard>
                          );
                        })
                      : (
                          <MiddleBody>
                            <NoIcon />
                            <NoHeadText>No Charge Made Yet</NoHeadText>
                            <SubTextHold>
                              We have not made any transaction yet.
                            </SubTextHold>
                          </MiddleBody>
                      )}
                  </TransactionBody>
                </TransactionWrapper>
              </TransactionHolder>
            </RightCardComp>
          </CardCompWrapper>
        </CardComp>
      </Wrapper>
    </Container>
  );
};

export default KoloOverviewComp;

const TheDate = styled.div`
  font-weight: 600;
  font-size: 13px;
`;
const DateLabel = styled.div`
  font-size: 12px;
  color: lightgray;
  margin-bottom: 7px;
  align-items: center;
  font-weight: 500;
  display: flex;
  flex: 1;
`;
const LabelAndDate = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;
const Month = styled.div`
  font-weight: 600;
  font-size: 13px;
`;
const ChildName = styled.div`
  font-weight: 600;
  font-size: 13px;
`;
const ChildImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 50%;
`;
const ImageandName = styled.div`
  display: flex;
  align-items: center;
`;
const GrayAcc = styled.div`
  font-size: 12px;
  color: lightgray;
  margin-bottom: 7px;
  font-weight: 500;
`;
const DurationMonth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const DetailData = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
`;
const DetailAccountCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`;
const TransHeading = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

const TransDate = styled.div`
  font-size: 13px;
  color: gray;
`;

const TransAmount = styled.div`
  color: #7b69dd;
  font-size: 15px;
  font-weight: 450;
  margin-bottom: 8px;
`;

const TranDetail = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const TransactionName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TransactionNameDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TransactionImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: green;
  display: flex;
  align-items: center;
  object-fit: cover;
  margin-right: 10px;
`;

const AmountDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const TransactionDetails = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionCard = styled.div`
  padding: 20px 0;
  /* border-top: 1px solid lightgray; */
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionBody = styled.div`
  // padding: 20px 0; 
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SeeAll = styled.div`
  font-size: 17px;
  font-family: 450;
  color: #7b69dd;
`;

const TransactionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 10%;
  border-bottom: 1px solid lightgray;
`;

const TransactionWrapper = styled.div`
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionHolder = styled.div`
  height: 100%;
  width: 460px;
  // background-color: green;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width:1396px){
    width: 420px;
  }
  @media screen and (max-width:1281px){
    width: 390px;
  }
  @media screen and (max-width:1118px){
    width: 360px;
  }
  @media screen and (max-width:1064px){
    height: 550px;
    margin-bottom: 30px;
  }
  @media screen and (max-width:600px){
   width: 100%;
  }
`;

const ButtonText = styled.div`
  font-size: 12px;
  margin-left: 7px;
  font-weight: 500;
`;
const ButtonComp = styled.div`
  width: 170px;
  cursor: pointer;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7b69dd;
  background: rgba(123, 105, 221, 0.15);
  transition: all 460ms;
  border-radius: 4px;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width:1196px){
    width: 150px;
  }
  @media screen and (max-width:600px){
    width: 170px;
  }
`;
const Amount = styled.div`
  font-size: 25px;
  font-weight: 700;
`;
const Label = styled.div`
  margin-bottom: 8px;
  color: gray;
  font-size: 12px;
  font-weight: 450;
`;
const LabelAndAmount = styled.div``;
const KoloText = styled.div`
  font-size: 17px;
  font-weight: 700;
  margin-left: 8px;
`;
const KoloIcon = styled(FaPiggyBank)`
  color: red;
`;
const IconCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SavingsButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  @media screen and (max-width: 400px){
    width: 100%;
  }
`;
const SavingsAmounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
  width: 90%;
  @media screen and (max-width: 400px){
    width: 97%;
  }
`;
const InfoIcon = styled(AiOutlineInfoCircle)`
  color: #7b69dd;
  font-size: 25px;
  cursor: pointer;
`;
const IconAndKoloText = styled.div`
  display: flex;
  align-items: center;
`;
const SavingsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgray;
`;
const SavingsCardWrapper = styled.div`
width: 90%;
height: 95%;
display:flex;
flex-direction:column;
align-items: center;
`;
const SavedCard1 = styled.div`
width: 510px;
display: flex;
  height: 290px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media screen and (max-width:1444px){
    width: 480px;
  }
  @media screen and (max-width:1239px){
    width: 450px;
  }
  @media screen and (max-width:1196px){
    width: 430px;
  }
  @media screen and (max-width:1155px){
    width: 400px;
  }
  @media screen and (max-width:600px){
    width: 100%;
  }
`;
const SavedCard = styled.div`
  width: 510px;
  display: flex;
  height: 250px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 15px 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media screen and (max-width:1444px){
    width: 480px;
  }
  @media screen and (max-width:1239px){
    width: 450px;
  }
  @media screen and (max-width:1196px){
    width: 430px;
  }
  @media screen and (max-width:1155px){
    width: 400px;
  }
  @media screen and (max-width:600px){
    width: 100%;
  }
`;
const RightCardComp = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width:600px){
    width: 100%;
   }
`;
const LeftCardComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
   @media screen and (max-width:600px){
    width: 100%;
  }
`;
const CardCompWrapper = styled.div`
  display: flex;
  width: 90%;

  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 1337px){
    width: 94%;
  }

`;
const IconText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const BackIcon = styled(AiOutlineLeft)`
  margin-right: 5px;
`;
const IconAndText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const CardComp = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  height: 740px;
  @media screen and (max-width: 1050px){
    height: auto;
   
  }
`;
const BackComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  height: auto;
`;

const SubTextHold = styled.div`
  width: 330px;
  text-align: center;
  font-size: 14px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  line-height: 24px;

  @media screen and (max-width: 375px) {
    width: 90%;
    text-align: center;
  }
`;
const NoHeadText = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 15px 0;
`;const MiddleBody = styled.div`
// width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 80px;
justify-content: center;
`;
const ChildrenHeading = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px lightgray solid;
  margin-bottom: 20px;
`;