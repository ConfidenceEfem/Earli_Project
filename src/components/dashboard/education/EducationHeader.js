import React from 'react'
import styled from "styled-components"
import img from "../../images/searchvideo.png"

const EducationHeader = () => {
  return (
    <Container>
        <NavsHolder>
            <Navs>All Videos</Navs>
            <Navs1>Recently Posted</Navs1>
            <Navs2>Savings Videos</Navs2>
            <Navs3>Investment Videos</Navs3>
        </NavsHolder>
        <SearchHolder>
            <Search src={img}/>
            <Input placeholder="Search Videos"/>
        </SearchHolder>
    </Container>
  )
}

export default EducationHeader

const Input = styled.input`
border:none;
width: 85%;
outline: none;
 font-size: 14px;
   
    font-family: work sans;

::placeholder{
    font-size: 12px;
    color: #D9D9D9;
    font-family: work sans;
}
`
const Search = styled.img`
margin: 0 5px;
`
const Navs3 = styled.div`
width:140px;
height:Hug (42px);
border-radius:41px;
padding:14px;
background: red;
gap:10px;
text-align: center;
font-size: 14px;
cursor: pointer;
margin: 0 5px;
color: #7B69DD;
background-color: rgba(123, 105, 221, 0.1);
@media screen and (max-width: 1293px){
    width:100px;
    font-size: 13px;
}
@media screen and (max-width: 1074px){
    width:90px;
    font-size: 12px;
    border-radius:35px;
    margin: 0 3px;
}
`

const Navs2 = styled.div`
width:130px;
height:Hug (38px);
border-radius:41px;
padding:14px;
background: red;
gap:10px;
text-align: center;
font-size: 14px;
cursor: pointer;
margin: 0 5px;
color: #7B69DD;
background-color: rgba(123, 105, 221, 0.1);
@media screen and (max-width: 1293px){
    width:100px;
    font-size: 13px;
}
@media screen and (max-width: 1074px){
    width:80px;
    font-size: 12px;
    border-radius:35px;
    margin: 0 3px;
}
`
const Navs1 = styled.div`
width:130px;
height:Hug (38px);
border-radius:41px;
padding:14px;
background: red;
gap:10px;
text-align: center;
font-size: 14px;
cursor: pointer;
margin: 0 5px;
color: #7B69DD;
background-color: rgba(123, 105, 221, 0.1);
@media screen and (max-width: 1293px){
    width:100px;
    font-size: 13px;
}
@media screen and (max-width: 1074px){
    width:80px;
    font-size: 12px;
    border-radius:35px;
    margin: 0 3px;
}
`
const Navs = styled.div`
width:100px;
height:Hug (38px);
border-radius:41px;
padding:10px;
background: red;
gap:10px;
text-align: center;
font-size: 14px;
cursor: pointer;
margin: 0 5px;
color: white;
background-color: #7B69DD;
@media screen and (max-width: 1293px){
    width:90px;
    font-size: 13px;
}
@media screen and (max-width: 1074px){
    width:80px;
    font-size: 12px;
}
`
const SearchHolder = styled.div`
height: 37px;
width: 339px;
border-radius: 6px;
border: 1px solid #D9D9D9;
background-color: white;
padding: 5px;
display:flex;
align-items: center;
color: #D9D9D9;
@media screen and (max-width: 1293px){
    width: 320px;
}
@media screen and (max-width: 1120px){
    width: 280px;
}
@media screen and (max-width: 800px){
    width: 350px;
 }

`

const NavsHolder = styled.div`
display:flex;
align-items: center;
@media screen and (max-width: 800px){
   display:none;
}
`
const Container = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 800px){
    justify-content: center;
 }
`