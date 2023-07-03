import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { AiOutlineSend } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
const Contact = () => {
    return (
        <div className='bg-[#180735]'>
            <div className='w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10'>
                <div>
                    <img src="contact.PNG"></img>
                </div>
                <div>
                    <h1 className='text-[#59c378] text-4xl  pt-20 pb-10 font-bold'>| Contact Me</h1>
                    <p className='text-white flex gap-2 items-center pl-4 mb-4'><CiLocationOn className="w-8 h-8" /> Kalachadpur, Baridhara Main Road, Dhaka-1212</p>
                    <p className='text-white flex gap-2 items-center pl-4 mb-4' ><MdOutlineEmail className="w-8 h-8" /> samirfaisal16@gmail.com</p>
                    <p className='text-white flex gap-2 items-center pl-4 mb-4' ><BsFillTelephoneForwardFill className="w-8 h-8" /> +880-1614160436</p>
                    <div className='mt-10 pl-4'>
                        <h1 className='text-white text-lg'>Follow Me: </h1>
                        <div className='mt-4 flex gap-3'>
                            {/* whatsapp */}
                            <a href='https://wa.me/qr/ZLXVCWYHUEB5H1' target="_blank" ><FaWhatsapp className='w-10 h-10 p-2 rounded-full border-2 border-pink-300 text-white' /></a>
                            {/* LinkedIn */}
                            <a href='https://www.linkedin.com/in/samir-faisal-a27500190/' target="_blank" ><FaLinkedinIn className='w-10 h-10 p-2 rounded-full border-2 border-pink-300 text-white' /></a>
                            {/* Github */}
                            <a href='https://github.com/Faisal-Samir' target="_blank"><AiFillGithub className='w-10 h-10 p-2 rounded-full border-2 border-pink-300 text-white' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;