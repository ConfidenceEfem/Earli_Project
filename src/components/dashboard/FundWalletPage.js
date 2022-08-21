import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {useNavigate } from 'react-router-dom';
import axios from 'axios';

const FundWalletPage = ({ parentid, childid }) => {
  console.log(parentid, childid);

  const navigate = useNavigate();
  const [savingsData, setSavingsData] = useState([]);

  const fetchData = async () => {
    const mainLink = 'https://earli.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';

    const res = await axios.get(`${mainLink}/onechild/${childid}`);
    console.log(res?.data?.data);
    setSavingsData(res?.data?.data?.savings);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LastCard>
      <CreateSavingsPlan>
        <SavingsPlanWrapper>
         <Button>Fund Wallet</Button>
         <Button>Generate Payment Link</Button>
          
        </SavingsPlanWrapper>
      </CreateSavingsPlan>
    </LastCard>
  );
};

export default FundWalletPage;
const Button = styled.div`
padding: 10px 30px;
background-color: #7b69dd;
margin: 10px 0;
color: white;
font-size: 15px;
border-radius: 4px;
cursor: pointer;
transition: all 660ms ease-in-out;
:hover{
    transform: scale(1.02);
}
`
const SavingsPlanWrapper = styled.div`
//   width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
align-items: center;
`;
const CreateSavingsPlan = styled.div`
  display: flex;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 10px;
  height: 300px;
    justify-content: center;
  @media screen and (max-width: 1000px){
    width: 410px;
    // background-color: red;
  }
  @media screen and (max-width: 980px){
    width: 395px;
   
  }
  @media screen and (max-width: 970px){
    width: 385px;
  }
  @media screen and (max-width: 950px){
    // width: 380px;
    width: 90%;
    margin: 15px 0;
  }
  @media screen and (max-width: 910px){
    // width: 380px;
  
    // background-color: red;
  }
  @media screen and (max-width: 600px){
    width: 90%;
    // background-color: red;
    
    
  }
`;

const LastCard = styled.div`
  width: 100%;
  height:100%;
  // padding-bottom: 40px;
  justify-content: center;
  // background-color: red;
  display: flex;
  flex-wrap: wrap;
  // margin-bottom: 40px;
  @media screen and (max-width: 950px){
    justify-content: center;
    // background-color: red;
  }
`;
