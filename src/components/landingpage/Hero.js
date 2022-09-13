import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const [counter, setCounter] = React.useState(0)

    const navigate = useNavigate()

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
            <Left>
                <Topic>
                    Superhero {" "}
                    <nobr style={{color: `${oneColor.cl}`}}>{oneText?.text}</nobr>
                    {" "}
                    Save 
                    and Invest
                     for Their Kids
                </Topic>
                <Desc>
                One stop platform
                 that allows
                 parents save and Invest
                 for their children
                  automatically for free.
                </Desc>
                <Button
                     onClick={()=>{
                        navigate("/signup")
                    }}
                >
                Create a free account
                </Button>
                <InsuredBy>
                    <InsuredText>
                        Deposit Insured by 
                    </InsuredText>
                    <InsuredLogo src={"/images/ndic.svg"}/>
                </InsuredBy>
            </Left>
            <Right>
                <RightImage src="https://res.cloudinary.com/confidence/image/upload/v1663082571/girl_znk4kn.jpg"/>
              
            </Right>
            
        </Wrapper>
        <RightPurpleBox></RightPurpleBox>
        <SmallBox></SmallBox>
    </Container>
  )
}

export default Hero

const SmallBox = styled.div`
display: none;
@media screen and (max-width: 867px){
    width: 100%;
display:flex;
height: 200px;
background-color: #7b69dd;
position: absolute;
bottom: -40px;
}
`
const RightPurpleBox = styled.div`
position: absolute;
width: 480px;
height: 100vh;
background-color: #7b69dd;
top: -100px;
right: 0;
/* right: -153px; */
/* z-index: 1; */
@media screen and (max-width: 1315px){
    width: 430px;
} 
@media screen and (max-width: 1175px){
    width: 380px;
}
@media screen and (max-width: 1090px){
    width: 300px;
}
@media screen and (max-width: 867px){
    display: none;
}
`

const RightImage = styled.img`
width: 500px;
height: 500px;
object-fit: cover;
filter: drop-shadow(0px 14px 28px rgba(165, 148, 249, 0.15));
border-radius: 5px;

@media screen and (max-width: 1315px){
    width: 450px;
    height: 450px;
}
@media screen and (max-width: 1175px){
    width: 400px;
    height: 400px;
}
@media screen and (max-width: 1090px){
    width: 350px;
    height: 350px;
}
@media screen and (max-width: 400px){
    width: 300px;
    height: 300px;
}
@media screen and (max-width: 370px){
    width: 280px;
    height: 280px;
}
`

const InsuredLogo = styled.img``

const InsuredText = styled.div`
font-size: 12px;
margin-right: 10px;
opacity: 0.5;
`

const InsuredBy = styled.div`
margin-top: 20px;
display:flex;
align-items: center;
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
line-height: 30px;
width: 480px;
margin: 35px 0;
letter-spacing: 0.5px;
font-weight: 400;
font-size: 17px;
@media screen and (max-width: 1315px){
    width: 450px;
} 
@media screen and (max-width: 867px){
    text-align: center;
    width: 70%;
}
@media screen and (max-width: 600px){
    text-align: center;
    width: 80%;
}
@media screen and (max-width: 500px){
    text-align: center;
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 25px;
}
`

const Topic = styled.div`
font-size: 45px;
line-height: 60px;
font-weight: 800;
font-style: normal;
letter-spacing: 0.3px;
@media screen and (max-width: 1315px){
   font-size: 40px;
} 
@media screen and (max-width: 1040px){
   font-size: 35px;
   letter-spacing: 0.1px;
   line-height: 50px;
}
@media screen and (max-width: 867px){
    width: 65%;
    text-align: center;
}
@media screen and (max-width: 600px){
    width: 75%;
    text-align: center;
}
@media screen and (max-width: 500px){
    width: 80%;
    text-align: center;
    font-size: 28px;
    line-height: 40px;
}
@media screen and (max-width: 460px){
    width: 80%;
    font-size: 24px;
    margin-top: 10px;
}
@media screen and (max-width: 390px){
    width: 80%;
    font-size: 22px;
    line-height: 35px;
}
@media screen and (max-width: 350px){
    width: 85%;
    font-size: 20px;
    /* line-height: 35px; */
}
/* text-align: left; */
`

const Right = styled.div`
z-index: 1;
@media screen and (max-width: 867px){
    margin-top: 50px;
}
`

const Left = styled.div`
display:flex;
flex-direction: column;
width:580px;
/* background-color: red; */

@media screen and (max-width: 1315px){
    width: 520px;
} 
@media screen and (max-width: 1190px){
 width: 480px;
 /* background-color: red; */
} 
@media screen and (max-width: 1175px){
    width: 430px;
}
@media screen and (max-width: 867px){
    width: 100%;
    align-items: center;
}
`

const Wrapper = styled.div`
width: 80%;
display:flex;
justify-content: space-between;
align-items: center;
height: 100%;
@media screen and (max-width: 1090px){
    width: 90%;
}
@media screen and (max-width: 900px){
    flex-wrap: wrap;
}
@media screen and (max-width: 867px){
    justify-content: center;
    z-index: 5;
    /* width: 100%; */
}
/* background-color: green; */
`

const Container = styled.div`
position: relative;
width: 100%;
height: calc(100vh - 100px);
display:flex;
justify-content: center;
font-family: 'Space Grotesk', sans-serif;
background-color: #F8F8FD;
@media screen and (max-width: 867px){
    height: 100%;
    bottom: 0;
    /* margin-bottom: 30px; */
}
`