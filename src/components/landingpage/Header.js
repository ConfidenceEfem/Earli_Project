import React, { useState } from 'react'
import styled from "styled-components"
import img from "./landingpageimages/earli.png"
import {AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom"
import SiderBar from './SiderBar'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()

    const onToggle = () => {
        setToggle(!toggle)
    }

  return (
    <Container>
        {toggle? <SiderBar toggle={toggle} setToggle={setToggle}/>: null}
        <Wrapper>
            <Left>
                <Logo src={img}/>
                <Navigations>
                    <Navs
                    onClick={()=>{

                    }}
                    >Home</Navs>
                    <Navs>About Earli</Navs>
                    <Navs>Company</Navs>
                    <Navs>Help</Navs>
                </Navigations>
            </Left>
            <Right>
                <RightWrapper>
                    <Navs
                    style={{
                        color: "white",
                        marginLeft: "0px"
                    }}
                    onClick={()=>{
                        navigate("/login")
                    }}
                    >Log In</Navs>
                    <Button
                      onClick={()=>{
                        navigate("/signup")
                    }}
                    >Get Started</Button>
                </RightWrapper>
               <Icon
               onClick={onToggle}
               >
               <AiOutlineMenu/>
               </Icon>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Header

const Icon = styled.div`
display:none;
@media screen and (max-width: 850px){
    display: flex;
    color: #7B69DD;
    font-size: 30px;
    align-items: center;
    height: 100%;
    cursor: pointer;
}
`

const Button = styled.div`
width: 130px;
height: 42px;
display:flex;
align-items: center;
justify-content: center;
border: 2px solid white;
border-radius: 5px;
color: white;
cursor: pointer;
font-size: 15px;

`


const RightWrapper = styled.div`
/* width: 65%; */
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width: 850px){
    display: none;
}
/* background-color: purple; */
`

const Navs = styled.div`
margin: 0 25px;
font-weight: 500;
cursor: pointer;
@media screen and (max-width: 980px){
    margin: 0 20px;
}
`

const Navigations = styled.div`
display:flex;
@media screen and (max-width: 850px){
    display: none;
}
`
const Logo = styled.img`
width: 90px;
height: 35px;
object-fit: contain;
margin-right: 60px;
@media screen and (max-width: 910px){
    margin-right: 40px;
}
`

const Right = styled.div`
width: 35%;
height: 100%;
@media screen and (max-width: 1200px){
    width: auto;
}
`

const Left = styled.div`
display:flex;
align-items: center;
`
const Wrapper = styled.div`
width: 80%;
display:flex;
/* background-color: green; */
height: 100%;
justify-content: space-between;
align-items: center;
z-index: 1;
@media screen and (max-width: 1090px){
    width: 90%;
}
`

const Container = styled.div`
width: 100%;
height: 100px;
position: relative;
background-color: #F8F8FD;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Space Grotesk', sans-serif;
/* z-index: 1; */
`   