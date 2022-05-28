import React from 'react';
import styled from "styled-components"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import axios from "axios"
import { Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addFirstname,addLastname,addEmail,addPassword} from "./Redux/EarliReducers"

const RegisterCard = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const dispatch1 = useDispatch()
    const dispatch2 = useDispatch()
    const dispatch3 = useDispatch()

    const [toggle, setToggle] = React.useState(false)
    const [me, setMe] = React.useState("")
    const [checktoggle, setCheckToggle] = React.useState(false)

const schemaShape = yup.object().shape({
    firstname: yup.string().required("this field is required"),
    email: yup.string().required(),
    surname: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")])

})


    const {register, handleSubmit, formState:{errors}, reset} = useForm({resolver:yupResolver(schemaShape)})

    const submit = handleSubmit(async (data)=>{
        console.log(data)

        const {firstname, surname, email, password} = data

        dispatch(addFirstname(firstname))
        dispatch1(addLastname(surname))
        dispatch2(addEmail(email))
        dispatch3(addPassword(password))

        const mainLink = "https://earli.herokuapp.com"
        

    const res =  await axios.post(`${mainLink}/register`, {firstname, lastname:surname, email, password})

         console.log(res)

         navigate("/verify")
    reset()
    })

    const onToggle = ()=>{
        setToggle(!toggle)
    }
    const onCheckToggle = ()=>{
        setCheckToggle(!checktoggle)
    }
  return (
    <RightComp onSubmit={submit}>
    <RegisterCardWrapper>
    <CreateHeading>Create An Account</CreateHeading>
    <CreateSub>Fill in all necessary details to proceed</CreateSub>
    <InputsHolder>
    <NamesInputHolder>
    <OneInputHold>
    <LabelHold><NamesCont>First Name</NamesCont>
    <Error>
        {errors?.firstname?.message}
        </Error>
    </LabelHold>
    <NameInput 
    {...register("firstname")}
 
    />
    </OneInputHold>
    <OneInputHold>
    <LabelHold><NamesCont>Last Name</NamesCont>
    <Error>
        
        {errors?.surname?.message}
        </Error>
    </LabelHold>
    <NameInput
    {...register("surname")}
    />
    </OneInputHold>
    </NamesInputHolder>
    <InputsAndLabel>
    <LabelHold><Label>Email Address</Label>
    <Error>
        {errors?.email?.message}
    </Error>
    </LabelHold>
    <Input type="text" style={{height: "32px"}}
    {...register("email")}
    />
    </InputsAndLabel>
    <InputsAndLabel>
    <LabelHold><Label>Choose Password{me}</Label>
    <Error>
        {errors?.password?.message}
    </Error>
    </LabelHold>
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
    //   {...register("password")}
      />
      <IconImage
      onClick={()=>{
        onToggle()
      }}/>
      </InputPassword>}
    </InputsAndLabel>

    </InputsHolder>
    <CheckAndText>
    <CheckInput type="checkbox"
    
    onClick={()=>{
        onCheckToggle()
    }}/>
    <CheckTxt>
    I have read I agree to Eali's
    <code style={{color: "#7b69dd"}}>{" "}Privacy Policy</code> & <code style={{color: "#7b69dd"}}>Terms and Conditions</code></CheckTxt>
    </CheckAndText>

    {checktoggle? <Button type="submit" bg="#7b69dd" tr>Create an Account</Button>:<Button1 bg="lightgray" >Sign Up</Button1>}
    <RouteToSignUp>
    <RouteText>Already Have an Account?</RouteText>
    <RouteNav to="/login">Sign In</RouteNav>
    </RouteToSignUp>
    </RegisterCardWrapper>
    </RightComp>
  );
}

export default RegisterCard;

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
font-family: work sans;
color: #7B69DD;
cursor: pointer;
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
display: flex;
justify-content:center;
border: none;
align-items: center;
color: white;
font-size: 15px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
font-family: work sans;
:hover{
    transform: scale(${({tr})=>tr? 1.02: 1});
}
`
const Button1 = styled.div`
width: 100%;
background-color: ${({bg})=>bg};
height: 40px;
border-radius: 5px;
display: flex;
justify-content:center;
border: none;
align-items: center;
color: white;
font-size: 15px;
transform: scale(1);
transition: all 350ms;
cursor: pointer;
font-family: work sans;
:hover{
    transform: scale(${({tr})=>tr? 1.02: 1});
}
`
const CheckTxt = styled.div`
font-size: 11px;
font-family: poppins;
code{
  font-family: work sans;
}
`
const CheckInput = styled.input`
width: 18px;
height: 18px;
margin-right: 8px;
background-color: black;
border-radius: 0px;
&:checked{
background-color: green;
}
`
const CheckAndText = styled.div`
margin-bottom: 30px;
display: flex;
align-items: center;
font-family: work sans;
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
font-size: 22px;
color: gray;
margin-right: 4px;
cursor: pointer;
background-color:white;
`
const IconImage = styled(AiOutlineEyeInvisible)`
height: 100%;
font-size: 22px;
cursor: pointer;
color: grey;
margin-right: 3px;
background-color:white;
`
const NameInput = styled.input`
height: 35px;
outline: none;
border: 1px solid lightgray;
margin-top: 8px;
border-radius: 5px;
padding: 5px;
width: 168px;
font-size: 14px;
font-weight: 450;
font-family: work sans;
@media screen and (max-width:1130px ){
    width: 150px;
}
@media screen and (max-width: 380px){
  width: 94%;
  height: 32px;
}
`

const NamesCont = styled.div`
font-size: 12px;
font-weight: bold;
@media screen and (max-width: 1000px){
    font-size: 10px;
}
`
const OneInputHold = styled.div`
width: 180px;
/* background-color: red; */
@media screen and (max-width:1130px ){
    width: 165px;
}
@media screen and (max-width: 380px){
  width: 45%;
}
/* background-color: orange; */
`


const NamesInputHolder = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 15px 0;
@media screen and (max-width: 380px){
  margin: 10px 0;
}
/* background-color: purple; */
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
font-size: 14px;
color: lightgray;
margin-bottom: 20px;
margin-top: 6px;
font-family: work sans;
@media screen and (max-width: 1000px){
    font-size: 13px;
}
@media screen and (max-width:450px){
    display: flex;
    justify-content:center;
}
`


const CreateHeading = styled.div`
font-weight: bold;
font-size: 18px;
margin-top: 30px;
font-family: poppins;
@media screen and (max-width: 1000px){
    font-size: 16px;
}
@media screen and (max-width:450px){
    display: flex;
    justify-content:center;
}

`
const RegisterCardWrapper = styled.div`
width: 415px;
justify-content: center;
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
height: 570px;

display: flex;
margin-right: 40px;
justify-content:center;
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
}
@media screen and (max-width:450px){
    width: 100%;
    background-color: #fafcff;
    box-shadow: none;
}

`

