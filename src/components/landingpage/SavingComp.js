import React from 'react'
import styled from "styled-components"
import arrow from "./landingpageimages/arrow.png"
import saving from "./landingpageimages/saving.png"

const SavingComp = ({image,topic,desc,plan,fd}) => {
  return (
    <Container>
        <Wrapper fd={fd}>
            <Image src={image} fd={fd}/>
            <TextCont>
                <Topic>
                {topic}
                </Topic>
                <Desc>
               {desc}
                </Desc>
                <Button>
                    <ButtonText>
                        {plan}
                    </ButtonText>
                    <Icon src={arrow}/>
                </Button>
            </TextCont>
        </Wrapper>
    </Container>
  )
}

export default SavingComp

const Icon = styled.img`
object-fit: contain;
`
const ButtonText = styled.div`
margin-right: 10px;
font-weight: 600;
color: rgb(0,0,0);
`

const Button = styled.div`
display:flex;
align-items: center;
cursor: pointer;
`

const Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 32px;
letter-spacing: 0.2px;
margin: 30px 0;
@media screen and (max-width: 1000px){
    font-size: 17px;
    letter-spacing: 0.1px;
    line-height: 25px;
}
@media screen and (max-width: 867px){
 line-height: 30px;
 font-size: 18px;
}
@media screen and (max-width: 500px){
    text-align: center;
    font-size: 16px;
    letter-spacing: 0.1px;
    line-height: 30px;
}
@media screen and (max-width: 400px){
    font-size: 15px;
}
`

const Topic = styled.div`
font-style: normal;
font-weight: 700;
font-size: 43px;
line-height: 55px;
letter-spacing: 0.1px;
@media screen and (max-width: 1000px){
    font-size: 37px;
    line-height: 50px;
}


@media screen and (max-width: 500px){
    font-size: 28px;
    line-height: 40px;
}
@media screen and (max-width: 460px){
    font-size: 24px;
    margin-top: 10px;
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

const TextCont = styled.div`
display:flex;
flex-direction: column;
width: 500px;
@media screen and (max-width: 867px){
    width: 510px;
  margin-top: 50px;
   align-items: center;
   text-align: center;
}
@media screen and (max-width: 600px){
    margin-top: 30px;
}
@media screen and (max-width: 500px){
    width: 100%;
}
`

const Image = styled.img`
width: 488px;
height: 451px;
object-fit: cover;
border-radius: 10px;
margin-right: ${({fd})=>fd? "0px":"70px"};
margin-left: ${({fd})=>fd? "70px":"0px"};
overflow: hidden;
@media screen and (max-width: 1115px){
    /* margin-right: 40px; */
    margin-right: ${({fd})=>fd? "0px":"40px"};
    margin-left: ${({fd})=>fd? "40px":"0px"};
}
@media screen and (max-width: 1000px){
    width: 450px;
height: 420px;
}
@media screen and (max-width: 867px){
    margin-right: 0px;
    margin-left: 0px;
}
@media screen and (max-width: 700px){
   width: 400px;
   height: 380px;
}
@media screen and (max-width: 600px){
   width: 350px;
   height: 320px;
}
@media screen and (max-width: 500px){
   width: 320px;
   height: 300px;
}
@media screen and (max-width: 400px){
    width: 300px;
    height: 300px;
}
@media screen and (max-width: 370px){
    width: 280px;
    height: 280px;
}
/* background-color: red; */
`

const Wrapper = styled.div`
display:flex;
width: 80%;
justify-content: center;
align-items: center;
flex-direction: ${({fd})=>fd? "row-reverse":"row"};
/* background-color: green; */
/* width: 100%; */
/* justify-content: center; */
/* align-items: center; */
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
height: 100vh;
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