import React from "react"
import styled from "styled-components"
import {FcUnlock} from "react-icons/fc"

const ChooseUsComp = () => {

    const [data, setData] = React.useState([
        {
            id: 1,
            topic: "Early Financial Freedom",
            desc: "Creating an account is as easy as you can think,no stress, hassle free and you can start saving for your child.",
            image: "",
            cl: "#ececfc"
        },
        {
            id: 2,
            topic: "Security",
            desc: "Creating an account is as easy as you can think,no stress, hassle free and you can start saving for your child.",
            image: "",
            cl: "#faf1e5"
        },
        {
            id: 2,
            topic: "24/7 Support",
            desc: "Creating an account is as easy as you can think,no stress, hassle free and you can start saving for your child.",
            image: "",
            cl: "rgba(246,229,235,255)"
        },
    ])
    return (
        <Container>
            <Wrapper>
                <ItemsWrapper>
                    <Headings>
                        <TextHead>WHY CHOOSE US</TextHead>
                        <TextSub>
                            We stand out at Earli because we care about 
                            your finances, security and we are always 
                            available to help
                        </TextSub>
                    </Headings>
                    <CardHolder>
                    {data.map((props)=>(
                            <Card>
                            <CardWrapper>
                            <Circle bg={props.cl}>
                                <Image/>
                            </Circle>
                            <Topic>{props.topic}</Topic>
                            <Desc>
                                {props.desc}
                                 </Desc>
                            </CardWrapper>
                        </Card>
                       ))}
                    </CardHolder>
                </ItemsWrapper>
            </Wrapper>
        </Container>
    )
}

export default ChooseUsComp

const Image = styled.img`
width: 30px;
height: 30px;
object-fit: contain;
`

const Circle = styled.div`
width: 45px;
height: 45px;
border-radius: 50%;
background-color: ${({bg})=>bg};
display: flex;
justify-content: center;
align-items: center;
`
const Topic = styled.div`
font-weight: 600;
margin: 20px 0;
`
const Desc = styled.div`
text-align: left;
line-height: 27px;
font-size: 16px;
letter-spacing: 0.1px;
`
const CardWrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
margin-top: 10px;
font-family: work sans;
`
const Card = styled.div`
width: 350px;
/* background-color: purple; */
min-height: 200px;
height: 100%auto;
display: flex;
margin: 15px 0px;
flex-wrap: wrap;
@media screen and (max-width: 840px){
    width: 300px;
}
@media screen and (max-width: 425px){
    width: 100%;
}
`
const CardHolder = styled.div`
display: flex;
flex-wrap: wrap;
/* background: red; */
width: 100%;
justify-content: space-between;
@media screen and (max-width: 600px){

}
`
const TextSub = styled.div`
text-align: center;
margin-top: 20px;
font-size: 16px;
line-height: 28px;
/* background: purple; */
@media screen and (max-width: 880px){
    text-align: left;
    width: 90%;
}
@media screen and (max-width: 600px){
    text-align: left;
    width: 100%;
}
@media screen and (max-width: 350px){
    /* text-align: center; */
    width: 100%;
}
`
const TextHead = styled.div`
text-transform: uppercase;
font-size: 25px;
font-family: work sans;
font-weight: 600;
text-align: center;
@media screen and (max-width: 880px){
    text-align: left;
}
@media screen and (max-width: 350px){
    /* text-align: center; */
    width: 100%;
}
`
const Headings = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
width: 50%;
/* align-items: center; */
font-family: work sans;
margin-bottom: 100px;
/* background: red; */
@media screen and (max-width: 1000px){
    width: 90%;
}
@media screen and (max-width: 880px){
    width: 100%;
    margin-bottom: 30px;
}

@media screen and (max-width: 350px){
    /* text-align: center; */
    width: 100%;
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
background-color: #fafcff;
min-height: 73vh;
height: 100%;
display: flex;
justify-content:center;
padding-bottom: 20px;
`
const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
height:100%:

`