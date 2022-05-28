import React from 'react';
import styled from "styled-components"
import frontimage from "./images/register.png"
import LoginCard from './LoginCard';
import Header from './Header';

const Login = () => {
    
  return (
    <>
    <Header/>
    <Container>
      <Wrapper>
      <LeftComp>
      <Image src={frontimage}/>
      <RegisterHeading>Secure Your Child's Financial Future</RegisterHeading>
      <RegisterContent>Save, invest and grow enough money to give them a great headstart financially</RegisterContent>
      </LeftComp>
      <LoginCard/>
      </Wrapper>
    </Container>
    </>
  );
}

export default Login;



const RegisterContent = styled.div`
font-size: 17px;
font-family: work sans;
line-height: 25px;
/* color: rgba(255,255,255,0.9); */
font-style: normal;
font-weight: 400;
width: 500px;
margin-top: 10px;
color: #002a32;
@media screen and (max-width: 1230px){
   font-size: 16px;
   width: 100%;
    }
`
const RegisterHeading = styled.div`
font-weight: 800;
text-align: left;
margin-top: 25px;
color: #002a32;
margin-bottom: 10px;
font-family:work sans;
/* color: rgba(255,255,255,0.9); */
font-size: 34px;
width: 570px;
font-style: normal;

@media screen and (max-width: 1230px){
    width: 100%;
    font-size: 30px;
  }
`
const Image = styled.img`
width: 100%;
height: 360px;
border-radius: 8px;
object-fit: cover;
`
const LeftComp = styled.div`
width: 45%;
@media screen and (max-width:880px){
  display: none;
}
`
const Container = styled.div`
width: 100%;
height: calc(100vh - 90px);
background-color: #fafcff;
display: flex;
justify-content: center;

`
const Wrapper = styled.div`
width: 85%;
margin-top: 50px;
display: flex;
justify-content: space-between;
@media screen and (max-width:1130px ){
    width: 86%;
}
@media screen and (max-width:880px){
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
@media screen and (max-width:450px){
    margin-top: 0px;
}

`