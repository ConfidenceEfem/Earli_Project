import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SavingsPage from './SavingsPage';
import WalletPage from './WalletPage';
import InvestmentPage from './InvestmentPage';
import { FiChevronDown } from 'react-icons/fi';
import { useParams } from 'react-router';
import axios from 'axios';
import SelectChildCard from './SelectChildCard';
import WalletMediaView from './WalletMediaView';
import FundWalletPage from './FundWalletPage';

const UserAccountDash = () => {
  const { parentid, childid } = useParams();
  const [toggle, setToggle] = React.useState(true);
  const [investmentToggle, setinvestmentToggle] = React.useState(false);
  const [walletToggle, setwalletToggle] = React.useState(false);
  // const [data, setData] = useState([]);
  const [childData, setChildData] = useState([]);

  // const fetchData = async () => {
  //   const mainLink = 'https://earlifinance.herokuapp.com';
  //   const mainLink1 = 'http://localhost:2004';

  //   const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
  //   setData(res?.data?.data?.children);
  //   console.log(data);
  // };

  const ChildData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    setChildData(res?.data?.data);
    console.log(childData);
  };

  useEffect(() => {
    // fetchData();
    ChildData();
  }, []);



  return (
    <Container>
      <Wrapper>
        <Heading>
          <HeadingDetail>
            <ProfileImage src={childData?.image} />
            <AccoutNoAndName>
              <AccoutNo>Account 1</AccoutNo>
              <NameAndIcon>
               
                <SelectChildCard parentid={parentid} childid={childid} />
              </NameAndIcon>
            </AccoutNoAndName>
          </HeadingDetail>
          <HeadingButton>View Account</HeadingButton>
        </Heading>
        <UserAccountMainCardHolder>
          <AccountMaincardWrapper>
            <WalletPage childid={childid} />
            <WalletMediaView childid={childid}/>

            <CardNavigations>
              {toggle ? (
                <Navs
               
                >
                  Savings
                </Navs>
              ) : (
                <Nav
                  onClick={() => {
                    setToggle(true);
                    setinvestmentToggle(false);
                    setwalletToggle(false);
                  }}
                >
                  Savings
                </Nav>
              )}
              {investmentToggle ? (
                <Navs
             
                >
                  Investment
                </Navs>
              ) : (
                <Nav
                  onClick={() => {
                    setToggle(false);
                    setinvestmentToggle(true);
                    setwalletToggle(false);
                  }}
                >
                  Investment
                </Nav>
              )
            }
            {
              walletToggle?   
              <Navs
               >Fund Wallet</Navs> 
              : 
             
               <Nav
                onClick={() => {
                    setToggle(false);
                    setinvestmentToggle(false);
                    setwalletToggle(true);
                  }}
              >Fund Wallet</Nav>
            }
          
            </CardNavigations>
            {toggle? (
              <SavingsPage parentid={parentid} childid={childid} />
            ) : (
             null
            )}
            {investmentToggle? (
              <InvestmentPage parentid={parentid} childid={childid} />
            ) : (
             null
            )}

            {walletToggle? (
              <FundWalletPage parentid={parentid} childid={childid} />
            ) : (
             null
            )}
          </AccountMaincardWrapper>
        </UserAccountMainCardHolder>
      </Wrapper>
    </Container>
  );
};

export default UserAccountDash;

const Div = styled.div``;
const Options = styled.option`
  cursor: pointer;
  background: white;
  /* color: green; */
  padding: 20px;
  margin: 10px 0;
`;
const Select = styled.select`
  border: none;
  outline: none;
  font-family: work sans;
  background: #fafcff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1px;
  cursor: pointer;
`;
const Nav = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
  margin-right: 50px;
  cursor: pointer;
  transition: all 350ms;
  @media screen and (max-width: 500px){
    margin-right: 30px;
  }
  @media screen and (max-width: 400px){
    font-size: 13px;
    padding-bottom: 6px;
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
  @media screen and (max-width: 500px){
    margin-right: 30px;
  }
  @media screen and (max-width: 400px){
    font-size: 13px;
    padding-bottom: 6px;
  }
`;
const CardNavigations = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid silver;
  margin: 40px 0;
  @media screen and (max-width: 500px){
    justify-content: center;
    margin-bottom: 20px;
    }
`;
const AccountMaincardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  // height: 90%;
  margin: 15px 0;
  align-items: center;
  @media screen and (max-width: 500px){
    width: 100%;
  }
`;
const UserAccountMainCardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media screen and (max-width: 400px){
    width: 100%;
  }
`;


const NameAndIcon = styled.div`
  display: flex;
  align-items: center;
`;
const AccoutNo = styled.div`
  text-transform: uppercase;
  color: gray;
  font-size: 12px;
  margin-bottom: 5px;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  @media screen and (max-width: 400px){
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
const AccoutNoAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const HeadingButton = styled.div`
  padding: 13px 40px;
  border-radius: 5px;
  font-size: 12px;
  background-color: #eae9fe;
  color: #7b69dd;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 600px){
    margin-top: 30px;
    margin-left: 30px;
  }
`;

const HeadingDetail = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  flex-wrap: wrap;
  
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  height: auto;
  // min-height: calc(100vh - 90px);

`;
