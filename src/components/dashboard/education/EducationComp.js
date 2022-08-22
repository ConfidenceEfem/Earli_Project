import React from 'react'
import styled from "styled-components"
import EducationHeader from './EducationHeader'
import VideoCard from './VideoCard'



const EducationComp = () => {
  return (
    <Container>
<Wrapper>
<EducationHeader/>
<CardHolder>
<VideoCard/>
</CardHolder>
</Wrapper>

    </Container>
  )
}

export default EducationComp

const CardHolder = styled.div`
width: 100%;
height: auto;
display:flex;
flex-wrap:wrap;
margin-top: 60px;
@media screen and (max-width: 800px){
  margin-top: 30px;
}
@media screen and (max-width: 500px){
  justify-content: center;
}
`
const Wrapper = styled.div`
width: 95%;
display:flex;
flex-direction: column;
align-items: center;
margin-top: 40px;
margin-bottom: 30px;

`
const Container = styled.div`
width: 100%;
justify-content: center;
display: flex;
height: auto;


`