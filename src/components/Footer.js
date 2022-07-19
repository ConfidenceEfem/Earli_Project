import React from "react"
import FooterNavComp from "./FooterNavComp"
import styled from "styled-components"
import SubscribeComp from "./SubscribeComp"
import LastFooterComp from "./LastFooterComp"
const Footer = () => {
    return (
        <Container>
           <FooterNavComp/>
           <LastFooterComp/> 
        </Container>
    )
}

export default Footer

const Container = styled.div`
width: 100%;
background-color: #fafcff
`