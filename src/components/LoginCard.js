import React from 'react';
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addEmail,addPassword} from "./Redux/EarliReducers"
import axios from "axios"


const Login = () => {
    const [toggle, setToggle] = React.useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const dispatch1 = useDispatch()

    const schema = yup.object().shape({
        email: yup.string().email().required("This field is required"),
        password: yup.string().min(4).required("Please put a password")
    })

    const {reset, handleSubmit, formState:{errors}, register} = useForm({resolver:yupResolver(schema)})

    const submit = handleSubmit(async (data)=>{
        console.log(data)

        const {email, password}= data

        dispatch(addEmail(email))
        dispatch1(addPassword(password))

        const mainLink = "https://earli.herokuapp.com"

        axios.post(`${mainLink}/login`, {email,password})

        reset()

        navigate("/verifylogin")
    })

    const onToggle = ()=>{
        setToggle(!toggle)
    }
  
  return (
    <RightComp onSubmit={submit}>
    <RegisterCardWrapper>
    <CreateHeading>Log In To Your Account</CreateHeading>
    <CreateSub>Great to have you here again!</CreateSub>
    <InputsHolder>
    
    <InputsAndLabel>
    <LabelHold><Label>Email Address</Label><Error>{errors?.email?.message}</Error></LabelHold>
    <Input type="text" style={{height: "32px"}}
    {...register("email")}
    />
    </InputsAndLabel>
    <InputsAndLabel>
    <LabelHold><Label>Choose Password</Label><Error>{errors?.password?.message}</Error></LabelHold>
    {toggle? 
      <InputPassword>
      <Input1 type="text" 
      {...register("password")}
      />
      <IconImage1
      onClick={()=>{
        onToggle()
      }}/>
      </InputPassword>:<InputPassword>
      <Input1 type="password" 
      {...register("password")}
      />
      <IconImage
      onClick={()=>{
        onToggle()
      }}/>
      </InputPassword>}
    </InputsAndLabel>
    </InputsHolder>
    <CheckAndText>
  
    <CheckTxt>
    Forgot Password?
    <code style={{color: "#7b69dd"}}>{" "}Reset it </code></CheckTxt>
    </CheckAndText>

   <Button type="submit" bg="#7b69dd" tr>Log in</Button>
    <RouteToSignUp>
    <RouteText>New here?</RouteText>
    <RouteNav to="/signup">Create an Account</RouteNav>
    </RouteToSignUp>
    </RegisterCardWrapper>
    </RightComp>
  );
}

export default Login;

const Error = styled.div`
font-size: 10px;
margin-left: 10px;
color: red;
font-weight: bold;
`
const LabelHold = styled.div`
display: flex;
align-items: center;
`

const RouteNav = styled(Link)`
margin-left: 5px;
color: #7B69DD;
cursor: pointer;
font-family: work sans;
text-decoration: none;
`
const RouteText = styled.div`
font-family: work sans;
`
const RouteToSignUp = styled.div`
display: flex;
font-size: 13px;
justify-content: center;
margin-top: 10px;
font-family: work sans;
`
const Button = styled.button`
width: 100%;
background-color: ${({bg})=>bg};
height: 40px;
border-radius: 5px;
font-family: work sans;
display: flex;
justify-content:center;
border: none;
align-items: center;
color: white;
font-size: 15px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
:hover{
    transform: scale(${({tr})=>tr? 1.02: 1});
}
`

const CheckTxt = styled.div`
font-size: 11px;
font-family: poppins;
`

const CheckAndText = styled.div`
margin-bottom: 40px;
display: flex;
align-items: center;
font-family: work sans;
code{
  font-family: work sans;
}
`
const InputPassword = styled.div`
display: flex;
align-items: center;
outline: 1px solid lightgray;
border: none;
margin-top: 8px;
border-radius: 5px;
@media screen and (max-width: 450px){
    background-color: rgba(255, 255, 255);
}
`
const IconImage1 = styled(AiOutlineEye)`
height: 100%;
font-size: 25px;
color: gray;
margin-right: 4px;
cursor: pointer;
background-color:white;
`
const IconImage = styled(AiOutlineEyeInvisible)`
height: 100%;
font-size: 25px;
cursor: pointer;
color: grey;
margin-right: 3px;
background-color:white;
`
const InputsHolder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* background-color: red; */
width: 100%;
border-top: solid 1px rgba(0,0,0,0.099);
padding-top: 15px;
@media screen and (max-width: 380px){
  padding-top: 10px;
}
`

const Input1 = styled.input`
width: 365px;
outline: none;
height: 35px;
border: none;
padding: 5px;
font-size: 14px;
font-weight: 450;
font-family: work sans;

@media screen and (max-width: 1000px){
    width: 325px;
}

@media screen and (max-width: 450px){
    width: 87%;
    margin-right: 3px;
}
`
const Input = styled.input`
width: 400px;
height: 35px;
outline: 1px solid lightgray;
border: none;
margin-top: 8px;
padding: 5px;
border-radius: 5px;
font-size: 14px;
font-weight: 450;
font-family: work sans;

@media screen and (max-width:1130px ){
    width: 375px;
}
@media screen and (max-width: 1000px){
    width: 335px;
}
@media screen and (max-width: 450px){
    width: 98%;
}
`
const Label = styled.div`
font-size: 12px;
font-weight: bold;
@media screen and (max-width: 1000px){
    font-size: 10px;
}
`
const InputsAndLabel = styled.div`
margin: 15px 0;
/* background-color: red; */
`
const CreateSub = styled.div`
font-size: 13px;
color: lightgray;
margin-bottom: 20px;
margin-top: 6px;
font-family: work sans;
@media screen and (max-width: 600px){
  font-size: 12px;
}
/* @media screen and (max-width:450px){
    display: flex;
    justify-content:center;
} */
`


const CreateHeading = styled.div`
font-weight: bold;
font-size: 24px;
font-family: poppins;
@media screen and (max-width: 1000px){
    font-size: 18px;
}
/* @media screen and (max-width:450px){
    display: flex;
    justify-content:center;
} */

`
const RegisterCardWrapper = styled.div`
width: 415px;
justify-content: center;
height: 90%;
@media screen and (max-width:1130px ){
    width: 390px;
}
@media screen and (max-width: 1000px){
    width: 350px;
}
@media screen and (max-width:450px){
    width: 90%;
}

/* background-color: green; */
`

const RightComp = styled.form`
width: 470px;
background-color: #ffffff;
border-radius: 10px;
height: 470px;
display: flex;
margin-right: 40px;
justify-content:center;
align-items: center;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

@media screen and (max-width: 1230px){
    width: 450px;
}
@media screen and (max-width:1130px ){
    width: 420px;
    margin-right: 0px;
}
@media screen and (max-width: 1000px){
    width: 380px;
    height: 450px;
}
@media screen and (max-width:450px){
    width: 100%;
    background-color: #fafcff;
    box-shadow: none;
    margin-top: 20px;
}



`


