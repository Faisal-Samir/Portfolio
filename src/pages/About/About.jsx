import React from 'react';
import about from '../../assets/aboutUs.png'
import { BiDownload } from 'react-icons/bi';
const About = () => {
    return (
        <div className='pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center bg-[#180735]'>
            <div>
                <img className='pl-14  ' src={about} alt="" />
            </div>
            <div className='mr-14'>
                <h4 className='pl-10 lg:pl-0 uppercase text-[#59c378] font-bold font-mono text-2xl'>| About Me</h4>
                <p className='pl-10 lg:pl-0 ml-6 text-white mt-3 text-justify'>I am Samir Faisal, an intellectually curious professional pursuing a bachelor's degree in computer science and
                    looking for an internship position to continue growing my talents and utilizing what I've learned in my studies.</p>
                <p className='pl-10 lg:pl-0 ml-6 text-white mt-3 text-justify'>I was doing a research based on transfer learning based on bert based model for identifing hate speech and misinformation from social media for bangla english corpus.</p>
                <div className='mt-10 ml-6'>
                    <a href="Resume_Samir_Faisal.pdf" download>
                        <button className='text-xl border px-8 py-4 rounded-lg bg-[#59c378] hover:text-white'><span className='flex items-center gap-2'>Get Resume <BiDownload className='w-8 h-8' /></span></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;