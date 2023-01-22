import React from 'react'
import { useNavigate } from 'react-router-dom';

const Plantshop = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate("/");
    };
    return (
        <>
            <section className='pf_project_detail_section'>
                <div className='container'>
                    <div className='row my-5 py-5 '>
                    <div className='col-6 mb-5'>
                            <button className='btn pf_back_btn' onClick={goToHomePage}>Back</button>
                            {/* <button onClick={()=>navigate(-1)}>Go Back</button> */}
                        </div>
                        <div className='col-6 ps-lg-5 mb-5'>
                            <div className='pf_project_info_title'>
                                <h2><strong>Project Info
                                    <svg width="198" height="21" viewBox="0 0 198 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 18.7327C13.8854 9.74093 29.4859 8.69377 43.6964 6.03115C65.1095 2.01897 86.6266 1.40829 108.405 2.01061C137.628 2.81881 166.558 7.3721 195.577 11.0296" stroke="blue" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></strong>
                                </h2>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex'>
                            <div>
                                <img className='pf_project_img' src='assets/images/details-background.jpg' />
                            </div>
                        </div>
                        <div className='col-lg-6 ps-lg-5'>
                            <div className='pf_project_text_box'>
                                <h2>Plantify Plant Shop</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some form.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ipsum consequatur voluptate quis sed
                                    perferendis at sequi a nesciunt fuga harum nulla cumque quasi sunt laborum in explicabo, assumenda ad.</p>
                                    <h4 class="mb-2">Technology</h4>
                                <p> Communication / Social media / Content management systems / Analytics </p>
                                <h4 class="mb-2">Categories </h4>
                                <p>Marketing</p>
                                <a  href='https://harshaljadhav99.github.io/React_Plantify_PlantShop/'>
                                <button className='btn btn-outline-primary'>Project Link</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Plantshop