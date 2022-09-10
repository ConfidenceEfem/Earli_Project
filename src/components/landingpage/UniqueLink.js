import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

const UniqueLink = () => {

    const navigate = useNavigate()

  return (
    <Container>
        <Wrapper>
            <WrapperSub>
                <TextCont>
                    <Topic>
                    Unique link for each Child
                    </Topic>
                    <Desc>
                    Extended family members can gift
                     your children
                     money through their unique 
                    link from anywhere in the World.
                    </Desc>
                    <Button
                     onClick={()=>{
                        navigate("/signup")
                    }}
                    >Get Started</Button>
                </TextCont>
                <Image src={"/images/family.jpg"}/>
            </WrapperSub>
        </Wrapper>
    </Container>
  )
}

export default UniqueLink

// const Button = styled.div``
const Button = styled.div`
width: 130px;
height: 42px;
display:flex;
align-items: center;
justify-content: center;
border: 2px solid #7B69DD;
border-radius: 5px;
color: #7B69DD;
cursor: pointer;
font-size: 15px;
@media screen and (max-width: 867px){
  margin-bottom: 40px;
}
`

const Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 35px;
width: 550px;
margin: 25px 0;
@media screen and (max-width: 1115px){
   font-size:   17px;
   width: 460px;
   margin: 20px 0;
}
@media screen and (max-width: 980px){
    width: 400px;
}
@media screen and (max-width: 920px){
    width: 370px;
}
@media screen and (max-width: 867px){
  width: 100%;
}
`

const Topic = styled.div`
font-style: normal;
font-weight: 600;
font-size: 43px;
line-height: 60px;
letter-spacing: 0.1px;
width: 500px;
@media screen and (max-width: 1115px){
   font-size: 40px;
   width: 400px;
}
@media screen and (max-width: 1000px){
    font-size: 37px;
    line-height: 50px;
}

@media screen and (max-width: 920px){
    width: 370px;
}
@media screen and (max-width: 867px){
  width: 100%;
  font-size: 34px;
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
}
`

const Image = styled.img`
width: 320px;
height: 300px;
object-fit: cover;
border-radius: 10px;
@media screen and (max-width: 1040px){
    width: 300px;
height: 280px;
}
@media screen and (max-width: 867px){
  width: 100%;
  height: 320px;
margin-top: 50px;
}
@media screen and (max-width: 400px){
  width: 100%;
  height: 280px;
margin-top: 50px;
}
`

const TextCont = styled.div`
@media screen and (max-width: 867px){
  width: 100%;
margin-top: 30px;
text-align: center;
display:flex;
flex-direction: column;
align-items: center;
}
`

const WrapperSub = styled.div`
width: 90%;
display:flex;
justify-content: space-between;
@media screen and (max-width: 867px){
    display:flex;
    flex-direction: column-reverse;
    align-items: center;
    /* justify-content: center; */
    /* height: auto; */
}
`

const Container = styled.div`
width: 100%;
display:flex;
height: 75vh;
align-items: center;
justify-content: center;
@media screen and (max-width: 867px){
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;

}
`

const Wrapper = styled.div`
width: 1050px;
display:flex;
border-radius: 15px;
justify-content: center;
height: 350px;
align-items: center;
font-family: 'Space Grotesk', sans-serif;
box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
@media screen and (max-width: 1230px){
    width: 85%;
}
@media screen and (max-width: 867px){
    display:flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    height: auto;
}
@media screen and (max-width: 500px){
 width: 90%;
}
`