import React, { useContext } from 'react';
import styled from 'styled-components';
import img from '../images/avatar.png';
import logo from '../images/earli1.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import { MdNotifications } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import MobileDashNav from './MobileDashNav';
import { useSelector } from 'react-redux';

const DashBoardHeader = () => {
  const { parentid,childid } = useParams();
  const [toggle, setToggle] = React.useState(false)
  console.log(parentid);

  const userDetail = useSelector((state)=>state?.persistedReducer?.currentUser?.data)


  return (
    <MainContainer>
      {toggle? <MobileDashNav toggle={toggle} childid={childid} parentid={parentid}/> : null}
    
      <Container>
      <Wrapper>
        <Logo src={logo} />
        <ItemsHolder>
          <AddAcount to={`/addchild/${parentid}`}>Add New Account</AddAcount>
          <NotificationIcon />
          <Image src={img} />
          <Name>
            {userDetail?.firstname}
            {" "}
             {userDetail?.lastname}
          </Name>
          <ArrowIcon />
        </ItemsHolder>

        <HamIcon 
        onClick={()=>{
          setToggle(!toggle)
        }}
        >
          <AiOutlineMenu />
        </HamIcon>
      </Wrapper>
    </Container>
    </MainContainer>
    
  );
};

export default DashBoardHeader;

const HamIcon = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    color: #7b69dd;
    font-size: 25px;
    cursor: pointer;
    font-weight: 800;
  }
`;

const Logo = styled.img`
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100px;
    height: 40px;
    object-fit: contain;
  }
`;

const AddAcount = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  font-family: work sans;
  background-color: #7b69dd;
  padding: 10px 15px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.01);
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const ArrowIcon = styled(IoIosArrowDown)`
  color: #7b69dd;
  font-size: 25px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 450;
  margin: 0 15px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const NotificationIcon = styled(MdNotifications)`
  font-size: 20px;
  margin-left: 40px;
  margin-right: 20px;
`;
const ItemsHolder = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 1000px) {
    justify-content: space-between;
    /* width: 100%; */
  }
  /* background: white; */
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const MainContainer = styled.div`
display:flex;
position: relative;
width: 100%;
`
