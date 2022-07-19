import React from "react"
import styled from 'styled-components'
import img from "./images/hero.png"
import {Link} from "react-router-dom"


const HeroPage = ()=>{
   
    const [counter, setCounter] = React.useState(0)

    const holdText = [
        {text: "Guardians"},
        {text: "Moms"},
        {text: "Dads"},
    ]

    const colorHold = [
        {cl: "blue"},
        {cl: "#7b69dd"},
        {cl: "green"},
    ]

    React.useEffect(()=>{
        setInterval(()=>{
            setCounter((e)=>e+1)
        },3000)
    },[])

    


    const oneText = holdText[counter % holdText.length]
    const oneColor = colorHold[counter % colorHold.length]

    return (
        <Container>
            <Wrapper>
            <LeftItems>
            
            <ContentHead style={{display: "inline-block"}}>Superhero  <nobr style={{color: `${oneColor.cl}`}}>{oneText?.text}</nobr> {" "}save and Invest for Their Kids</ContentHead>
            <Contents>Become a super hero parent by securing the financial future of your child early enough.</Contents>
            <Button to="/signup">Create A Free Account</Button>
            </LeftItems>
            <Image src={img}/>
            </Wrapper>
        </Container>
    )
}
export default HeroPage
const Button = styled(Link)`
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

:hover{
    cursor: pointer;
    transform: scale(1.02);
}
@media screen and (max-width: 550px){
    width: 100%;
    height: 45px;
    font-size: 13px;
}
@media screen and (max-width: 450px){
height: 42px;

}

@media screen and (max-width: 390px){
    margin-bottom: 10px;
}
`
const ContentHead = styled.span`
font-family: work sans;
font-weight: 600;
font-size: 40px;
display: flex;
line-height: 55px;
letter-spacing: 0.3px;
text-align: left;
color: ${({cl})=>cl};
@media screen and (max-width: 1080px){
    font-size: 35px;
    line-height: 50px;
}
@media screen and (max-width: 1000px){
    font-size: 30px;
    line-height: 41px;
}
@media screen and (max-width: 880px){
    font-size: 40px;
    text-align: center;
    line-height: 55px;
}
@media screen and (max-width: 550px){
    font-size: 35px;
    line-height: 45px;
}
@media screen and (max-width: 480px){
    font-size: 27px;
    line-height: 40px;
}

@media screen and (max-width: 400px){
    font-size: 25px;
    line-height: 35px;
    font-weight: semiBold 600;
}

`
const Contents = styled.div`
display: flex;
font-family: work sans;
font-size: 18px;
margin: 30px 0;
line-height: 30px;
@media screen and (max-width: 1080px){
    line-height: 25px;
}
@media screen and (max-width: 1000px){
    font-size: 17px;
}
@media screen and (max-width: 880px){
    font-size: 18px;
    text-align: center;    
}
@media screen and (max-width: 450px){
    font-size: 15px;
}
`
const Image = styled.img`
width: 550px;
height: 450px;
border-radius: 10px;
object-fit: center;
@media screen and (max-width: 1400px){
    width: 520px;
    height: 420px;
}
@media screen and (max-width: 1350px){
    width: 480px;
    height: 380px;
}
@media screen and (max-width: 1290px){
    width: 450px;
    height: 350px;
}
@media screen and (max-width: 1000px){
    width: 410px;
    height: 310px;
}
@media screen and (max-width: 880px){
    /* display: none; */
    margin-top: 50px;
    margin-bottom: 30px;
    width: 100%;
    height: 400px;
}
@media screen and (max-width: 590px){
    height: 300px;
}
@media screen and (max-width: 580px){
    height: 270px;
}
@media screen and (max-width: 390px){
    height: 230px;
}
@media screen and (max-width: 340px){
   margin: 20px 0;
}
@media screen and (max-width: 360px){
  height: 190px;
}
`
const LeftItems = styled.div`
width:580px;
@media screen and (max-width: 1350px){
    width: 550px;
}
@media screen and (max-width: 1290px){
    width: 500px;
    margin-right: 30px;
}
@media screen and (max-width: 880px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0px;
}
@media screen and (max-width: 500px){
    // margin-top: -100px;
}
`
const Container = styled.div`
width: 100%;
min-height: calc(85vh - 85px);
height: 100%auto;
display: flex;
background-color: #fafcff; 
//  background-color:red;
justify-content: center;
margin-bottom: 20px;
@media screen and (max-width: 665px){
    min-height: calc(75vh - 85px); 
}

@media screen and (max-width: 883px){
    // padding-bottom: 20px;
    padding-top: 40px;

}

`
const Wrapper = styled.div`
width: 82%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: green; */

@media screen and (max-width: 883px){
    flex-wrap: wrap;
    justify-content: center;
}

@media screen and (max-width: 880px){
   

}

`