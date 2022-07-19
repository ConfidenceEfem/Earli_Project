import React from "react"
import styled from "styled-components"
import {FiPlus} from "react-icons/fi"

const FAQComp = () => {
    const [data, setData] = React.useState([
        {
            id: 1,
            desc: "How do I create an account on Earli?"
        },
        {
            id: 2,
            desc: "How do I save for diffrent children on my account"
        },
        {
            id: 3,
            desc: "What type of investment plans are available on Earli"
        },
        {
            id: 4,
            desc: "What type of investment plans are available on Earli"
        },
        {
            id: 5,
            desc: "What type of saving plans are available on Earli"
        },
        {
            id: 6,
            desc: "How much does it cost to create an account"
        },
        {
            id: 7,
            desc: "Will there be any maintenance fees on my account"
        },
    ])
    return (
        <Container>
        <Wrapper>
            <ItemsWrapper>
            <Headings>
                    <TextHead>Frequently asked questions</TextHead>
                    <TextSub>
                    We have curated some of the most asked 
                    questions to guide you on what Earli is all about
                    </TextSub>
                </Headings>
                <CardHolder>
                    {data.map((props)=>(
                        <Card key={props.id}>
                        <Desc>{props.desc}</Desc>
                        <Icon/>
                    </Card>
                    ))}
                    
                </CardHolder>

            </ItemsWrapper>
           
        </Wrapper>
    </Container>
    )
}

export default FAQComp

const Icon = styled(FiPlus)`
font-size: 25px;
cursor: pointer;
@media screen and (max-width: 360px){
    font-size: 17px;
}
`
const Desc = styled.div`
font-size: 16px;
font-weight: 600;
font-family: work sans;
line-height: 22px;
width: 80%;
@media screen and (max-width: 700px){
    font-size: 14px;
}
@media screen and (max-width: 500px){
    font-size: 13px;
    font-weight: 500;
}
`
const Card = styled.div`
padding: 25px 0;
border-bottom: solid 0.1px rgb(138,150,160,0.1);
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 700px){
    padding: 20px 0;
}
`
const CardHolder = styled.div`
display: flex;
width: 80%;
flex-direction: column;
@media screen and (max-width: 800px){
    width: 100%;
}
`

const TextSub = styled.div`
text-align: center;
margin-top: 20px;
font-size: 16px;
line-height: 28px;
font-weight: 500;
@media screen and (max-width: 900px){
    /* text-align: left; */
    width: 90%;
    /* color: purple; */
}
@media screen and (max-width: 600px){
    /* text-align: left; */
    width: 90%;
    /* color: green; */
}
@media screen and (max-width: 500px){
    /* text-align: left; */
    width: 100%;
    /* color: green; */
}
@media screen and (max-width: 560px){
    font-size: 14px;
}
`
const TextHead = styled.div`
text-transform: uppercase;
font-size: 25px;
font-family: work sans;
font-weight: 600;
text-align: center;
color: #7b69dd;
@media screen and (max-width: 500px){
    font-size: 20px;
    line-height: 25px;
}
`

const Headings = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: center;
font-family: work sans;
margin-bottom: 80px;
@media screen and (max-width: 1010px){
    width: 70%;
}
@media screen and (max-width: 900px){
    width: 80%;
}
@media screen and (max-width: 800px){
    width: 100%;
}
@media screen and (max-width: 600px){
    margin-bottom: 30px;
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
min-height: 100vh;
display: flex;
height:100%auto;
margin-bottom: 20px;
@media screen and (max-width: 940px){
    margin-top: 30px;
}
`