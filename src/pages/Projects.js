import React, { Component } from 'react'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import Aos from 'aos';

const Projects = () => {
    Aos.init();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className='pf_project_section' data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className='pf_project_heading'>
                                <h2 className='d-flex flex-column align-items-end'>My Selected Projects
                                    <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18.7327C13.8854 9.74093 29.4859 8.69377 43.6964 6.03115C65.1095 2.01897 86.6266 1.40829 108.405 2.01061C137.628 2.81881 166.558 7.3721 195.577 11.0296" stroke="blue" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row pf_project_card_container">

                        <div class="col-3 box" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <NavLink to={"/project1"}> <div class="imgBx">
                              <img src="https://live.staticflickr.com/65535/52598809667_357cf54b61.jpg"/>
                            </div>
                                <div class="content">
                                    <div>
                                        <h2>KollabTree-Green</h2>
                                        <p>Kolabtree helps businesses of all sizes consult top scientist to take their projects to sucess.
                                        </p>
                                    </div>
                                </div></NavLink>
                        </div>
                        <div class="col-3 box" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <NavLink to={"/project2"}>
                                <div class="imgBx">
                                    <img src="https://dl.dropboxusercontent.com/s/0ml3kgam46dvwvt/details-background.jpg?dl=0" />
                                </div>
                                <div class="content">
                                    <div>
                                        <h2>Plantify Plant Shop</h2>
                                        <p>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-3 box" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <NavLink to={"/project3"}>
                                <div class="imgBx">
                                    <img src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                                </div>
                                <div class="content">
                                    <div>
                                        <h2>Sales Web App UI</h2>
                                        <p>Fastest & Simple Way To Generate Growing Business Solutions With Our Products.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div class="col-3 box" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
                            <NavLink to={"/project4"}>
                                <div class="imgBx">
                                    <img src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                                </div>
                                <div class="content">
                                    <div>
                                        <h2>Digital Shop</h2>
                                        <p>Created E-Commerce Shop Web App For Client With Cart Functionality.
                                        </p>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    </div>
                    {/* <div class="container">
                            <div class="row pf_pro_main_card">
                                <Slider {...settings}>
                                    <div class="col-4 pf_pro_card_effect">
                                        <div class="photo-container" style={{ backgroundImage: "url('../header-background.jpg');" }}></div>
                                        <h2>Heading 1 </h2>
                                        <div class="slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                    <div class="col-4 pf_pro_card_effect">
                                        <div class="photo-container" style={{ backgroundImage: "url(img-1.jpg);" }}></div>
                                        <h2>Heading 2 </h2>
                                        <div class="slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                    <div class="col-4 pf_pro_card_effect">
                                        <div class="photo-container" style={{ backgroundImage: "url(img-1.jpg);" }}></div>
                                        <h2>Heading 3 </h2>
                                        <div class="slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                    <div class="col-4 pf_pro_card_effect">
                                        <div class="photo-container" style={{ backgroundImage: "url(img-1.jpg);" }}></div>
                                        <h2>Heading 4 </h2>
                                        <div class="slide">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div> */}

                    {/* <div className='col-lg-12'>
                                <div className='pf_pro_cards'> Card</div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='pf_pro_cards'> Card</div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='pf_pro_cards'> Card</div>
                            </div> */}

                </div>

            </section>
        </>
    )
}

export default Projects