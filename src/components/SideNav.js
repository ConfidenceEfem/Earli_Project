import React from "react"
import styled from "styled-components"
import logo from "./images/earli.png"
const SideNav = ()=>{
    return (
        <Container>
        <Wrapper>
        <Navigations>
        <Navs>Home</Navs>
        <Navs>About Earli</Navs>
        <Navs>Company</Navs>
        <Navs>Features</Navs>
        <Navs>Help</Navs>
        </Navigations>
        
        <Logo src={logo}/>
        </Wrapper>
        </Container>
    )
}

export default SideNav

const Navs = styled.div`
color: white;
font-family: work sans;
margin: 20px 0;
border-bottom: 1px solid white;
width: 100%;
/* background-color: red; */
display: flex;
justify-content: center;
padding-bottom: 40px;
font-size: 18px;
cursor: pointer;
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(0.95);
}
`

const Container = styled.div`
display: none;
@media screen and (max-width: 880px){
    transition: all 350ms;
    height: 100vh;
display: flex;
justify-content: center;
/* background-color: rgb(255,255,255); */
background-color: #7b69dd;
align-items: center;
opacity: 0.9;
position: absolute;
top: 0;
left: 0;
width: 100%;
@media screen and (max-width: 610px){
    
}
}
`
const Wrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Logo = styled.img`
width: 110px;
height: 25px;
object-fit: contain;
`
const Navigations = styled.div`
flex: 1;
flex-direction: column;
display: flex;
align-items: center;
width: 90%;
/* justify-content: center; */
align-items: center;
`