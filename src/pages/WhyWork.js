import Aos from 'aos'
import React from 'react'

const WhyWork = () => {
    Aos.init();
  return (
    <>
        <section className='pf_why_section' data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000">
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-lg-6 p-0 d-flex flex-row align-items-lg-stretch'>
                        <div>
                            <img className='why_img' src='assets/images/details-background.jpg' />
                        </div>
                    </div>
                    <div className='col-lg-6 why_rbgcolor'>
                        <div>
                        <div class="why_text_container">
                            <h2 data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000">Why Work With Me</h2>
                            <p data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200">I am a great communicator and love to invest the necessary time to understand the customer's problem very well</p>
                            <h5 data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1400">DESIGN TOOLS</h5>
                            <p data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1600">My favorite designing tools are Figma, Sketch and Adobe XD using that tools will convert the any figma/xd file to html css</p>
                            <h5 data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1800">DEVELOPMENT SKILLS</h5>
                            <p data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="2000">Proficient in  HTML, CSS, JavaScript, Bootstrap, reactjs,  and other modern frameworks</p>
                            
                            <div class="why_icons_container">
                               
                                <img className='figma_custom' src="assets/images/figma.jpg" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"/>
                                <img  src="assets/images/adobexd.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1200"/>
                                <img src="assets/images/details-icon-photoshop.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1400"/>
                                {/* <img src="assets/images/details-icon-illustrator.png" alt="alternative" /> */}
                                <img src="assets/images/details-icon-html.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1600"/>
                                <img src="assets/images/details-icon-css.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1800"/>
                                <img src="assets/images/details-icon-bootstrap.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="2000"/>
                                <img className='reactjs_custom' src="assets/images/reactjs.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="2200"/>
                                <img src="assets/images/details-icon-javascript.png" alt="alternative" data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="2400"/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyWork