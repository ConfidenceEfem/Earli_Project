import axios from 'axios'
import React, { useEffect } from 'react'
import styled from "styled-components"

const ChildInfo = ({myid}) => {

  const [data, setData] = React.useState([])

  const fetchChildData = async () => {
    const mainLink = 'https://earlifinance.herokuapp.com';
    const mainLink1 = 'http://localhost:2004';
    const res = await axios.get(`${mainLink}/childsum/${myid}`);
    setData(res?.data?.data)
  }

  useEffect(()=>{
fetchChildData()
  },[])

  return (
    <ChildrenSavingAndAmountHolder>
    <ChildrenSavingAndAmount>
      <ChildrenSaving>Savings</ChildrenSaving>
      <ChildrenAmount>
        N{data?.totalSavings?.toFixed(2)}
     
      </ChildrenAmount>
    </ChildrenSavingAndAmount>
    <ChildrenSavingAndAmount
      style={{ alignItems: "flex-end" }}
    >
      <ChildrenSaving>Investment</ChildrenSaving>
      <ChildrenAmount>
        N{data?.totalInvestment?.toFixed(2)}
      </ChildrenAmount>
    </ChildrenSavingAndAmount>
  </ChildrenSavingAndAmountHolder>
  )
}

export default ChildInfo


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

