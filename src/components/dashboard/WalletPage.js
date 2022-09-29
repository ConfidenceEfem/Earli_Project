import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaPiggyBank, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthState/AuthProvider';
import axios from 'axios';

const WalletPage = ({ childid }) => {
  const { currentUser } = useContext(AuthContext);

  const [childData, setChildData] = useState([]);
  const [walletData, setWalletData] = useState({});

  const ChildData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/child/${childid}`);
    const resData = await axios.get(`${mainLink}/childsum/${childid}`);

    setChildData(res?.data?.data);
    setWalletData(resData?.data?.data);

    console.log("hey this is wallet", walletData);
  };

  React.useEffect(() => {
    ChildData();
  }, []);


  
  return (
    <FirstCard>
      <FirstCardWrapper>
        <FirstMainCard>
          <IconCircle>
            <Icon />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>{childData?.firstname}'s Wallet</WalletName>
            <WalletAmount>{`N${(walletData?.walletBalance / 100)?.toFixed(2) === "NaN" ?
             "0.00" : 
             (walletData?.walletBalance / 100)?.toFixed(2)}`}</WalletAmount>
          </WalletNameAndAmount>
        </FirstMainCard>
        <FirstMainCard br="1px solid silver" bl="1px solid silver">
          <IconCircle>
            <Icon2 />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>{childData?.firstname} 
            's Savings</WalletName>
            <WalletAmount>{`N${(walletData?.totalSavings / 100).toFixed(2) === "NaN" ?
             "0.00" : 
             (walletData?.totalSavings/ 100)?.toFixed(2)}`}</WalletAmount>
          </WalletNameAndAmount>
        </FirstMainCard>
        <FirstMainCard>
          <IconCircle>
            <Icon3 />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>{childData?.firstname}'s Investments</WalletName>
            <WalletAmount>{`N${(walletData?.totalInvestment)?.toFixed(2)=== undefined ?
             "0.00" : 
             (walletData?.totalInvestment)?.toFixed(2)}`}</WalletAmount>
          </WalletNameAndAmount>
        </FirstMainCard>
      </FirstCardWrapper>
    </FirstCard>
  );
};

export default WalletPage;

const FirstMainCard = styled.div`
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  display: flex;
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  @media screen and (max-width: 1400px){
    padding: 0 50px;
  }
  @media screen and (max-width: 1300px){
    padding: 0 40px;
    // background-color: red;
  }
  @media screen and (max-width: 1350px){
    padding: 0 30px;
  }
  @media screen and (max-width: 1250px){
    padding: 0 20px;
    // background-color: red;
  }

`;

const Icon3 = styled(BsFillBarChartFill)``;
const Icon2 = styled(FaPiggyBank)``;
const Icon = styled(FaWallet)``;
const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f2f0fc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7b69dd;
  margin-right: 15px;
  font-size: 20px;
`;
const WalletAmount = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.1px;
`;

const WalletName = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const WalletNameAndAmount = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstCardWrapper = styled.div`
  width: 93%;
  height: 60%;
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  @media screen and (max-width: 1300px){
   width: 95%;
  }
  @media screen and (max-width: 1350px){
    width: 98%;
  }
`;

const FirstCard = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px){
    display:none;
  }
`;
