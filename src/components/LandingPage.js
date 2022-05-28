import React from "react"
import AboutComp from "./AboutComp"
import HeroPage from "./HeroPage"
import LandingHeader from "./LandingHeader"

const LandingPage = ()=>{
    return(
        <div>
        <LandingHeader/>
        <HeroPage/>
        <AboutComp/>
        </div>
    )
}

export default LandingPage