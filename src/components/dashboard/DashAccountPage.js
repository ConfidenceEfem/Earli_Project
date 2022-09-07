import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import { BsBarChartFill } from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";
import avatar from "../images/avatar.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthState/AuthProvider";
import axios from "axios";
import { NoIcon } from "../AllIcons";
import moment from "moment";
import ChildrenCardComp from "./ChildrenCardComp";
import {useSelector, useDispatch} from "react-redux"

const DashAccountPage = () => {
  const { parentid } = useParams();

  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);

  const [childrenData, setChildrenData] = useState([]);
  const [walletTotal, setWalletTotal] = useState({});

  console.log(parentid);

  const fetchData = async () => {
    const mainLink = "https://earli.herokuapp.com";
    const mainLink1 = "http://localhost:2004";
    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    const resData = await axios.get(`${mainLink}/parentsum/${parentid}`);

    setChildrenData(res?.data?.data?.children);
    setWalletTotal(resData?.data?.data);
    console.log(childrenData, walletTotal);
    // setChildrenData(res.data.data.children);
  };

  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <Container>
      <Wrapper>
        <FirstPart>
          <NameAndSubHolder>
            {" "}
            <WelcomeName>
              Welcome {currentUser?.data?.firstname}{" "}
              {currentUser?.data?.lastname}!
            </WelcomeName>{" "}
            <InvestText>Your Investments and Savings are booming</InvestText>
          </NameAndSubHolder>

          <InvestTextAndButton>
            <AddAccountButton to={`/addchild/${parentid}`}>
              Add New Account
            </AddAccountButton>
          </InvestTextAndButton>
        </FirstPart>
        <ChartCardHolder>
          <ChartCard bg="#7b69dd">
            <CardWrapper>
              <CardHeading>
                <Circle bg="#B0A5EB">
                  <CircleIcon />
                </Circle>
                <DotIcon color={"white"} />
              </CardHeading>
              <Headings cl="white">Total Savings</Headings>
              {walletTotal.totalSaving === 0 || walletTotal === [] || !walletTotal ?
                <Amount cl="white">N0</Amount>
              :
              <Amount cl="white">{`N${(walletTotal?.totalSavings / 100)?.toFixed(
                2
              )}`}</Amount>
            }
            </CardWrapper>
          </ChartCard>
          <ChartCard bg="#ffffff">
            <CardWrapper>
              <CardHeading>
                <Circle bg="#edf5f2">
                  <CircleIcon1 />
                </Circle>
                <DotIcon color={"black"} />
              </CardHeading>
              <Headings cl="black">Total Investment</Headings>
              <Amount cl="black">{`N${(
                walletTotal?.totalInvestment / 100
              )?.toFixed(2)}`}</Amount>
            </CardWrapper>
          </ChartCard>
          <ChartCard bg="#ffffff">
            <CardWrapper>
              <CardHeading>
                <Circle bg="#f2f0fc">0%</Circle>
                <DotIcon color={"black"} />
              </CardHeading>
              <Headings cl="black">Growth (Interests + Profits)</Headings>
              <Amount cl="black">N0.00</Amount>
            </CardWrapper>
          </ChartCard>
        </ChartCardHolder>
        <ChildrensAndTransactionHolder>
          {childrenData?.length > 0 ? (
            <ChildrensAccountHolder>
              <ChildrenWrapper>
                <ChildrenHeading>
                  Children's Accounts ({childrenData?.length})
                </ChildrenHeading>
                <ChildrenCardHolder>
                  {childrenData?.map((props, i) =>
                    i <= 1 ? (
                      <ChildrenCardComp childid={props?._id} parentid={parentid}/>
                    ) : null
                  )}
                </ChildrenCardHolder>
                <Slider>
                  <Carousel></Carousel>
                  <Carousel></Carousel>
                  <Carousel></Carousel>
                  <Carousel></Carousel>
                </Slider>
                <ChildrensAccountButton to={`/addchild/${parentid}`}>
                  <PlusIcon />
                  <Add>Add New Account</Add>
                </ChildrensAccountButton>
              </ChildrenWrapper>
            </ChildrensAccountHolder>
          ) : (
            <ChildrensAccountHolder>
              <ChildrenWrapper>
                <ChildrenHeading>Children's Accounts</ChildrenHeading>
                <MiddleBody>
                  <NoIcon />
                  <NoHeadText>No Children's Account Here</NoHeadText>
                  <SubTextHold>
                    To start saving and investing in your wards add an account
                    for them
                  </SubTextHold>
                  <ChildrensAccountButton to={`/addchild/${parentid}`}>
                    <PlusIcon />
                    <Add>Add New Account</Add>
                  </ChildrensAccountButton>
                </MiddleBody>
              </ChildrenWrapper>
            </ChildrensAccountHolder>
          )}
          {childrenData?.length > 0 ? (
            <TransactionHolder>
              <TransactionWrapper>
                <TransactionHeading>
                  <TransHeading>Transaction History</TransHeading>
                  <SeeAll>See all</SeeAll>
                </TransactionHeading>
                <TransactionBody>
                  {childrenData?.map((props) => {
                    let imgSrc = props?.image;
                    return props?.transactions?.map((props, i) => {
                      return i === 0 ? (
                        <TransactionCard>
                          <TransactionDetails>
                            <TransactionImage src={imgSrc} />
                            <TransactionNameDetail>
                              <TransactionName>
                                Wallet Funded {props?.status}
                              </TransactionName>
                              <TranDetail>
                                Wallet Funded with {props?.email} and
                                transaction ID of {props?.transactionId}
                              </TranDetail>
                            </TransactionNameDetail>
                          </TransactionDetails>
                          <AmountDate>
                            <TransAmount>+N{props?.amount}</TransAmount>
                            <TransDate>Jun 12</TransDate>
                          </AmountDate>
                        </TransactionCard>
                      ) : null;
                    });
                  })}
                </TransactionBody>
              </TransactionWrapper>
            </TransactionHolder>
          ) : (
            <TransactionHolder>
              <TransactionWrapper>
                <ChildrenHeading>Transaction History</ChildrenHeading>
                <MiddleBody>
                  <NoIcon />
                  <NoHeadText>No History Made Yet</NoHeadText>
                  <SubTextHold>
                    You have not made any transaction yet. Carry out
                    transactions to get started
                  </SubTextHold>
                </MiddleBody>
              </TransactionWrapper>
            </TransactionHolder>
          )}
        </ChildrensAndTransactionHolder>
      </Wrapper>
    </Container>
  );
};

