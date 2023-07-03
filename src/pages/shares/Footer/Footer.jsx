import React from 'react';
import icon from '../../../assets/samir.jpeg';
import ActiveLink from '../../../components/NavLink/ActiveLink';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content ">
                {/*  */}
                <div className='w-5/6 mx-auto pl-8 grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 justify-around'>
                    <div>
                        <img className='border-2 w-9 h-9 lg:w-12 lg:h-12 rounded-full' src={icon} alt="" />
                        <p className='text-2xl'>Samir Faisal</p>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='footer-title'>Portfolio</h1>
                        <p className='hover:text-[#59c378]'><ActiveLink to='/' >Home</ActiveLink></p>
                        <p className='hover:text-[#59c378]' ><ActiveLink to='/about'>About</ActiveLink></p>
                        <p className='hover:text-[#59c378]' ><ActiveLink to='/skills'>Skills</ActiveLink></p>

                        <p className='hover:text-[#59c378]' ><ActiveLink to='/education'>Education</ActiveLink></p>

                        <p className='hover:text-[#59c378]' ><ActiveLink to='/project'>Projects</ActiveLink></p>
                        <p className='hover:text-[#59c378]' ><ActiveLink to='/contact'>Contact Me</ActiveLink></p>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
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
            </footer>
        </div>
    );
};

export default Footer;