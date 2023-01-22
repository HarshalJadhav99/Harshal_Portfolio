import Aos from 'aos'
import React from 'react'

const Faq = () => {
    Aos.init()
    return (
        <>
            <section className='pf_faq_section' data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="accordion-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <h2 className="h2-heading d-flex flex-column align-items-end">Frequent questions

                                    <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18.7327C13.8854 9.74093 29.4859 8.69377 43.6964 6.03115C65.1095 2.01897 86.6266 1.40829 108.405 2.01061C137.628 2.81881 166.558 7.3721 195.577 11.0296" stroke="blue" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </h2>
                            </div>
                        </div>
                        <div className="row">

                            <div className='col-lg-12'>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item" data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1200">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                                How can I contact you and quickly get a quote for my online project?

                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">

                                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1400">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">

                                                Do you create designs from the ground up or you are using themes?

                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">

                                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1600">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">

                                                Will I receive any included maintenance or warranty after project delivery?

                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">

                                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details

                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item" data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1800">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">

                                                If something goes wrong with the project can I have my money back?

                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">

                                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details

                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item" data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="2000">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">

                                                What's your preferred method of payment and do you need an advance?

                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">

                                                The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details

                                            </div>
                                        </div>
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

export default Faq