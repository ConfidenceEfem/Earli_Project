import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { BsFillBarChartFill, BsBarChartFill } from 'react-icons/bs';
import { GrFormNext } from 'react-icons/gr';
import { FaPiggyBank } from 'react-icons/fa';
import avatar from '../images/avatar.png';
import { FaWallet } from 'react-icons/fa';
import SavingsPage from './SavingsPage';
import WalletPage from './WalletPage';
import InvestmentPage from './InvestmentPage';
import { FiChevronDown } from 'react-icons/fi';
import { useParams } from 'react-router';
import axios from 'axios';

const UserAccountDash = () => {
  const { parentid, childid } = useParams();
  const [toggle, setToggle] = React.useState(false);
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

  useEffect(() => {
    fetchData();
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
                {/* <AccountName>Adebimpe Adesanya</AccountName> */}
                <Select name={childData?.firstname} id={childData?._id}>
                  {data.map((props) => (
                    <Options
                      key={props._id}
                      to={`/dashaccount/${parentid}/${childid}`}
                    >
                      {props.firstname} {props.lastname}
                    </Options>
                  ))}
                </Select>
                {/* <CaretIcon/> */}
              </NameAndIcon>
            </AccoutNoAndName>
          </HeadingDetail>
          <HeadingButton>View Account</HeadingButton>
        </Heading>
        <UserAccountMainCardHolder>
          <AccountMaincardWrapper>
            <WalletPage />
            <CardNavigations>
              {toggle === false ? (
                <Navs
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Savings
                </Navs>
              ) : (
                <Nav
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Savings
                </Nav>
              )}
              {toggle === true ? (
                <Navs
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Investment
                </Navs>
              ) : (
                <Nav
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  Investment
                </Nav>
              )}
            </CardNavigations>
            {toggle === false ? (
              <SavingsPage parentid={parentid} childid={childid} />
            ) : (
              <InvestmentPage parentid={parentid} childid={childid} />
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
const CardNavigations = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid silver;
  margin: 40px 0;
`;
const AccountMaincardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 90%;
  align-items: center;
`;
const UserAccountMainCardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  min-height: 110vh;
  height: 100%auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const CaretIcon = styled(FiChevronDown)`
  cursor: pointer;
  margin-left: 10px;
  font-weight: 700;
  font-size: 20px;
`;

const AccountName = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1px;
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
`;
const AccoutNoAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  min-height: calc(100vh - 90px);
`;
