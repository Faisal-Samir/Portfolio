import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineSend } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import image from '../../../assets/faisal.png';
import About from '../../About/About';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import Education from '../../Education/Education';
import Contact from '../../Contact/Contact';
const Home = () => {
    useTitle("Home");
    return (
        <div>
            {/* banner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 bg-gradient-to-r from-[#0d012c] via-[#464a68] to-[#1f0a44]">
                <section className='pl-20 pt-14 w-5/6 mx-auto pb-10'>
                    <h1 className=' text-white text-xl'>WELCOME TO MY PROFILE</h1>
                    <h1 className='mt-4 text-5xl text-white'>Hi I'm <span className='uppercase text-pink-700'>samir faisal</span></h1>
                    <TypeAnimation className='mt-3 text-white'
                        sequence={[
                            'a MERN Stack Developer',
                            1000,
                            'a FULL Stack Web Developer',
                            1000,
                            'a Computer Science Student',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2.5em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <div className='mt-10'>
                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"><a href="mailto:samirfaisal16@gmail.com" className='text-xl px-5 py-4 flex items-center gap-2'>Hire Me <AiOutlineSend className='w-6 h-6' /></a></button>
                    </div>
                    <div className='mt-10'>
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
                </section>
                <div className='pb-10'>
                <img className='img-fluid ' src={image} alt="" />
                </div>
            </div>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;