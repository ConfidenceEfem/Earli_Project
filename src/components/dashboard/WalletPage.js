import React, { useContext } from 'react';
import styled from 'styled-components';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { BsFillBarChartFill, BsBarChartFill } from 'react-icons/bs';
import { GrFormNext } from 'react-icons/gr';
import { FaPiggyBank, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../AuthState/AuthProvider';

const WalletPage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <FirstCard>
      <FirstCardWrapper>
        <FirstMainCard>
          <IconCircle>
            <Icon />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>{currentUser?.data?.firstname}'s Wallet</WalletName>
            <WalletAmount>N0.00</WalletAmount>
          </WalletNameAndAmount>
        </FirstMainCard>
        <FirstMainCard br="1px solid silver" bl="1px solid silver">
          <IconCircle>
            <Icon2 />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>{currentUser?.data?.firstname}'s Savings</WalletName>
            <WalletAmount>N0.00</WalletAmount>
          </WalletNameAndAmount>
        </FirstMainCard>
        <FirstMainCard>
          <IconCircle>
            <Icon3 />
          </IconCircle>
          <WalletNameAndAmount>
            <WalletName>
              {currentUser?.data?.firstname}'s Investments
            </WalletName>
            <WalletAmount>N0.00</WalletAmount>
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
  padding: 0 70px;
  display: flex;
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
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
`;

const FirstCard = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
