import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import * as yup from 'yup';
import { AiOutlineInfoCircle, AiOutlineLeft } from 'react-icons/ai';
import { FaPiggyBank } from 'react-icons/fa';
import { BsDashCircle } from 'react-icons/bs';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const KoloOverviewComp = () => {
  return (
    <Container>
      <Wrapper>
        <BackComp>
          <IconAndText>
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
                      <KoloText>Kolo</KoloText>
                    </IconAndKoloText>
                    <InfoIcon />
                  </SavingsHeader>
                  <SavingsAmounts>
                    <LabelAndAmount>
                      <Label>Saved</Label>
                      <Amount>N290,000.00</Amount>
                    </LabelAndAmount>
                    <LabelAndAmount>
                      <Label>Interest</Label>
                      <Amount style={{ fontSize: '13px' }}>9% p.a</Amount>
                    </LabelAndAmount>
                  </SavingsAmounts>
                  <SavingsButton>
                    <ButtonComp style={{ marginRight: '10px' }}>
                      <BsDashCircle size="15px" />
                      <ButtonText>Withdraw Savings</ButtonText>
                    </ButtonComp>
                    <ButtonComp
                      style={{ width: "130px", backgroundColor: 'rgba(255,105,180,0.15)', color: "red" }}
                    >
                      <IoIosCloseCircleOutline size="15px" />
                      <ButtonText>Cancel Plan</ButtonText>
                    </ButtonComp>
                  </SavingsButton>
                </SavingsCardWrapper>
              </SavedCard>
            </LeftCardComp>
            <RightCardComp>
            <TransactionHolder>
              <TransactionWrapper>
                <TransactionHeading>
                  <TransHeading>Transaction History</TransHeading>
                </TransactionHeading>
                <TransactionBody>
                    <TransactionCard>
                      <TransactionDetails>
                        {/* <TransactionImage src={avatar} /> */}
                        <TransactionNameDetail>
                          <TransactionName>Money Added</TransactionName>
                          <TranDetail>**** **** **** 3456 was debited</TranDetail>
                        </TransactionNameDetail>
                      </TransactionDetails>
                      <AmountDate>
                        <TransAmount>+N40,999.00</TransAmount>
                        <TransDate>Jun 12</TransDate>
                      </AmountDate>
                    </TransactionCard>
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
  /* padding: 20px 0; */
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
  height: 15%;
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
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
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
`;
const SavingsAmounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0;
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
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;
const SavingsCardWrapper = styled.div`
width: 90%;
height: 90%:
display:flex;
flex-direction:column;
align-items: center;
`;
const SavedCard = styled.div`
  width: 100%;
  display: flex;
  height:250px;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const RightCardComp = styled.div`
  display: flex;
  width: 41%;
  align-items: center;
  /* background: blue; */
`;
const LeftCardComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  align-items: center;
  /* background: red; */
`;
const CardCompWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  /* background: purple; */
  justify-content: space-between;
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
  height: 500px;
`;
const BackComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
