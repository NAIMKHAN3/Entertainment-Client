"use client"
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Lottie from "lottie-react";
import form from '../../form.json'

const FeedBackForm = () => {
    return (
        <div className='my-10 border border-[#00246a] p-5 max-w-6xl mx-auto' >
            <h1 className='text-center text-2xl font-bold text-[#00246a]'>Feedback Form</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div data-aos="zoom-in">
                    <Lottie className="lg:w-[450px]" animationData={form} loop={true} />
                </div>
                <div className=' p-3 m-5' data-aos="zoom-in">
                    <form action="https://formsubmit.co/417feebcad4a5b1b427b4b768f153576" method="POST">
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text my-2">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Type here" className="p-2 my-2 input border input-bordered rounded-lg w-full" required />
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Type here" className="border p-2 my-2input input-bordered w-full" required />
                        </div>
                        
                        <div className="form-control flex flex-col my-2">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea className="textarea border p-2 my-2 textarea-bordered h-24" name='message' placeholder="Type here" required></textarea>
                        </div>
                        <button className='btn bg-[#00246a] border-2 rounded-md py-2 text-white my-5 w-full mx-auto' type='submit'>Submit</button>
                    </form>
                </div>
                <div className='p-3 m-5 text-[#00246a]' data-aos="zoom-in">
                    <h1 className='text-xl mb-10 font-bold'>Name: Entertainment hall</h1>
                    <h1 className='text-xl my-10 font-bold'>Location: Dhaka Bangladesh</h1>
                    <h1 className='text-xl my-10 font-bold'>Phone: +8801855271276</h1>
                    <a href="mailto:kamrul.islam018552@gmail.com" className='text-xl my-10 font-bold'>Email: entertainment@hall.com</a>
                    <div className='flex  items-center text-center my-10'>
                        <a href='https://www.linkedin.com/in/kamrul-islam-9b536a256/'><FaLinkedin className='w-9 h-9 mr-12'></FaLinkedin></a>
                        <a href='https://github.com/NAIMKHAN3' ><FaGithub className='w-9 h-9 mr-12'></FaGithub></a>
                        <a href='https://www.facebook.com/profile.php?id=100007248463813'><FaFacebook className='w-9 h-9 mr-12'></FaFacebook></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBackForm;