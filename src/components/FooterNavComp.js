import React from "react"
import styled from "styled-components"
import logo from "./images/earli1.png"
// import {BsYoutube,BsFacebook,BsTwitter,BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube} from "react-icons/fa"

const FooterNavComp = () => {
    return (
        <Container>
            <Wrapper>
                <LogoHolder>
                <Logo src={logo}/>
                </LogoHolder>
                <NavsHolder>
                    <Navigation mr br>
                        <HeadNav>Company</HeadNav>
                        <Navs>About Us</Navs>
                        <Navs>Investor Relations</Navs>
                        <Navs>Careers</Navs>
                        <Navs>Blog</Navs>
                        <Navs>Press</Navs>
                    </Navigation>
                    <Navigation mr ar>
                        <HeadNav>Features</HeadNav>
                        <Navs>Savings</Navs>
                        <Navs>Investments</Navs>
                        <Navs>Financial Education</Navs>
                        <Navs>Skill Up</Navs>
                    </Navigation>
                    <Navigation mr ar br>
                        <HeadNav>Help</HeadNav>
                        <Navs>Contacts</Navs>
                        <Navs>Get Help</Navs>
                        <Navs>FAQs</Navs>
                    </Navigation>
                    <Navigation>
                        <HeadNav>Privacy Policy</HeadNav>
                        <Navs>Terms and Conditions</Navs>
                        <Navs>Cookie Policy</Navs>           
                    </Navigation>
                </NavsHolder>
                <AddressHolder>
                    <AddressNav mr="250px" ar>
                        <HeadAddress>Lagos</HeadAddress>
                        <MainAddress>
                            197, Munroe Avenue, Alabon,
                            <br/>
                            Yaba, Lagos,
                             <br/>
                            Nigeria.
                        </MainAddress>
                    </AddressNav>
                    <AddressNav mr="200px" cr>
                        <HeadAddress>Contacts</HeadAddress>
                        <Navs>help@earli.finance</Navs>
                        <Navs style={{margin: "20px 0"}}>+234 904 547 0945</Navs>
                        <IconHolder>
                            <Icon />
                            <Icon1 />
                            <Icon2 />
                            <Icon3 />
                            <Icon4 />
                        </IconHolder>
                    </AddressNav>
                </AddressHolder>
            </Wrapper>
        </Container>
    )
}

export default FooterNavComp

const Icon4 = styled(FaYoutube)`
cursor: pointer;
`
const Icon3 = styled(FaLinkedin)`
cursor: pointer;
`
const Icon2 = styled(AiFillInstagram)`
cursor: pointer;
`
const Icon1 = styled(FaTwitter)`
cursor: pointer;
`
const Icon = styled(FaFacebook)`
cursor: pointer;
`

const IconHolder = styled.div`
display: flex;
align-items: center;
width: 90%;
justify-content: space-between;
color: #7b69dd;
font-size: 18px;
margin-top: 20px;
`

const MainAddress =styled.div`
font-size: 16px;
line-height: 25px;
@media screen and (max-width: 945px){
   font-size: 15px;
   margin: 9px 0;
}
`
const HeadAddress =styled.div`
font-size: 21px;
color: #7b69dd;
font-weight: 600;
margin-bottom: 20px;
@media screen and (max-width: 945px){
   font-size: 20px;
   margin-bottom: 18px;
}
`
const AddressNav =styled.div`
font-family: work sans;
flex-direction: column;
text-align: left;
margin-right: ${({mr})=>mr};
flex-wrap: wrap;
margin-bottom: 30px;
/* background: green; */
width: 230px;
@media screen and (max-width: 1210px){
    margin-right: ${({ar})=>ar? "70px": null};
    margin-right: ${({cr})=>cr? "0px": null};
}
`

const Navs =styled.div`
font-size: 16px;
margin: 10px 0;
cursor: pointer;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(0.95);
}
@media screen and (max-width: 945px){
   font-size: 15px;
   margin: 9px 0;
}
`

const HeadNav =styled.div`
font-size: 21px;
color: #7b69dd;
font-weight: 600;
margin-bottom: 20px;
@media screen and (max-width: 945px){
   font-size: 20px;
   margin-bottom: 18px;
}
`
const Navigation =styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-right: ${({mr})=>mr? "90px": null};
font-family: work sans;
margin-top: 20px;
margin-bottom: 20px;
/* background: green; */
width:180px;
@media screen and (max-width: 1210px){
    margin-right: ${({mr})=>mr? "50px": null};
}
@media screen and (max-width: 1020px){
    /* margin-right: ${({mr})=>mr? "80px": null}; */
}
@media screen and (max-width: 904px){
    /* margin-right: ${({mr})=>mr? "65px": null}; */
}
@media screen and (max-width: 845px){
    margin-right: ${({ar})=>ar? "0px": null};
    margin-right: ${({mr})=>mr? "40px": null};
}
@media screen and (max-width: 785px){
    /* margin-right: ${({br})=>br? "45px": null}; */
    margin-right: ${({cr})=>cr? "0px": null};
}
@media screen and (max-width: 375px){
    /* margin-right: ${({br})=>br? "45px": null}; */
    margin-right: 0px;
}
`
const LogoHolder = styled.div`
width: 100%;
display: flex;
margin-bottom: 40px;
`
const AddressHolder =styled.div`
display: flex;
flex-wrap: wrap;
/* background: red; */
`

const NavsHolder =styled.div`
display: flex;
width: 100%;
margin-bottom: 80px;
flex-wrap: wrap;
@media screen and (max-width: 950px){
    margin-bottom: 50px;
}
@media screen and (max-width: 600px){
    margin-bottom: 0px;
}
/* background: purple; */
`

const Logo =styled.img`
width: 80px;
height: 35px;
object-fit: contain;
`

const Wrapper = styled.div`
width: 82%;
display: flex;
margin-top: 30px;
flex-direction: column;
/* background: red; */
`
const Container = styled.div`
width: 100%;
min-height: 85vh;
height: 100%auto;
display: flex;
justify-content: center;
`