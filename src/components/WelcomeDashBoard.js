import React from "react"
import styled from "styled-components"
import Header from "./Header"

const WelcomeDashBoard = ()=>{
    return (
        <Container>
        <Header/>
        <DashContainer>
        Welcome to DashBoard
        </DashContainer>
        
        </Container>
    )
}

export default WelcomeDashBoard


const Container = styled.div`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;
height: 100vh;
`
const DashContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
font-size: 40px;
color: #7B69DD;
flex-wrap: wrap;
font-weight: 600;
text-align: center;
font-family: work sans;
height: calc(100vh - 85px);
`