import React from "react"
import { SiVisualstudiocode } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { RxVercelLogo } from "react-icons/rx";
import { MdDirectionsRailwayFilled } from "react-icons/md";
import { SiJirasoftware } from "react-icons/si";
const Skills = () => {


    return (
        <div className="bg-[#180735]">
            <div>
                <h1 className="text-[#59c378] text-4xl text-center pt-20 pb-10 font-bold">| Skills</h1>
                <p className="pl-10 pr-10 lg:ml-52 lg:mr-40 pb-10 text-white text-justify">As a MERN stack web developer, I possess a diverse skill set that enables me to build robust and scalable web applications using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. Here's an example of how I can write about my MERN stack web developer skills</p>
            </div>
            <div className="w-5/6 mx-auto pl-8 grid grid-cols-1 lg:grid-cols-4 gap-5 text-center pb-20">
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">HTML</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">CSS</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">BOOTSTRAP</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">TAILWIND</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">JAVASCRIPT</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">REACT</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">NODE</h1>
                <h1 className="shadow-2xl text-white border-2 py-8 rounded bg-slate-600 hover:border-[#59c378] hover:duration-400">EXPRESS</h1>
            </div>
            <div>
                <h1 className="pl-4 pr-5 text-center text-4xl text-[#59c378] font-bold pb-10">| Tools</h1>
                <p className="text-center text-white pb-10">As a Computer Science and MERN stack developer I have learned about lots of tools like git, VsCode, figma, vercel, railway, jira</p>
            </div>
            <div className="w-5/6 mx-auto pl-8 grid grid-cols-2 lg:grid-cols-4 gap-5 text-center pb-20">
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <SiVisualstudiocode className="w-8 h-8 mx-auto " />
                    <h1>VsCode</h1>
                </div>
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <BsGit className="w-8 h-8 mx-auto " />
                    <h1>Git</h1>
                </div>
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <FiFigma className="w-8 h-8 mx-auto " />
                    <h1>Figma</h1>
                </div>
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <RxVercelLogo className="w-8 h-8 mx-auto " />
                    <h1>Vercel</h1>
                </div>
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <MdDirectionsRailwayFilled className="w-8 h-8 mx-auto " />
                    <h1>Railway</h1>
                </div>
                <div className="hover:border-[#59c378] hover:duration-400 flex flex-col text-center text-white py-4 px-4 bg-slate-600 rounded border-2">
                    <SiJirasoftware className="w-8 h-8 mx-auto " />
                    <h1>Jira</h1>
                </div>
            </div>
        </div>
    )
}
export default Skills;