export default DashAccountPage;

const NameAndSubHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 800px) {
    width: 600px;
  }
  @media screen and (max-width: 750px) {
    width: 500px;
  }
  @media screen and (max-width: 700px) {
    width: 350px;
  }
  @media screen and (max-width: 550px) {
    width: 82%;
    /* background:red; */
  }
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
`;
// const NoIcon = styled.div``;
const MiddleBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: center;
`;

const CircleIcon1 = styled(BsBarChartFill)`
  font-size: 25px;
  color: green;
  opacity: 1;
`;
const CircleIcon = styled(FaPiggyBank)`
  font-size: 25px;
  color: white;
  opacity: 1;
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
  padding: 15px 0;
  border-bottom: 1px solid lightgray;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TransactionBody = styled.div`
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
  justify-content: space-between;
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

const Add = styled.div`
  font-size: 15px;
`;

const PlusIcon = styled(FiPlus)`
  font-size: 23px;
  margin-right: 10px;
`;

const ChildrensAccountButton = styled(Link)`
  text-decoration: none;
  width: 70%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #7b69dd;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
`;

const Carousel = styled.div`
  width: 25px;
  border-radius: 10px;
  background-color: #7b69dd;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background-color: lightgray;
  }
`;

const Slider = styled.div`
  margin-bottom: 50px;
  width: 120px;
  height: 7px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ChildrenButton = styled.div`
  width: 180px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #7b69dd;
  background-color: #eeebfe;
  opacity: 0.5;
  border-radius: 3px;
  font-weight: 450;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
`;

const ChildrenAmount = styled.div`
  font-size: 13px;
  color: #7b69dd;
  font-weight: 600;
`;

const ChildrenSaving = styled.div`
  font-size: 10px;
  color: gray;
  margin-bottom: 5px;
`;

const ChildrenSavingAndAmount = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChildrenSavingAndAmountHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ChildrenAge = styled.div`
  font-size: 13px;
  color: gray;
`;

const ChildrenName = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 5px;
`;

const ChildrenImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const ChildrenProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 15px; */
  border: 1px solid #7b69dd;
`;
const ChildrenDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 53%;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
  transition: all 550ms;
  :hover {
    transform: scale(1.01);
  }
`;

const ChildrenCardWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildrenCard = styled.div`
  width: 260px;
  height: 260px;
  background: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;

const ChildrenCardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap; */
  overflow-x: scroll;
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
const ChildrenWrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionHolder = styled.div`
  /* width: 43%; */
  width: 500px;
  height: 510px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const ChildrensAccountHolder = styled.div`
  /* width: 54%; */
  width: 630px;
  height: 530px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const ChildrensAndTransactionHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Amount = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${({ cl }) => cl};
`;

const Headings = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${({ cl }) => cl};
`;
const DotIcon = styled(HiOutlineDotsVertical)`
  font-size: 20px;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  font-weight: 600;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  margin-top: 10px;
  opacity: ${({ op }) => op};
  align-items: center;
  justify-content: center;
  display: flex;
`;

const CardHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  color: ${({ cl }) => cl};
`;

const CardWrapper = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;
const ChartCard = styled.div`
  border-radius: 10px;
  width: 355px;
  height: 230px;
  display: flex;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  align-items: center;
  margin-bottom: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`;
const ChartCardHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 45px 0;
  width: 100%;
  @media screen and (max-width: 550px) {
  }
`;
const AddAccountButton = styled(Link)`
  text-decoration: none;
  width: 150px;
  background-color: #7b69dd;
  color: white;
  font-weight: 600;
  height: 40px;
  display: flex;
  justify-content: center;
  font-size: 13px;
  align-items: center;
  border-radius: 4px;
`;

const InvestText = styled.div`
  font-size: 17px;
  font-weight: 450;
`;
const InvestTextAndButton = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;
const WelcomeName = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  line-height: 35px;
`;
const FirstPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
 
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
  margin-bottom: 30px;

`;
