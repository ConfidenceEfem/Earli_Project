import React from "react"
import styled from "styled-components"
import img from "./images/one.png"
import {FaChevronRight} from "react-icons/fa"

const CreateInvestment = ({topic,desc,bt,fdd,image}) => {
    return (
        <Container fw={fdd}>
            <Wrapper fcw={fdd}>
                <TextCont>
                    <HeadText>
                        {topic}
                    </HeadText>
                    <DescText>
                    {desc}
                    </DescText>
                    {!bt?
                    <Button>
                        <ButtonText>Learn More</ButtonText>
                        <ButtonIcon/>
                    </Button>:
                        <MainButton>Create A Free Account</MainButton>
                        
                        }
                        
                </TextCont>
                <ImageCont src={image}/>
            </Wrapper>
        </Container>
    )
}

export default CreateInvestment

const MainButton = styled.div`
width: 270px;
height:55px;
justify-content: center;
display: flex;
align-items: center;
background-color: #7b69dd;
border-radius: 5px;
color: white;
font-family: work sans;
letter-spacing: 0.2px;
font-size: 15px;
transform: scale(1);
transition:all 350ms;
text-decoration: none;
margin-bottom: 30px; 

:hover{
    cursor: pointer;
    transform: scale(1.02);
}
@media screen and (max-width: 550px){
    /* width: 100%; */
    height: 45px;
    font-size: 13px;
}
@media screen and (max-width: 450px){
width: 80%;
}

@media screen and (max-width: 390px){
    margin-bottom: 10px;
}
`

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
@media screen and (max-width: 883px){
    margin-bottom: 30px; 
}
`

const DescText = styled.div`
margin-top: 25px;
margin-bottom: 45px;
display: flex;
font-family: work sans;
font-size: 18px;
line-height: 30px;
font-weight:450;
letter-spacing: 0.1px;
color: black;
@media screen and (max-width: 1080px){
      font-size: 17px;
      margin-top: 20px;
      margin-bottom: 35px;
}

@media screen and (max-width: 883px){
    font-size: 15px;
    line-height: 30px;
}
@media screen and (max-width: 700px){
    width: 100%;
}
@media screen and (max-width: 426px){
    font-size: 14px;
    line-height: 25px;
}
`
const HeadText = styled.div`
font-family: work sans;
font-weight: 700;
font-size: 37px;
display: flex;
line-height: 60px;
letter-spacing: 0.3px;

@media screen and (max-width: 950px){
    font-size: 35px;
    font-weight: 600;
    line-height: 50px;
  
}
@media screen and (max-width: 700px){
    font-size: 28px;
    line-height: 45px;
    font-weight: 600;
}
@media screen and (max-width: 450px){
    font-size: 25px;
    line-height: 40px;
}
@media screen and (max-width: 350px){
    font-size: 22px;
    line-height: 33px;
}
`

const ImageCont = styled.img`
width: 52%;
display: flex;
height: 85vh;
object-fit: cover;
@media screen and (max-width: 883px){
    height: 50vh;
    width: 90%;
    
}
`
const TextCont = styled.div`
font-family: work sans;
display: flex;
justify-content: center;
flex-direction: column;
width: 40%;


@media screen and (max-width: 883px){
    width: 80%;
}
@media screen and (max-width: 700px){
    width: 90%;
}
`

const Wrapper = styled.div`
width: 91%;
/* height: 30px; */
display: flex;
justify-content: space-between;
height: 100%;
align-items: center;
flex-direction: ${({fcw})=> fcw? "row-reverse" : "row" };
@media screen and (max-width: 883px){
    flex-wrap: wrap;
   flex-direction: row;
    width: 92%;
}
`

const Container = styled.div`
width: 100%;
height: 100vh;
margin-bottom: 100px;
display: flex;
justify-content: flex-end;
align-items: center;
/* justify-content: ${({jc})=> !jc? "flex-start" : "flex-end" } */
flex-direction: ${({fw})=> fw? "row-reverse" : "row" };
margin-bottom: 50px;
@media screen and (max-width: 883px){
    flex-wrap: wrap;
   flex-direction: row;
   height: 90vh;
}
@media screen and (max-width: 768px){
   height: 120vh;
}
`