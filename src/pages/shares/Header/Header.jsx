import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assets/samir.jpeg';
import ActiveLink from '../../../components/NavLink/ActiveLink';
const Header = () => {
    return (
        <div className='sticky top-0'>
            <div className="h-24 navbar bg-[#0d012c]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='hover:text-[#59c378]'><Link to='/' >Home</Link></li>
                            <li className='hover:text-[#59c378]' ><Link to='/about'>About</Link></li>
                            <li className='hover:text-[#59c378]' ><Link to='/skills'>Skills</Link></li>

                            <li className='hover:text-[#59c378]' ><Link to='/education'>Education</Link></li>

                            <li className='hover:text-[#59c378]' ><Link to='/project'>Projects</Link></li>
                            <li className='hover:text-[#59c378]' ><Link to='/contact'>Contact Me</Link></li>
                        </ul>
                    </div>
                    <div className='lg:ml-32 flex gap-4 items-center'>
                        <img className='border-2 w-9 h-9 lg:w-12 lg:h-12 rounded-full' src={icon} alt="" />
                        <h1 className="normal-case text-sm lg:text-xl text-[#59c378]">Samir Faisal</h1>
                    </div>
                </div>
                <div className=" navbar-center hidden lg:flex">
                    <ul className=" flex gap-6 text-lg text-white px-1 font-['monospace']">
                        <li className='hover:text-[#59c378]'><ActiveLink to='/' >Home</ActiveLink></li>
                        <li className='hover:text-[#59c378]' ><ActiveLink to='/about'>About</ActiveLink></li>
                        <li className='hover:text-[#59c378]' ><ActiveLink to='/skills'>Skills</ActiveLink></li>

                        <li className='hover:text-[#59c378]' ><ActiveLink to='/education'>Education</ActiveLink></li>

                        <li className='hover:text-[#59c378]' ><ActiveLink to='/project'>Projects</ActiveLink></li>
                        <li className='hover:text-[#59c378]' ><ActiveLink to='/contact'>Contact Me</ActiveLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;