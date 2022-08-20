import React from 'react'
import styled from "styled-components"
import {AiOutlineLeft} from "react-icons/ai"
import img from "../../../images/register.png"
import pig from "../../../images/piggyimage.png"
import video from "../../../images/wealth-color-earli.mp4"
import { useNavigate } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'

const EducationViewComp = () => {
    const navigate = useNavigate()
  return (
    <Container>
<Wrapper>
<IconAndBack>
<Hold onClick={()=>{
    navigate("/education")
}}>
<AiOutlineLeft/>
    <Back>Back</Back>
</Hold>
</IconAndBack>
<VideoScreen>
    <VideoScreenWrapper>
            <VideoTag>
                <Video loop controls autoPlay pl src={video}/>
                {/* <ReactPlayer url={video} controls playing playIcon={true}/> */}
            </VideoTag>
            <MoreVideoComp>
                <Title>More Videos Like This</Title>
                <OtherVideosHolder>
                    <OtherCard>
                        <Image src={pig}/>
                        <TextHold>
                            <OtherTitle>How to Grow Your Money Early</OtherTitle>
                            <DatePosted>Posted: 3 May 2022</DatePosted>
                            <Views>45.2k Views</Views>
                        </TextHold>
                    </OtherCard>
                    <OtherCard>
                        <Image src={img}/>
                        <TextHold>
                            <OtherTitle>How to Grow Your Money Early</OtherTitle>
                            <DatePosted>Posted: 3 May 2022</DatePosted>
                            <Views>45.2k Views</Views>
                        </TextHold>
                    </OtherCard>
                    
                </OtherVideosHolder>
            </MoreVideoComp>
    </VideoScreenWrapper>
</VideoScreen>
</Wrapper>

    </Container>
  )
}

export default EducationViewComp

const Views = styled.div`
// font-family: DM Sans;
font-size: 10px;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
color: #606060;

`

const DatePosted = styled.div`
margin: 10px 0;
// font-family: DM Sans;
font-size: 10px;
font-weight: 400;
line-height: 13px;
letter-spacing: 0em;
text-align: left;
color: #7B69DD;
`
const OtherTitle = styled.div`
// font-family: DM Sans;
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #000000;


`
const TextHold = styled.div`
display:flex;
flex-direction:column;
`
const Image = styled.img`
width: 75px;
height: 85px;
object-fit: cover;
margin-right: 15px;
border-radius: 3px;
`
const OtherCard = styled.div`
display:flex;
align-items: center;
margin: 10px 0;
`
const OtherVideosHolder = styled.div`
display:flex;
flex-direction:column;
`
const Title = styled.div`
font-size: 14px;
font-weight: 600;
margin-bottom: 10px;
`
const MoreVideoComp = styled.div`
width: 25%;
display:flex;
flex-direction:column;
`
const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
`
const VideoTag = styled.div`
width: 72%;
height: 100%;
display:flex;
justify-content: center;
`
const VideoScreenWrapper = styled.div`
width:94%;
height: 90%;
display:flex;
justify-content:space-between;
`
const VideoScreen = styled.div`
height: 500px;
width: 100%;
background-color: white;
border-radius: 8px;
display:flex;
justify-content: center;
align-items: center;
`
const Hold = styled.div`
display:flex;
cursor: pointer;
`
const Back = styled.div`
font-size: 15px;
font-weight: 500;
margin-left: 3px;
`
const IconAndBack = styled.div`
width: 100%;
display:flex;
align-items: center;
font-size: 16px;
margin-bottom: 30px;


`

const Wrapper = styled.div`
width: 95%;
display:flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
margin-bottom: 30px;

`
const Container = styled.div`
width: 100%;
justify-content: center;
display: flex;
height: auto;


`