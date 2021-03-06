import React, { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import ProgressBar from '../ProgressBar';
import img from '../../images/avatar.png';
import master from '../../images/mastercard.png';
import visa from '../../images/visa.png';

const Step3Comp = ({ showPayment, setShowPayment }) => {
  const { parentid } = useParams();

  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('Daily');

  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={img} />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>Adebimpe Adesanya</AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/home/${parentid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create An Earli Saving Plan</CreateText>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 3 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                  <Line></Line>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer>
                <InputContWrapper>
                  <InputHead>
                    <MainInputHead> Payment Method </MainInputHead>
                    <SubInputText>Choose a Payment Method</SubInputText>
                  </InputHead>
                  {/* This is where you would map all your card you have added and choose the one you want to use*/}
                  <PaymentCard bg="#f2f0fc">
                    <PaymentCardWrapper>
                      <PayNoAndName fl>
                        <PayNo>**** *** ** 543</PayNo>
                        <PayName>Chioma Adesanya</PayName>
                      </PayNoAndName>
                      <PayNoAndName>
                        <PayImage src={master} />
                        <PayExpire>Exp: 02/2026</PayExpire>
                      </PayNoAndName>
                    </PaymentCardWrapper>
                  </PaymentCard>
                  <PaymentCard bg="#f9f9f9">
                    <PaymentCardWrapper>
                      <PayNoAndName fl>
                        <PayNo>**** *** ** 543</PayNo>
                        <PayName>Chioma Adesanya</PayName>
                      </PayNoAndName>
                      <PayNoAndName>
                        <PayImage1 src={visa} />
                        <PayExpire>Exp: 02/2026</PayExpire>
                      </PayNoAndName>
                    </PaymentCardWrapper>
                  </PaymentCard>
                  <PlusIconAndText>
                    <PlusIcon />
                    <AddPay
                      // this is to trigger the add card page
                      onClick={() => {
                        setShowPayment(!showPayment);
                      }}
                    >
                      Add New Payment Method
                    </AddPay>
                  </PlusIconAndText>
                  <Button
                    onClick={() => {
                      console.log(paymentMethod);
                    }}
                  >
                    Next
                  </Button>
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default Step3Comp;

const AddPay = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
  cursor: pointer;
`;
const PlusIcon = styled(FiPlus)`
  font-size: 18px;
  font-weight: bold;
`;
const PlusIconAndText = styled.div`
  display: flex;
  align-items: center;
  color: #7b69dd;
  margin-bottom: 20px;
`;
const PayExpire = styled.div`
  font-size: 9px;
  color: gray;
`;
const PayImage1 = styled.img`
  width: 50px;
  height: 30px;
  object-fit: cover;
  margin-bottom: 13px;
`;
const PayImage = styled.img`
  width: 30px;
  height: 25px;
  object-fit: contain;
  margin-bottom: 13px;
`;
const PayName = styled.div`
  margin-top: 13px;
`;
const PayNo = styled.div``;
const PayNoAndName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ fl }) => (fl ? 'flex-start' : 'flex-end')};
  font-size: 11px;
  font-weight: 500;
`;
const PaymentCardWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PaymentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: ${({ bg }) => bg};
`;
const AccountName = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const AccountNo = styled.div`
  text-transform: uppercase;
  color: lightgray;
  font-size: 13px;
  margin-bottom: 5px;
`;
const ChildAccountName = styled.div`
  flex-direction: column;
`;
const ChildImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: red;
  margin-right: 15px;
`;
const ChildAccountCard = styled.div`
  width: 550px;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Button = styled.div`
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  align-items: center;
  color: white;
  background-color: #7b69dd;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: all 550ms;
  margin-top: 25px;
  :hover {
    transform: scale(1.02);
  }
`;

const MainInputHead = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const SubInputText = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
`;
const InputHead = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
`;
const InputContWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  height: 380px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
`;
const Line = styled.div`
  width: 33.4%;
  background: #7b69dd;
  height: 100%;
  border-radius: 10px;
`;
const LineCont = styled.div`
  width: 100%;
  display: flex;
  background-color: whitesmoke;
  border-radius: 10px;
  height: 3px;
`;
const ProgressText = styled.div`
  font-size: 12px;
  color: gray;
  margin-bottom: 10px;
`;
const ProgressContianer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
`;

const Error = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: red;
  margin-top: 5px;
  width: 100%;
`;

const Icon = styled(AiOutlineLeft)`
  margin-right: 5px;
`;
const MiddleComp = styled.div`
  width: 340px;
  /* height: 500px; */
`;

const CreateText = styled.div`
  display: flex;
  flex: 2;
  font-size: 16px;
  font-weight: 600;
`;
const IconAndBack = styled(Link)`
  display: flex;
  flex: 1;
  font-size: 13px;
  align-items: center;
  font-weight: 500;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
const CreateHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const AddChildWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

const AddChildCard = styled.div`
  width: 550px;
  height: 580px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
