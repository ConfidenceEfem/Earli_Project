import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"


const Features = () => {

    const navigate = useNavigate()

  return (
    <Container>
        <Wrapper>
            <TextCont>
                <Topic>
                Everything your child needs to attain financial freedom
                </Topic>
                <Desc>
                We are interested in the future
                 of your child,
                 that is why we built Earli.
                 We offer everything for financial 
                 growth and freedom in one App!   
                </Desc>
                <Button
                 onClick={()=>{
                    navigate("/signup")
                }}
                >
                    Create a free account
                </Button>
            </TextCont>
            <FeaturesBox>
                <BoxWrapper>
                 <TextAndIcon>
                    <Icon src={"/images/check.png"}/>
                    <Text>
                        Open an account in less than a minute
                    </Text>
                 </TextAndIcon>
                 <TextAndIcon>
                 <Icon src={"/images/check.png"}/>
                    <Text>
                       Automatic savings
                    </Text>
                 </TextAndIcon>
                 <TextAndIcon>
                 <Icon src={"/images/check.png"}/>
                    <Text>
                    13% interest p.a. on savings
                    </Text>
                 </TextAndIcon>
                 <TextAndIcon>
                 <Icon src={"/images/check.png"}/>
                    <Text>
                    Variety of Investment plans
                    </Text>
                 </TextAndIcon>
                 <TextAndIcon>
                 <Icon src={"/images/check.png"}/>
                    <Text>
                      Free financial education
                    </Text>
                 </TextAndIcon>
                 <TextAndIcon>
                 <Icon src={"/images/check.png"}/>
                    <Text>
                      Zero Maintenance fees
                    </Text>
                 </TextAndIcon>
                </BoxWrapper>
            </FeaturesBox>
        </Wrapper>
    </Container>
  )
}

export default Features

const Icon = styled.img`
width: 30px;
height: 30px;

@media screen and (max-width: 480px){
    width: 20px;
height: 20px;
}
`

const Text = styled.div`
font-weight: 800;
font-size: 17px;
margin-left: 20px;
@media screen and (max-width: 480px){
    font-weight: 700;
font-size: 15px;
margin-left: 15px;
}
`

const TextAndIcon = styled.div`
display:flex;
align-items: center;
width: 100%;
margin: 10px 0;
`

const BoxWrapper = styled.div`
width: 88%;
display:flex;
align-items: center;
flex-direction: column;
`

const Button = styled.div`
width: 270px;
height:55px;
justify-content: center;
display: flex;
align-items: center;
background-color: #7b69dd;
border-radius: 5px;
color: white;
letter-spacing: 0.2px;
font-size: 15px;
transform: scale(1);
transition:all 350ms;
text-decoration: none;
box-shadow: 0px 10px 20px rgba(123, 105, 221, 0.25);
:hover{
    cursor: pointer;
    transform: scale(1.02);
}
`

const Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 20px;
letter-spacing: 0.3px;
margin: 30px 0;
line-height: 35px;
@media screen and (max-width: 500px){
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 30px;
    width: 100%;
}
`

const Topic = styled.div`
font-style: normal;
font-weight: 700;
font-size: 40px;
color: #7B69DD;
line-height: 60px;
@media screen and (max-width: 1200px){
    font-size: 35px;
    line-height: 55px;
}
@media screen and (max-width: 920px){
    font-size: 32px;
    line-height: 50px;
}

@media screen and (max-width: 600px){
    width: 75%;
}
@media screen and (max-width: 500px){
    width: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 40px;
}
@media screen and (max-width: 460px){
    font-size: 24px;
}
@media screen and (max-width: 390px){
    font-size: 22px;
    line-height: 35px;
}
@media screen and (max-width: 350px){
    font-size: 20px;
    /* line-height: 35px; */
}
`



const FeaturesBox = styled.div`
width: 425px;
height: 396px;
background: #FFFFFF;
border: 1px solid rgba(165, 148, 249, 0.2);
box-shadow: 0px 24px 48px rgba(123, 105, 221, 0.15);
border-radius: 20px;
display:flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 480px){
    width: 100%;
    height: 320px;
    border-radius: 10px;    
}
`

const TextCont = styled.div`
display:flex;
flex-direction: column;
width:580px;
@media screen and (max-width: 867px){
 text-align: center;
 align-items: center;
 width: 100%;
 margin-bottom: 30px;
}
`

const Wrapper = styled.div`
display:flex;
justify-content: space-between;
width: 80%;
align-items: center;
@media screen and (max-width: 1090px){
    width: 90%;
}
@media screen and (max-width: 867px){
    flex-wrap: wrap;
    justify-content: center;
}
`

const Container = styled.div`
width: 100%;
height: 90vh;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Space Grotesk', sans-serif;
@media screen and (max-width: 867px){
  height: 100%;
  margin-top: 100px;
}
@media screen and (max-width: 500px){
    margin-top: 70px;
}

`