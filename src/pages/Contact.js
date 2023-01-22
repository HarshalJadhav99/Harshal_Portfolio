import Aos from 'aos'
import React from 'react'

const Contact = () => {
    Aos.init()
    return (
        <>
            <section className='pf_contact_section' id='contact'  data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h2 className='d-flex flex-column align-items-end'>Contact details
                                <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18.7327C13.8854 9.74093 29.4859 8.69377 43.6964 6.03115C65.1095 2.01897 86.6266 1.40829 108.405 2.01061C137.628 2.81881 166.558 7.3721 195.577 11.0296" stroke="blue" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </h2>
                                <p class="p-heading">For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email <a class="blue no-line" href="#your-link">contact@domain.com</a></p>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <form className='custom_form'>
                                <div className="form-group mb-3">
                                    
                                    <input type="name" className="form-control-input" id="exampleInputname"  aria-describedby="nameHelp" />
                                    <label class="label-control" for="cname">Name</label>
                                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                </div>
                                <div className="form-group mb-3">
                                    
                                <input type="email" className="form-control-input" id="exampleInputEmail1"  aria-describedby="emailHelp" />
                                <label class="label-control" for="cemail">Email</label>

                                </div>
                                <div className="form-group mb-3">
                                <textarea class="form-control-input" id="floatingTextarea"></textarea>
                                <label class="label-control" for="ccomment">Comment</label>

                                </div>
                                <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Submit</button>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact