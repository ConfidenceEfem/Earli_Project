import React from "react"
import styled from "styled-components"
import logo from "./images/earli1.png"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Link} from "react-router-dom"
import SideNav from "./SideNav"

const LandingHeader  = ()=>{
    const [toggle, setToggle] = React.useState(false)

    const onToggle = ()=>{
        setToggle(!toggle)
    }

    return (
        <Container>
        <Wrapper>
        <LeftNavs>
        <Logo src={logo}/>
        <Navigations>
        <Navs to="/" cl=" #011B33">Home</Navs>
        <Navs to="/" cl=" #011B33">About Earli</Navs>
        <Navs to="/" cl=" #011B33">Company</Navs>
        <Navs to="/" cl=" #011B33">Features</Navs>
        <Navs to="/" cl=" #011B33">Help</Navs>
        </Navigations>
        </LeftNavs>
        <RightNavs>
        <Navs cl="#7b69dd" to="/login">Log In</Navs>
        <Create to="/signup">Create A Free Account</Create>
        </RightNavs>
        {toggle? <Icon1 onClick={()=>{
            onToggle()
        }}/>:
    <Icon
        onClick={()=>{
            onToggle()
        }}/>}
        
       
        
       {toggle? <SideNav/>:null} 
        </Wrapper>
        </Container>
    )
}

export default LandingHeader
const Icon1 = styled(AiOutlineClose)`
display: none;
@media screen and (max-width: 880px){
    display: block;
    font-size: 32px;
    /* color: #7b69dd; */
    cursor: pointer;
    transition: all 350ms;
    z-index: 3;
    color: white;
}
@media screen and (max-width: 610px){
   
}
@media screen and (max-width: 450px){
    font-size: 25px;
    
}
@media screen and (max-width: 365px){
    font-size: 20px;
}
`
const Icon = styled(AiOutlineMenu)`
display: none;
@media screen and (max-width: 880px){
    display: block;
    transition: all 350ms;
    font-size: 32px;
    color: #7b69dd;
    cursor: pointer;
}
@media screen and (max-width: 450px){
    font-size: 25px;
}
@media screen and (max-width: 365px){
    font-size: 20px;
}
`
const Create = styled(Link)`
padding: 15px 25px;
background-color: #7b69dd;
border-radius: 5px;
color: white;
font-family: work sans;
letter-spacing: 0.2px;
font-size: 15px;
transform: scale(1);
transition:all 350ms;
text-decoration: none;
:hover{
    cursor: pointer;
    transform: scale(1.02);
}
@media screen and (max-width: 970px){
    padding: 10px 16px;
    font-size: 13px;
}
@media screen and (max-width: 450px){
    font-size: 11px;
}
@media screen and (max-width: 365px){
    font-size: 10px;
}
@media screen and (max-width: 550px){
    display: none;
}
`
const Navs = styled(Link)`
font-size: 16px;
font-family: work sans;
color: ${({cl})=>cl};
margin-right: 45px;
transform: scale(1);
font-weight: 500;
transition:all 350ms;
text-decoration: none;
@media screen and (max-width: 880px){
    display: none;
}

:hover{
    cursor: pointer;
    transform: scale(0.95);
}
@media screen and (max-width: 1300px){
    margin-right: 35px;
}
@media screen and (max-width: 1130px){
    margin-right: 25px;
    font-size: 14px;
}
@media screen and (max-width: 970px){
    margin-right: 20px;
}
`
const Navigations = styled.div`
display: flex;
align-items: center;
margin-left: 85px;
@media screen and (max-width: 1300px){
    margin-left: 65px;
}
@media screen and (max-width: 1130px){
    margin-left: 45px;
}
@media screen and (max-width: 970px){
    margin-left: 25px;
}
@media screen and (max-width: 880px){
    display: none;
}
`
const Logo = styled.img`
width: 80px;
height: 22px;
object-fit: contain;
@media screen and (max-width: 450px){
    width: 75px;
    height: 20px;
}
@media screen and (max-width: 365px){
    width: 65px;
    height: 15px;
}
`
const RightNavs = styled.div`
display: flex;
align-items: center;
`
const LeftNavs = styled.div`
display: flex;
flex: 1;
@media screen and (max-width: 880px){
    flex: 0;
    justify-content: space-between;
}
`
const Container = styled.div`
background-color: white;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
margin-bottom: 5px;
/* position: fixed; */
/* margin-bottom: 50px; */
z-index: 1;
position: relative;

@media screen and (max-width: 365px){
    height: 75px;
}
`
const Wrapper = styled.div`
width: 87%;
display: flex;
align-items: center;
@media screen and (max-width: 880px){
    justify-content: space-between;
}
`