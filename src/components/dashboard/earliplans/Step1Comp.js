import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import ProgressBar from '../ProgressBar';
import img from '../../images/avatar.png';
import Swal from 'sweetalert2';

const Step1Comp = () => {
  const { parentid, childid } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [childData, setChildData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
    // console.log(data);
  };

  const ChildData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  useEffect(() => {
    fetchData();
    ChildData();
  }, []);

  const [paymentMethod, setPaymentMethod] = useState('Daily');

  const submitPayment = () => {
    if (paymentMethod === '') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Please Choose A Duration`,
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      localStorage.setItem('frequency', paymentMethod);
      navigate(`/secondearliplan/${parentid}/${childid}`);
    }
  };

  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={childData?.image} />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>
              {childData?.firstname}
              {childData?.lastname}
            </AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/dashaccount/${parentid}/${childid}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create An Earli Saving Plan</CreateText>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 1 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer>
                <InputContWrapper>
                  <InputHead>
                    <MainInputHead>
                      {' '}
                      At what Frequency will you like to save?
                    </MainInputHead>
                    <SubInputText>
                      Savings account of this child will be credited at this
                      frequency
                    </SubInputText>
                  </InputHead>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="Daily"
                      label="Daily"
                      value="Daily"
                      checked={paymentMethod === 'Daily'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>Daily</Label>
                  </InputLabel>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="Weekly"
                      value="Weekly"
                      label="Weekly"
                      checked={paymentMethod === 'Weekly'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>Weekly</Label>
                  </InputLabel>
                  <InputLabel>
                    <Input
                      type="radio"
                      id="Monthly"
                      label="Monthly"
                      value="Monthly"
                      checked={paymentMethod === 'Monthly'}
                      onChange={(e) => {
                        setPaymentMethod(e.target.value);
                      }}
                    />
                    <Label>Monthly</Label>
                  </InputLabel>

                  <Button
                    onClick={() => {
                      submitPayment();
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

export default Step1Comp;

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
const Select = styled.select`
  width: 100%;
  padding: 0 10px;
  border: none;
  outline: 1px solid lightgray;
  border-radius: 5px;
  font-family: work sans;
  height: 40px;
  option {
    font-size: 11px;
    color: gray;
    font-family: work sans;
  }
`;
const Input = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* border: none; */
  /* outline: 1px solid lightgray; */
  border-radius: 5px;
  height: 40px;

  ::placeholder {
    font-size: 11px;
    background: purple;
    font-family: work sans;
  }
`;
const Label = styled.div`
  width: 100%;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 500;
  margin-left: 7px;
`;
const InputLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  /* margin: px 0; */
`;
const MainInputHead = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const SubInputText = styled.div`
  width: 85%;
  text-align: center;
  justify-content: center;
  font-size: 12px;
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
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  height: 330px;
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
  width: 380px;
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
  height: 520px;
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
