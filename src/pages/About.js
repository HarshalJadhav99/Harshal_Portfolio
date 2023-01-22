import Aos from 'aos';
import React from 'react'

const About = () => {
    Aos.init();
    return (
        <>
            <section className='pf_about_section' id='about' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4' data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <div className='pf_about_text_first'><h2>Hi there I'm Harshal,</h2><p>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</p></div>
                        </div>
                        <div className='col-lg-4' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">

                            <div class="time">2022 - PRESENT</div>
                            <h6>Freelance Web Developer</h6>
                            <p>Working happily on my own web projects</p>
                            <div class="time">2021-2022</div>
                            <h6>Senior Frontend Web Developer</h6>
                            <p>Inhouse web devloper for ecommerce firm</p></div>
                        <div className='col-lg-4' data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <div class="time">2020-2021</div>
                            <h6>Junior Web Designer</h6>
                            <p>Junior web designer for small web agency</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About