import React from 'react'
import styled from "styled-components"
import img from "../../images/register.png"
import img1 from "../../images/avatar.png"
import pig from "../../images/piggyimage.png"
import { useNavigate } from 'react-router-dom'

const VideoCard = () => {
  const navigate = useNavigate()
  return (
    <Container onClick={()=>{
      navigate("/education/view")
    }} >
        <Image src={pig} />
        <Title>Financial Freedom Formula</Title>
        <ProfileAndName>
          <Profile src={img1} />
          <Name>Joshua Erute</Name>
        </ProfileAndName>
        <DateAndViews>
          <DateAndViewsWrapper>
          <Date>Posted: 3 May 2022</Date>
          <Views>51.1k Views</Views>
          </DateAndViewsWrapper>
        </DateAndViews>
    </Container>
  )
}

export default VideoCard

const Views = styled.div`
font-size: 11px;
color: #606060;
`
const Date = styled.div`
font-size: 11px;
color: #7B69DD;
`
const DateAndViewsWrapper = styled.div`
width: 85%;
display:flex;
justify-content: space-between;
align-items: center;
margin: 15px 0;
`
const DateAndViews = styled.div`
width: 100%;
border-top: 1px solid #EBEFF2;
display:flex;
justify-content: center;

`
const Name = styled.div`
font-size: 11px;
color: #606060;
fill: solid;
`


const Profile = styled.img`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: red;
margin-right: 5px;
object-fit: cover;

`
const ProfileAndName = styled.div`
width: 85%;
display:flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 15px;
`
const Title = styled.div`
width: 85%;
font-size: 14px;
font-weight: 550;
margin-top: 15px;
line-height: 20px;
margin-bottom: 20px;

`
const Image = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
`
const Container = styled.div`
width: 230px;
background-color: white;
height: auto;
display:flex;
align-items: center;
flex-direction: column;
box-shadow: 0px 6px 18px 0px #68686A0F;
cursor: pointer;
transition:all 350ms;
border-radius: 5px;
margin: 8px;
:hover{
  transform: scale(1.02);
}

`