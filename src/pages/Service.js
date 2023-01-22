import React from 'react'
import Aos from 'aos';
const Service = () => {
    Aos.init();
    return (
        <><section className='pf_service_section' id='services' data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 d-flex flex-column align-items-center justify-content-center'><h2 className='service_heading d-flex flex-column align-items-end'>Offered services
                        <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 18.7327C13.8854 9.74093 29.4859 8.69377 43.6964 6.03115C65.1095 2.01897 86.6266 1.40829 108.405 2.01061C137.628 2.81881 166.558 7.3721 195.577 11.0296" stroke="blue" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </h2>
                        <p className='service_para'>Web design and development have been my bread and butter for more than 3 years. During that time I've discovered that I can help startups and companies with the following services
                        </p>
                    </div>
                </div>
                {/* <div className='row'>
                <div className='col-lg-4'>
                <div class="service_text_box">
                        <i class="far fa-gem"></i>
                        <h4>DESIGN</h4>
                        <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service_text_box">
                        <i class="fas fa-code"></i>
                       <h4>DEVELOPMENT</h4>
                        <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>
                    </div> 
                </div><div class="col-lg-4">
                    <div class="service_text_box">
                    <i class=" fas fa-store"></i>
                        <h4>E-Commerce Solutions</h4>
                        <p>Providing user friendly design experiance by creating a simple, straightforward, high-quality homepage.
Focusing on creating a responsive website.</p>
                    </div> 
                </div>
            </div> */}
                <div className='row'>
                    <div className='col-lg-4' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className='pf_custom_service_card text-center shadow'>
                            <div className='pf_scard_icon'>
                                <span className='pf_flaticon'>
                                    <i class="far fa-gem"></i>
                                </span>

                            </div>
                            <div className='pf_custom_card_text_content'>
                                <h5><a href="services.html">DESIGN</a></h5>
                                <p>Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth</p>

                            </div>

                        </div>
                    </div><div className='col-lg-4' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className='pf_custom_service_card text-center shadow'>
                            <div className='pf_scard_icon'>
                                <span className='pf_flaticon'>
                                    <i class=" fas fa-store"></i>
                                </span>

                            </div>
                            <div className='pf_custom_card_text_content'>
                                <h5><a href="services.html">DEVELOPMENT</a></h5>
                                <p>I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability</p>

                            </div>

                        </div>
                    </div><div className='col-lg-4' data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className='pf_custom_service_card text-center shadow'>
                            <div className='pf_scard_icon'>
                                <span className='pf_flaticon'>
                                    <i class="far fa-gem"></i>
                                </span>

                            </div>
                            <div className='pf_custom_card_text_content'>
                                <h5><a href="services.html">E-Commerce Solutions</a></h5>
                                <p>Providing user friendly design experiance by creating a simple, straightforward, high-quality homepage.</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}

export default Service