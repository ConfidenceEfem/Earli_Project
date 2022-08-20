import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import earli from "../../images/treasury.png";
import * as yup from "yup";
import { Link, useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { AiOutlineLeft } from "react-icons/ai";
import ProgressBar from "../ProgressBar";
import Swal from 'sweetalert2';
import { AuthContext } from './../../AuthState/AuthProvider';
import { ErrorFunction } from './../../Error';

const TreasuryStep3 = () => {
  const { parentid, childid, invest } = useParams();
  const { currentUser, value } = useContext(AuthContext);

  const { state, dispatch: ctxDispatch } = value;

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [childData, setChildData] = useState([]);

  const fetchData = async () => {
    const mainLink = "https://earli.herokuapp.com";
    const mainLink1 = "http://localhost:2004";

    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res?.data?.data?.children);
    console.log(data);
  };

  const ChildData = async () => {
    const mainLink = "https://earli.herokuapp.com";
    const mainLink1 = "http://localhost:2004";

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  let invest_frequency = localStorage.getItem("invest_frequency")
    ? localStorage.getItem("invest_frequency")
    : "";
  let treasury_details = localStorage.getItem("treasury_details")
    ? JSON.parse(localStorage.getItem("treasury_details"))
    : [];

  const navigateToPayment = async () => {
    if (invest_frequency && treasury_details) {
      // pay with wallet
      const data = JSON.stringify({
        investmentType: invest,
        amount: treasury_details.amount,
        duration: invest_frequency,
        interest: 10,
      });

      const mainLink = 'https://earli.herokuapp.com';
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: `${mainLink}/invest/${childid}`,
        data: data,
      };
      ctxDispatch({ type: 'LoadingRequest' });

      await axios(config)
      .then((res) => {
        console.log(res)
        ctxDispatch({ type: 'LoadingSuccess' });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate(`/dashaccount/${parentid}/${childid}`);
          localStorage.removeItem('invest_frequency');
          localStorage.removeItem('treasury_details');
        });
      })
      .catch((error) => {
        ctxDispatch({ type: 'LoadingFailed' });
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${ErrorFunction(error)}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `invalid details`,
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  useEffect(() => {
    fetchData();
    ChildData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <ChildAccountCard>
          <ChildImage src={childData?.image} alt="child img" />
          <ChildAccountName>
            <AccountNo>Account 1</AccountNo>
            <AccountName>
              {childData?.firstName} {childData?.lastName}
            </AccountName>
          </ChildAccountName>
        </ChildAccountCard>
        <AddChildCard>
          <AddChildWrapper>
            <CreateHeader>
              <IconAndBack to={`/${parentid}/${childid}/${invest}/amount`}>
                <Icon />
                <span>Back</span>
              </IconAndBack>
              <CreateAndIcon>
                <CreateIcon src={earli} />
                <CreateText>Invest In Treasury Bills</CreateText>
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
                        {" "}
                        {childData?.firstName} {childData?.lastName}
                      </ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Duration</ItemName>
                      <ItemValue>{invest_frequency}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>How Much?</ItemName>
                      <ItemValue>{treasury_details?.amount}</ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Start Date</ItemName>
                      <ItemValue>
                        {moment(treasury_details?.start).format("DD MM yy")}
                      </ItemValue>
                    </DetailItem>
                    <DetailItem>
                      <ItemName>Expected Return</ItemName>
                      <ItemValue>N600,500</ItemValue>
                    </DetailItem>
                  </DetailsCont>
                  {!state.loading ? (
                    <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToPayment();
                    }}
                  >
                    Create Investment
                  </Button>
                  ) : (
                    <ProgressBar />
                  )}
                </InputContWrapper>
              </InputContainer>
            </MiddleComp>
          </AddChildWrapper>
        </AddChildCard>
      </Wrapper>
    </Container>
  );
};

export default TreasuryStep3;

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
  margin-bottom: 20px;
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

const Button = styled.button`
  width: 100%;
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
  width: 340px;
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
  height: 600px;
  display: flex;
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
