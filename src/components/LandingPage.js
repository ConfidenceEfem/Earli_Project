import React from "react"
import AboutComp from "./AboutComp"
import ChooseUsComp from "./ChooseUsComp"
import FAQComp from "./FAQComp"
import FeedbackComp from "./FeedbackComp"
import HeroPage from "./HeroPage"
import LandingHeader from "./LandingHeader"
import OneAccountComp from "./OneAccountComp"
import SubscribeComp from "./SubscribeComp"
import Footer from "./Footer"
import CreateInvestment from "./CreateInvestment"
import img from "./images/img.png"
import img2 from "./images/img2.png"
import img3 from "./images/img3.png"

const LandingPage = ()=>{
    return(
        <div>
        <LandingHeader/>
        <HeroPage/>
        <AboutComp/>
        <OneAccountComp/>
        <CreateInvestment  
        image={img}
        fdd
        topic="Create Savings plans for as many children as possible"
        desc="Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child.
       Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child."
        />
        <CreateInvestment 
        image={img2}
        topic="Create investment portfolios for financial freedom"
        desc="Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child.
       Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child."
        />
        <CreateInvestment 
        image={img3}
        fdd
        topic="Save and invest for different children"
        desc="Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child.
       Creating an account is as
        easy as you can think,
       no stress, hassle free
        and you can start 
       saving for your child."
        bt/>
        <ChooseUsComp/>
        <FeedbackComp/>
        <FAQComp/>
        <SubscribeComp/>
        <Footer/>
        </div>
    )
}

export default LandingPage