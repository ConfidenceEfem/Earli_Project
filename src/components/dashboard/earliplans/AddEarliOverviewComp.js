import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import earli from '../../images/eali.png';
import freedom from '../../images/freedom.png';
import kolo from '../../images/kolo.png';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineLeft } from 'react-icons/ai';
import moment from 'moment';

const AddEarliOverviewComp = () => {
  const { parentid, childid, plan } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [childData, setChildData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
    console.log(data);
  };

  const ChildData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  const plan_details = localStorage.getItem('plan_details')
    ? JSON.parse(localStorage.getItem('plan_details'))
    : [];

  const frequency = localStorage.getItem('frequency')
    ? localStorage.getItem('frequency')
    : '';

  useEffect(() => {
    fetchData();
    ChildData();
  }, []);

  const submit = () => {
    if (plan_details && frequency) {
      navigate(`/thirdearliplan/${parentid}/${childid}/${plan}`);
    } else {
      alert('Error');
    }
  };
  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={childData?.image} alt="child img" />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>
              {' '}
              {childData?.firstname}
              {" "}
              {childData?.lastname}{' '}
            </AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack
                to={`/secondearliplan/${parentid}/${childid}/${plan}`}
              >
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateAndIcon>
                {plan === 'Earli' ? (
                  <CreateIcon src={earli} />
                ) : plan === 'Kolo' ? (
                  <CreateIcon src={kolo} />
                ) : plan === 'Freedom' ? (
                  <CreateIcon src={freedom} />
                ) : null}

                <CreateText>Creating an {plan} Savings Plan</CreateText>
              </CreateAndIcon>
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
                  <InputHead>Overview</InputHead>
                  <Label>
                    Confirm the details of the plan you are about to create.
                  </Label>

                  <DetailsCont>
                    <DetailItem>
                      <ItemName>Account</ItemName>
                      <ItemValue>
                        {' '}
                        {childData?.firstname}{' '}
                        {childData?.lastname}
                      </ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName> Frequency</ItemName>
                      <ItemValue>{frequency.toLocaleUpperCase()}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>How Much Daily?</ItemName>
                      <ItemValue>N{plan_details?.amount}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Start Date</ItemName>
                      <ItemValue>
                        {moment(plan_details?.start)?.format('DD MM yy')}
                      </ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Duration</ItemName>
                      <ItemValue>{plan_details?.duration}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Expected Return</ItemName>
                      <ItemValue>N{plan_details?.amount * 30 * parseInt(plan_details?.duration.charAt(0))}</ItemValue>
                    </DetailItem>
                  </DetailsCont>

                  <Button
                    onClick={() => {
                      submit();
                    }}
                  >
                    Proceed to Payment{' '}
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

export default AddEarliOverviewComp;

const ItemValue = styled.div`
  font-weight: 500;
  color: black;
`;

const ItemName = styled.div``;

const DetailItem = styled.div`
  display: flex;
  font-size: 12px;
  color: lightgray;
  justify-content: space-between;
  padding-bottom: 13px;
  margin-top: 13px;
  border-bottom: 1px solid lightgray;
`;
const DetailsCont = styled.div`
  width: 100%;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const CreateIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  margin-right: 10px;
  @media screen and (max-width: 370px) {
    margin-right: 6px;
    width: 20px;
    height: 20px;
  }
`;
const CreateAndIcon = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  flex: 2;
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
  /* background: green; */
  @media screen and (max-width: 620px) {
    width: 90%;
    /* box-shadow:none; */
  }
`;

const Button = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  outline: none;
  border: none;
  align-items: center;
  color: white;
  font-family: work sans;
  background-color: #7b69dd;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  transition: all 550ms;
  /* margin-top: 25px; */
  font-family: work sans;
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
  text-align: center;
  line-height: 22px;
  /* font-weight: 500; */
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
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  justify-content: center;
  background: white;
  padding-bottom: 20px;
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
  width: 370px;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
  /* height: 500px; */
`;

const CreateText = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  @media screen and (max-width: 395px) {
    font-size: 13px;
  }
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
  @media screen and (max-width: 500px) {
    flex: 0;
    margin-right: 25px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
    margin-right: 29px;
  }
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
  height: auto;
  display: flex;
  padding-bottom: 25px;
  background-color: #ffffff;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  @media screen and (max-width: 620px) {
    width: 90%;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    box-shadow: none;
    border-radius: 0px;
    background: #fafcff;
  }
`;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 30px;
  @media screen and (max-width: 620px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  /* background: red; */
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
  margin-bottom: 40px;
`;
