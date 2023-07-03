import React from 'react';

const Projects = () => {
    return (
        <div className='bg-[#180735]'>
            <div className='pt-10 pb-8 font-bold'>
                <h1 className='text-center text-4xl text-[#59c378]'>| Projects</h1>
                <p className=" text-center pb-6 pt-10 text-white ">During my 1 year learning period, I developed 20 projects. but these three projects are the best of those.</p>
            </div>
            <div className=' w-5/6 mx-auto pl-6'>
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Card 1 */}
                    <div className="max-w-sm rounded overflow-hidden border-2 border-[#090217] shadow-2xl">
                        <img className="w-full px-5 pt-4 rounded h-60" src="project1.png" alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-[#59c378]">Toy Store </div>
                            <p className="text-white text-base">
                                In the project home page I showed header, banner, gallery, two extra section,
                                category section and footer. In the category section I used react tabs. I did
                                responsible the home page for mobile and pc.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                        </div>
                        <div className="px-6 pt-2 pb-6 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8 text-center items-center font-bold">
                            <h1 className='text-[#59c378] text-xl font-bold'>Link: </h1>
                            <p className='text-white border-b-2'><a href=" https://github.com/Faisal-Samir/ToyStore-Client" target="_blank" rel="noopener noreferrer">Client</a></p>
                            <p className='text-white border-b-2'><a href="  https://github.com/Faisal-Samir/ToyStore-Server" target="_blank" rel="noopener noreferrer">Server</a></p>
                            <p className='text-white border-b-2'><a href="  https://toy-shop-project.web.app/" target="_blank" rel="noopener noreferrer">LiveSite</a></p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="max-w-sm rounded overflow-hidden border-2 border-[#090217] shadow-2xl">
                        <img className="w-full px-5 pt-4 rounded h-60" src="project2.png" alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-[#59c378]">Summer School </div>
                            <p className="text-white text-base">
                                In my project, there is an admin who can control users' designations.
                                Admin can promote a user to the instructor or a user to the administrator.After completing registration, every user is a student. Who can select
                                classes, for those classes, they can complete their payment to enroll in
                                those classes.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                        </div>
                        <div className="px-6 pt-2 pb-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4 text-center items-center font-bold">
                            <h1 className='text-[#59c378] text-xl font-bold'>Link: </h1>
                            <p className='text-white border-b-2'><a href=" https://github.com/Faisal-Samir/Summer_School_Client" target="_blank" rel="noopener noreferrer">Client</a></p>
                            <p className='text-white border-b-2'><a href=" https://github.com/Faisal-Samir/Summer_School_Server" target="_blank" rel="noopener noreferrer">Server</a></p>
                            <p className='text-white border-b-2'><a href="https://school-summer.web.app/" target="_blank" rel="noopener noreferrer">LiveSite</a></p>
                        </div>
                    </div>
                    {/* project:3 */}
                    <div className="max-w-sm rounded overflow-hidden border-2 border-[#090217] shadow-2xl">
                        <img className="w-full px-5 pt-4 rounded h-60" src="project3.png" alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-[#59c378]">Chef Recipes</div>
                            <p className="text-white text-base">
                                My project is about chef website. In the home page different recipes card there
                                is show recipe button, where include see chef details and his three recipes with
                                ingredients.Also in the blog page can convert to pdf and it download as a pdf file format.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Firebase</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MongoDB</span>
                        </div>
                        <div className="px-6 pt-2 pb-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4 text-center items-center font-bold">
                            <h1 className='text-[#59c378] text-xl font-bold'>Link: </h1>
                            <p className='text-white border-b-2'><a href="https://github.com/Faisal-Samir/Chef-Recipes-" target="_blank" rel="noopener noreferrer">Client</a></p>
                            <p className='text-white border-b-2'><a href="https://github.com/Faisal-Samir/Chef-Recipes-Server" target="_blank" rel="noopener noreferrer">Server</a></p>
                            <p className='text-white border-b-2'><a href="https://chef-project-assignment.web.app/" target="_blank" rel="noopener noreferrer">LiveSite</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;