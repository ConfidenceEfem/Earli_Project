import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiHeadphone, BiLineChart } from 'react-icons/bi'
import { BsServer } from 'react-icons/bs'
import { FaMoneyBill } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { MdSettings } from 'react-icons/md'
import { SiMicrosoft } from 'react-icons/si'
import { NavLink, useParams } from 'react-router-dom'
import styled from "styled-components"
import gift from '../images/gift.png';


const MobileDashNav = () => {
    const { parentid, childid } = useParams();
  // console.log(parentid, childid);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const mainLink1 = 'http://localhost:2004';
    const mainLink = 'https://earli.herokuapp.com';
    const res = await axios.get(`${mainLink}/oneparent/${parentid}`);
    setData(res.data.data.children[0]);
  };



  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
        <Wrapper>
            <ItemsHolder>
            <OtherItemsHolder>
                <NavigationsAndIcon>
                    <NavsAndIcon to={`/home/${parentid}`}>
                        <SiMicrosoft/>
                        <Navs>DashBoard</Navs>
                    </NavsAndIcon>
                    
                    <NavsAndIcon to={`/dashaccount/${parentid}/${data?._id}`}>
                        <BsServer/>
                        <Navs>Plans</Navs>
                    </NavsAndIcon>
                    <NavsAndIcon to="/">
                        <FaMoneyBill/>
                        <Navs>Payment</Navs>
                    </NavsAndIcon>
                    <NavsAndIcon to="/education">
                        <BiLineChart/>
                        <Navs>Financial Education</Navs>
                    </NavsAndIcon>
                    <NavsAndIcon to="/">
                        <MdSettings/>
                        <Navs>Settings</Navs>
                    </NavsAndIcon>
                    <NavsAndIcon to="/">
                        <BiHeadphone/>
                        <Navs>Help Activity</Navs>
                    </NavsAndIcon>
                    <NavsAndIcon to="/">
            <FiLogOut/>
            <Navs>Log Out</Navs>
          </NavsAndIcon>
                </NavigationsAndIcon>
                <Line />
                <Image src={gift} />
         
            </OtherItemsHolder>
            </ItemsHolder>
        </Wrapper>
    </Container>
  )
}

export default MobileDashNav

const Image = styled.img`
  width: 80%;
  height: 200px;
  border-radius: 7px;
  object-fit: cover;
  padding-bottom: 100px;
`;

const Line = styled.div`
  width: 80%;
  border-bottom: 1px solid lightgray;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const Navs = styled.div`
  margin-left: 15px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1px;
`;

// const Icon = styled(SiMicrosoft)`
//   font-size: 15px;
// `;

const NavsAndIcon = styled(NavLink)`
display: flex;
  width: 100%;
//   background: green;
padding-left: 15px;

  height: 35px;
  align-items: center;
  color: lightgray;
  cursor: pointer;
  margin: 10px 0;
  text-decoration: none;
  font-size: 16px;
  /* color #7b69dd; */
  /* background-color: red; */
  &.active {
    border-left: #7b69dd 5px solid;
    color: #7b69dd;
  }
`

const NavigationsAndIcon = styled.div`
width: 70%;
display: flex;
flex-direction: column;
margin-top: 20px;
@media screen and (max-width: 500px){
    width: 82%;
}
`

const OtherItemsHolder = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
width: 100%;
height: 100%;
`
const ItemsHolder = styled.div`
// height: 97%; 
height: 100%;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;

`
const Wrapper = styled.div`
width: 300px;
height: 100vh;
overflow-y: scroll;
background-color: #fafcff;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
align-items: flex-end;
@media screen and (max-width: 350px){
    width: 350px;
}

`
const Container = styled.div`
display:none;
@media screen and (max-width: 1000px){
    width: 100%;
display:flex;
position: absolute;
top:90px;
z-index: 4;
}


`