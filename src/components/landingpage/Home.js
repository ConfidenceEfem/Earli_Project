import React from 'react'
import Header from "./Header"
import Hero from './Hero'
import SavingComp from './SavingComp'
import saving from "./landingpageimages/saving.png"
import invest from "./landingpageimages/invest.png"
import education from "./landingpageimages/education.png"
import UniqueLink from './UniqueLink'
import Features from './Features'
import Feedback from './Feedback'
import Footer from './Footer'


const Home = () => {
  return (
    <div
   
    >
        <Header/>
        <Hero/>
        <SavingComp
        image={saving}
        topic="Savings customized for each child"
        desc="Parents can save automatically daily, weekly or monthly for their children with interest up to 15% per annum on our diverse account for short and long term savings."
        plan="Start saving"
        />
        <SavingComp
        image={invest}
        topic="Invest in your child’s future"
        desc="Overcome Inflation by investing in vetted shares, bonds, treasury bills, real estate for your children."
        plan="Start investing"
        fd
        />
        <SavingComp
        image={education}
        topic="Financial Freedom Education"
        desc="Your child would have access to our Financial Freedom School for free to learn about the education of the rich, and also take financial quizzes."
        plan="Get started"
        />
        <UniqueLink/>
        <Features/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Home