import React from "react"
import styled from "styled-components"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const SubscribeComp = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required("Please input your email")
    })
    const {register, handleSubmit, formState:{errors}, reset } = useForm({resolver: yupResolver(schema)})

    const submit= handleSubmit((data)=>{
            console.log(data)

            reset()
    })
    return (
        <Container>
            <Wrapper>
                <Head>
                    <HeadText>Want to Get Update on Our
                        Value Added Values and New Features? </HeadText>
                    <HeadSub>
                        Subscribe to our mailing list 
                        to be in the loop</HeadSub>
                </Head>
                <MailCont onSubmit={submit}>
                 
                <Input placeholder="Your Email address"
                {...register("email")}/>
                    <Button type="submit">Subscribe</Button>
                </MailCont>
            </Wrapper>
        </Container>
    )
}

export default SubscribeComp


const HeadSub = styled.div`
color: white;
font-family: work sans;
margin-top: 15px;
font-size: 15px;
@media screen and (max-width: 1100px){
   margin-top: 10px;
}
@media screen and (max-width: 900px){
    font-size: 13px;
}
@media screen and (max-width: 455px){
    font-size: 11px;
    margin-top: 10px;
}
@media screen and (max-width: 394px){
   font-size:10px;
   margin-top: 8px;
}
/* @media screen and (max-width: 420px){
    font-size: 12px;
    margin-top: 10px;
} */
@media screen and (max-width: 350px){
  
}
`
const HeadText = styled.div`
font-size: 32px;
color: white;
font-family: work sans;
font-weight: 700;
text-align: center;
line-height: 45px;
@media screen and (max-width: 1270px){
    font-size: 28px;
    line-height: 40px;
}
@media screen and (max-width: 1100px){
  font-size: 23px;
  line-height: 30px;
}
@media screen and (max-width: 900px){
    font-size: 20px;
}
@media screen and (max-width: 455px){
     font-size: 18px;
     font-weight: 600;
    line-height: 25px;
}
@media screen and (max-width: 394px){
   font-size:17px;
   
}
@media screen and (max-width: 356px){
    font-size: 15px;
    font-weight: 550;
    /* background-color: red; */
}
@media screen and (max-width: 325px){
    /* font-size: 16px; */
}
`
const Head = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 70%;
margin-bottom: 65px;
margin-top: 30px;
@media screen and (max-width: 1270px){
    width: 80%;
}
@media screen and (max-width: 1100px){
  margin-bottom: 45px;
  margin-top: 20px;
}
@media screen and (max-width: 545px){
    margin-bottom: 30px;
    margin-top: 15px;
}
@media screen and (max-width: 420px){
    width: 83%;
    margin-bottom: 25px;
}
@media screen and (max-width: 372px){
    width: 86%;
    margin-bottom: 22px;
}
@media screen and (max-width: 350px){
    width: 86%;
    margin-bottom: 18px;
    
}
`

const Button = styled.button`
background:#7b69dd;
width: 100px;
height: 40px;
border: none;
outline: none;
border-radius: 5px;
cursor: pointer;
justify-content: center;
align-items: center;
display: flex;
color: white;
font-size: 12px;
font-family: work sans;
margin: 0 20px;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
}
@media screen and (max-width: 1100px){
 height: 30px;
 width: 90px;
 margin: 0 10px;
}
@media screen and (max-width: 410px){
    font-size: 11px;
}
@media screen and (max-width: 398px){
 width: 65px;
 height: 30px;
 font-size: 10px;
 border-radius: 3px;
 margin: 0 3px;
}
`
const Input = styled.input`
display: flex;
flex: 1;
height: 96%;
border: none;
outline: none;
font-family: work sans;
font-size: 15px;
font-weight: 450;
padding: 0 15px;
::placeholder{
    font-size: 12px;
}
@media screen and (max-width: 410px){
   width: 92%;
}
@media screen and (max-width: 398px){
    width: 95%;
}
@media screen and (max-width: 350px){
    ::placeholder{
        font-size: 11px;
    }
    font-size: 13px;
}

`

const MailCont = styled.form`
display: flex;
background-color: #FFFFFF;
width: 55%;
height: 50px;
align-items: center;
border-radius: 4px;
@media screen and (max-width: 1100px){
 height: 40px;
}
@media screen and (max-width: 1000px){
   width: 60%;
}
@media screen and (max-width: 850px){
    width: 70%;
}
@media screen and (max-width: 460px){
    width: 80%;
}
@media screen and (max-width: 350px){
    height: 35px;
}
`

const Wrapper = styled.div`
height: 300px;
background:#7b69dd;
width: 60%;
border-radius: 40px;
display: flex;
flex-direction: column;
align-items:center;
box-shadow: #7b69dd 0px 25px 50px -12px;
/* box-shadow: #7b69dd 0px 20px 30px; */
@media screen and (max-width: 1100px){
 height: 220px;
}
@media screen and (max-width: 850px){
    width: 80%;
}
@media screen and (max-width: 700px){
    border-radius: 30px;
}
@media screen and (max-width: 545px){
    height: 190px;
    border-radius: 20px;
    margin-top: 20px;
}
@media screen and (max-width: 535px){
    width: 80%;
}
@media screen and (max-width: 520px){
    width: 90%;
}
@media screen and (max-width: 460px){
    width: 90%;
}
@media screen and (max-width: 420px){
    border-radius: 15px;
    height: 170px;
}
@media screen and (max-width: 363px){
    border-radius: 11px;
    width: 92%;
}
@media screen and (max-width: 350px){
    border-radius: 12px;    
}
@media screen and (max-width: 330px){
    height: 150px;
}
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 50px;
`
