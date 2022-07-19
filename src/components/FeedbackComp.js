import React, { useEffect } from "react"
import styled from "styled-components"
import data from "./data.json"

const FeedbackComp = () => {

    const [counter, setCounter] = React.useState(0)
    const [hold, setHold] = React.useState([])

    const ChangeFunction = () => {
        const newData = new Array(Math.ceil(data?.length / 2)).fill().map(_ => data?.splice(0, 2))
        
        const change = newData[counter % newData.length]

        setHold(change)

}


useEffect(()=>{
ChangeFunction()
},[])
    return (
        <Container>
            <Wrapper>
                <ItemsWrapper>
                <Headings>
                        <TextHead>WHAT USERS ARE SAYING ABOUT EARLI</TextHead>
                        <TextSub>
                        Creating an account is as easy as 
                        you can think,no stress, 
                        hassle free and you can start
                         saving for your child
                        </TextSub>
                    </Headings>
                    <CardHolder>
                    {hold?.map((props)=>(
                        <Card key={props.id}>
                        <CardWrapper>
                            <Desc>
                              Earli hass got to be one of the best
                              saving and investment platform i have 
                              used and i am glad this is a way for me 
                              to create wealth for my children all at once 
                              without and hassle. Creating an account is 
                              as easy as you can think,no stress, 
                                hassle free and you can start
                                saving for your child  
                            </Desc>
                            <Profile>
                                <Image/>
                                <NameAndPosition>
                                    <Name>Abiodun Olaoluwa</Name>
                                    <Position>{props.name}</Position>
                                </NameAndPosition>
                            </Profile>
                        </CardWrapper>
                    </Card>
                    ))}
                    <Card1>
                        <CardWrapper>
                            <Desc>
                              Earli hass got to be one of the best
                              saving and investment platform i have 
                              used and i am glad this is a way for me 
                              to create wealth for my children all at once 
                              without and hassle. Creating an account is 
                              as easy as you can think,no stress, 
                                hassle free and you can start
                                saving for your child  
                            </Desc>
                            <Profile>
                                <Image/>
                                <NameAndPosition>
                                    <Name>Abiodun Olaoluwa</Name>
                                    <Position>CEO, Annie's wears</Position>
                                </NameAndPosition>
                            </Profile>
                        </CardWrapper>
                    </Card1>
                </CardHolder>
                <CarouselHolder>
                    <Carousel
                    onClick={()=>{
                        setCounter(1)
                    }}
                    ></Carousel>
                    <Carousel
                    onClick={()=>{
                        setCounter(2)
                    }}
                    ></Carousel>
                    <Carousel></Carousel>
                    <Carousel></Carousel>
                </CarouselHolder>

                </ItemsWrapper>
               
            </Wrapper>
        </Container>
    )
}

export default FeedbackComp

const Position = styled.div`
font-size: 14px;
color: gray;
margin-top: 5px;
@media screen and (max-width: 840px){
    font-size: 13px
}
`
const Name = styled.div`
font-weight: 600;
@media screen and (max-width: 840px){
    font-size: 15px
}
`
const NameAndPosition = styled.div``
const Image = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 20px;
background: red;
@media screen and (max-width: 840px){
   width: 40px;
   height: 40px;

   margin-right: 10px;
   
}
`
const Profile = styled.div`
display: flex;
@media screen and (max-width: 355px){
    margin-top: 20px;
}
`
const Desc = styled.div`
text-align: left;
line-height: 27px;
font-size: 15px;
letter-spacing: 0.1px;
line-height: 27px;
@media screen and (max-width: 970px){
    font-size: 14px;
}
`
const CardWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
height: 90%;
justify-content: space-between;
@media screen and (max-width:520px){
    width: 93%;
}
`
const Card = styled.div`
width: 45%;
background-color:#fafcff;
min-height: 320px;
height: 100%auto;
display: flex;
justify-content: center;
align-items: center;
font-family: work sans;
@media screen and (max-width: 1300px){
    width: 380px;
}
@media screen and (max-width: 1210px){
    margin-right: 40px;
}
@media screen and (max-width: 1000px){
    margin-right: 0px;
}
@media screen and (max-width: 970px){
    width: 330px;
}
@media screen and (max-width: 840px){
    width: 300px;
}
@media screen and (max-width: 785px){
    display: none;
width: 600px;
}
@media screen and (max-width:520px){
    width: 100%;
}
`
const Card1 = styled.div`
display: none;
@media screen and (max-width: 1300px){
/* width: 45%;
background-color:#fafcff;
min-height: 320px;
height: 100%auto;
display: flex;
justify-content: center;
align-items: center;
font-family: work sans;
    width: 380px; */
}
@media screen and (max-width: 1210px){
    margin-right: 40px;
}
@media screen and (max-width: 1000px){
    margin-right: 0px;
}
@media screen and (max-width: 970px){
    width: 330px;
}
@media screen and (max-width: 840px){
    width: 300px;
}
@media screen and (max-width: 785px){
    display: flex;
justify-content: center;
align-items: center;
font-family: work sans;
    background-color:#fafcff;
    min-height: 320px;
height: 100%auto;
    background-color:#fafcff;
   
width: 600px;
}
@media screen and (max-width:520px){
    width: 100%;
}
`
const Carousel = styled.div`
width: 22px;
border-radius: 5px;
background: #7b69dd;
cursor: pointer;
`
const CarouselHolder = styled.div`
width: 140px;
height: 10px;
display: flex;
justify-content: space-between;
`
const CardHolder = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
margin-bottom: 60px;
@media screen and (max-width: 1210px){
    width: 82%;
}
@media screen and (max-width: 1110px){
    width: 100%;
}
@media screen and (max-width: 785px){
justify-content: center;
}
@media screen and (max-width: 700px){
margin-bottom: 40px;
}
`
const TextSub = styled.div`
text-align: center;
margin-top: 30px;
font-size: 16px;
line-height: 28px;
font-weight: 500;
/* background: red; */
@media screen and (max-width: 880px){
    /* text-align: left; */
    width: 86%;
}
@media screen and (max-width: 600px){
    text-align: left;
    width: 90%;
    margin-top: 10px;
}
`
const TextHead = styled.div`
text-transform: uppercase;
font-size: 25px;
font-family: work sans;
font-weight: 600;
text-align: center;
color: #7b69dd;
line-height: 35px;
@media screen and (max-width: 600px){
    font-size: 22px;
    text-align: left;
}


@media screen and (max-width:500px){
   
}
`

const Headings = styled.div`
display: flex;
flex-direction: column;
width: 50%;
/* align-items: center; */
font-family: work sans;
margin-bottom: 80px;
@media screen and (max-width: 1220px){
    width: 60%;
}
@media screen and (max-width: 1020px){
    width: 70%;
    /* background: purple; */
    align-items: center;
}

@media screen and (max-width: 950px){
    width: 80%;
    /* background: red; */
}
@media screen and (max-width: 880px){
    width: 100%;
    /* background: red; */
}
@media screen and (max-width: 700px){
    margin-bottom: 40px;
}
@media screen and (max-width: 600px){
    width: 100%;
    align-items: flex-start;
    /* background: red; */
}

`

const ItemsWrapper = styled.div`
width: 82%;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: green; */
`
const Wrapper = styled.div`
width: 100%;
min-height: 70vh;
height: 100%auto;
display: flex;
align-items:center;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
min-height: 95vh;
display: flex;
height:100%auto;

@media screen and (max-width: 1265px){
    margin-top: 30px;
}
@media screen and (max-width: 1100px){
    min-height: 88vh;
}
`