import React from 'react'
import styled from "styled-components"
import logo from "./landingpageimages/earli.png"

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Logo src={logo}/>
            <NavigationsHolder>
                <Navigation>
                    <Title>Company</Title>
                    <NavHolder>
                        <Nav>About Us</Nav>
                        <Nav>Blog</Nav>
                    </NavHolder>
                </Navigation>
                <Navigation>
                    <Title>Help</Title>
                    <NavHolder>
                        <Nav>Contact Us</Nav>
                        <Nav>Support</Nav>
                    </NavHolder>
                </Navigation>
                <Navigation>
                    <Title>Legal</Title>
                    <NavHolder>
                        <Nav>Privacy Policy</Nav>
                        <Nav>Terms and Conditions</Nav>
                    </NavHolder>
                </Navigation>
            </NavigationsHolder>
            <LastText>
            ©2022 Earli Financial Technology. All rights reserved
            </LastText>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Nav = styled.div`
margin: 10px 0;
cursor: pointer;
font-size: 15px;
`

const NavHolder = styled.div``

const Title = styled.div`
font-size: 19px;
margin-bottom: 10px;
font-weight: 500;
color: #7B69DD;
cursor: pointer;
`

const Navigation = styled.div`
display:flex;
flex-direction: column;
@media screen and (max-width: 600px){
    width: 200px;
    margin: 15px 0;
}
/* margin-right: 50px; */
`

const LastText = styled.div`
color: #9D9D9D;
font-size: 14px;

`

const NavigationsHolder = styled.div`
margin: 40px 0;
display: flex;
align-items: center;
width: 70%;
justify-content: space-between;
@media screen and (max-width: 1000px){
    width: 80%;
}
@media screen and (max-width: 1000px){
    width: 80%;
}
@media screen and (max-width: 800px){
    width: 90%;
    flex-wrap: wrap;
}
`

const Logo = styled.img`
width: 90px;
height: 35px;
object-fit: contain;
`

const Wrapper = styled.div`
width: 80%;
display:flex;
flex-direction: column;
@media screen and (max-width: 867px){
width: 90%;
}
`

const Container = styled.div`
width: 100%;
height: 50vh;
display:flex;
justify-content: center;
align-items: center;
background: #F8F8FD;
font-family: 'Space Grotesk', sans-serif;
@media screen and (max-width: 600px){
    height: 100%;
    padding: 30px 0;
}
`