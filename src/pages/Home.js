import React from 'react'
import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import Hero from './Hero'
import Projects from './Projects'
import Service from './Service'
import WhyWork from './WhyWork'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Service />
            <WhyWork />
            <Projects/>
            <Faq />
            <Contact />
            
        </>
    )
}

export default Home