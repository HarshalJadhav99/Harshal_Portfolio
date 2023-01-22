
import Aos from 'aos'
import React from 'react'
import { Helmet } from 'react-helmet'

const Hero = () => {
    Aos.init()
    return (
        <>
            <section className='pf_hero_section' id='hero' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>

                            <div className='pf_text_lcenter'>
                                <div className='d-flex'>
                                    <h1 className='pf_h1_text_lg static_txt'>I am a </h1>
                                    <ul className='dynamic-txts'>
                                        <li><span>Developer</span></li>
                                        <li><span>Freelancer</span></li>


                                    </ul>
                                </div>
                                <div className='d-flex align-items-center' data-aos="fade   -up"
                                    data-aos-easing="linear"
                                    data-aos-duration="1800">
                                    <button className="btn btn-solid-lg">Discover</button>
                                   
                                    <a className='btn btn-outline-lg' href='#contact'>Contact Me</a></div></div>



                        </div>

                    </div>
                </div>
                {/* <Helmet>  <script src="./assets/js/custom.js" type="text/javascript" /></Helmet> */}
            </section>
        </>
    )
}

export default Hero