import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from '../../images/avatar.png';
import * as yup from 'yup';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import ProgressBar from '../ProgressBar';

const Step2Comp = () => {
  const { parentid, childid, plan } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [childData, setChildData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
    console.log(data);
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

  const schema = yup.object().shape({
    amount: yup.number().required('This field is reequired'),
    duration: yup.string().required('This field is reequired'),
    start: yup.date().required('This field is required'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    console.log(data);
    const { amount, duration, start } = data;

    localStorage.setItem('plan_details', JSON.stringify(data));

    navigate(`/thirdearliplan/${parentid}/${childid}/${plan}`);
  });
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
              <IconAndBack to={`/firstearliplan/${parentid}/${childid}/${plan}`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateText>Create An Earli Saving Plan</CreateText>
            </CreateHeader>
            <MiddleComp>
              <ProgressContianer>
                <ProgressText>Step 2 of 3</ProgressText>
                <LineCont>
                  <Line></Line>
                  <Line></Line>
                </LineCont>
              </ProgressContianer>
              <InputContainer onSubmit={submit}>
                <InputContWrapper>
                  <InputHead>Amount and Duration</InputHead>
                  <InputLabel>
                    <Label>How much Daily?</Label>
                    <Input
                      type="number"
                      placeholder="Input Daily Amount"
                      {...register('amount')}
                    />
                    <Error>{errors?.amount?.message}</Error>
                  </InputLabel>

                  <InputLabel>
                    <Label>Date of Birth</Label>
                    <Input type="date" {...register('start')} />
                    <Error>{errors?.start?.message}</Error>
                  </InputLabel>
                  <InputLabel>
                    <Label>Duration</Label>
                    <Select {...register('duration')}>
                      <option>6 Months</option>
                      <option>5 Months</option>
                      <option>4 Months</option>
                      <option>3 Months</option>
                      <option>2 Months</option>
                      <option>1 Months</option>
                    </Select>
                    <Error>{errors?.duration?.message}</Error>
                  </InputLabel>
                  <Button>Next</Button>
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default Step2Comp;

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

const Button = styled.button`
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
  height: 40px;
  font-size: 12px;
  color: gray;
  font-family: work sans;
  option {
    /* font-size: 13px;
    color: gray;
    font-family: work sans; */
  }
`;
const Input = styled.input`
  width: 95%;
  padding: 0 10px;
  border: none;
  outline: 1px solid lightgray;
  border-radius: 5px;
  height: 40px;
  ::placeholder {
    font-size: 11px;
    color: gray;
    font-family: work sans;
  }
`;
const Label = styled.div`
  width: 100%;
  justify-content: flex-start;
  font-size: 11px;
  margin-bottom: 7px;
`;
const InputLabel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;
const InputHead = styled.div`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0;
`;
const InputContWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InputContainer = styled.form`
  width: 100%;
  display: flex;
  height: 400px;
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
  height: 600px;
  display: flex;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
