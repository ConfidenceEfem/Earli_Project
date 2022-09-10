import React from 'react'
import styled from "styled-components"
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'


const SiderBar = ({toggle, setToggle}) => {
  const navigate = useNavigate()

  return (
    <Container>
       <WrapperHolder>
       <Wrapper>
            <CloseIcon
          
            >
                <AiOutlineClose
                  onClick={()=>{
                    setToggle(!toggle)
                }}
                style={{
                    cursor: "pointer",
                }}
                />
            </CloseIcon>
            <Navigation>
                <Nav>Home</Nav>
                <Nav>Company</Nav>
                <Nav>About Earli</Nav>
                <Nav>Help</Nav>
                <Nav
                 onClick={()=>{
                  navigate("/login")
              }}
                >Log In</Nav>
            </Navigation>
          <ButtonHolder>
          <Button
           onClick={()=>{
            navigate("/signup")
        }}
          >Get Started</Button>
          </ButtonHolder>
        </Wrapper>
       </WrapperHolder>
    </Container>
  )
}

export default SiderBar

const ButtonHolder = styled.div`
width: 100%;
display:flex;
margin-top: 30px;
/* margin-bottom: 50px; */
`

const Button = styled.div`
width: 130px;
height: 45px;
display:flex;
align-items: center;
justify-content: center;
border: 2px solid #7B69DD;
border-radius: 7px;
color: #7B69DD;
cursor: pointer;
`

const Nav = styled.div`
font-weight: 500;
font-size: 17px;
margin: 15px 0;
cursor: pointer;
`

const Navigation = styled.div`
display:flex;
flex-direction: column;
width: 100%;
margin-top: 30px;
`

const CloseIcon = styled.div`
color:#7B69DD;
font-size: 30px;
width: 100%;
display:flex;
justify-content: flex-end;

`

const WrapperHolder = styled.div`
background-color: white;
width: 100%;
/* height: auto; */
display:flex;
justify-content: center;

`
const Wrapper = styled.div`
width: 80%;
display:flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

/* height: 100%; */

`

const Container = styled.div`

display:none;
@media screen and (max-width: 850px){
    width: 100%;
display: flex;
height: 100vh;
background-color: rgb(0,0,0,0.4);
/* opacity: 0.4; */
position: absolute;
top: 0;
z-index: 10;
}
`