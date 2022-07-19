import React from "react"
import styled from "styled-components"
import img from "./images/one.png"
import {FaChevronRight} from "react-icons/fa"

const OneAccountComp  = () => {
    return (
        <Container>
            <Wrapper>
                <TextCont>
                    <TextHead>All you need is One Account</TextHead>
                    <TextSub>
                        Creating an account is as
                         easy as you can think,
                        no stress, hassle free
                         and you can start 
                        saving for your child.
                        Creating an account is as
                         easy as you can think,
                        no stress, hassle free
                         and you can start 
                        saving for your child.
                    </TextSub>
                    <Button>
                        <ButtonText>Learn More</ButtonText>
                        <ButtonIcon/>
                    </Button>
                </TextCont>
                <ImageCont src={img}/>
            </Wrapper>
        </Container>
    )
}

export default OneAccountComp

const ButtonIcon = styled(FaChevronRight)`
font-size: 25px;
@media screen and (max-width: 500px){
    font-size:20px;
}
`
const ButtonText = styled.div`
font-size: 22px;
font-weight: 600;
letter-spacing: 0.1px;
margin-right: 15px;
@media screen and (max-width: 500px){
    font-size:18px;
    margin-right: 12px;
}

`

const Button = styled.div`
width: 100%;
display: flex;
align-items: center;
color: #7b69dd;
font-family: work sans;

transform: scale(1);
transition:all 350ms;
text-decoration: none;

:hover{
    cursor: pointer;
    transform: scale(1.01);
}

`

const TextSub = styled.div`
margin-top: 25px;
margin-bottom: 45px;
display: flex;
font-family: work sans;
font-size: 18px;
line-height: 30px;
@media screen and (max-width: 1080px){
      font-size: 17px;
      margin-top: 20px;
      margin-bottom: 35px;
}

@media screen and (max-width: 880px){
    font-size: 15px;
    line-height: 30px;
}
@media screen and (max-width: 426px){
    font-size: 14px;
    line-height: 25px;
}

`
const TextHead = styled.div`
font-family: work sans;
font-weight: 600;
font-size: 39px;
display: flex;
line-height: 55px;
letter-spacing: 0.3px;

@media screen and (max-width: 880px){
    font-size: 35px;
}
@media screen and (max-width: 450px){
    font-size: 20px;
    line-height: 30px;
}
`

const ImageCont = styled.img`

width: 52%;
display: flex;
height: 100%;
object-fit: cover;

@media screen and (max-width: 883px){
    width: 66%;
    margin-top: 40px;
    margin-bottom: 100px;
    height: 60vh;
}
@media screen and (max-width: 700px){
    width: 80%;
    margin-top: 40px;
}
@media screen and (max-width: 500px){
   width: 100%;
}
@media screen and (max-width: 450px){
   object-fit: contain;
   height: 45vh;
   /* height: 55%; */
   margin-top: 40px;
}
`
const TextCont = styled.div`
font-family: work sans;
display: flex;
justify-content: center;
flex-direction: column;
font-weight:450;
letter-spacing: 0.1px;
color: black;
width: 40%;
@media screen and (max-width: 883px){
    width: 90%;
}
`

const Wrapper = styled.div`
width: 91%;
height: 30px;
display: flex;
justify-content: space-between;
height: 100%;
align-items: center;
/* background-color: red; */
@media screen and (max-width: 883px){
    flex-wrap: wrap;
    /* justify-content: center; */
    width: 92%;
}
`

const Container = styled.div`
width: 100%;
height: 70vh;
/* background-color: red; */
margin-bottom: 30px;
display: flex;
justify-content: flex-end;
@media screen and (max-width: 883px){
    height: 80vh;
    margin-bottom: 250px;
}
@media screen and (max-width: 700px){
    height: 85vh;
    margin-bottom: 200px;
    /* margin-bottom: 100px; */
}
@media screen and (max-width: 600px){
    height: 100vh;
    margin-bottom: 150px;
    /* margin-bottom: 100px; */
}
@media screen and (max-width: 450px){
    height: 80vh;
    /* height: 100vh; */
    /* margin-bottom: 100px; */
}
`

