import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PiNumberOneBold } from "react-icons/pi";
import { PiNumberTwoBold } from "react-icons/pi";
import { PiNumberThreeBold } from "react-icons/pi";
const Education = () => {
    return (
        <div className='bg-[#180735] pb-20'>
            <div>
                <h1 className="text-[#59c378] text-4xl text-center pt-20 pb-10 font-bold">| Education</h1>
                <p className='text-white text-center pb-8'>I have already completed SSC and HSC from Rajshahi education board and also completed all of my course work expect internship.</p>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<PiNumberThreeBold className='text-white' />}
                >
                    <h3 className="text-2xl font-bold vertical-timeline-element-title">Bachelor Of Science in CSE</h3>
                    <h4 className="vertical-timeline-element-subtitle"></h4>
                    <p>
                        American International University - Bangladesh (AIUB)
                    </p>
                    <p>CGPA: 3.67 (4)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2016 - 2018"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<PiNumberTwoBold className="text-white" />}
                >
                    <h3 className="text-2xl font-bold vertical-timeline-element-title"> Higher Secondary School Certificate</h3>

                    <p>
                        Govt Azizul Haque College , Bogura
                    </p>
                    <p>CGPA: 4.83 (5)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2008 - 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<PiNumberOneBold className='text-white' />}
                >
                    <h3 className="text-2xl font-bold vertical-timeline-element-title">Secondary School Certificate </h3>
                    <p>
                        Bogura Zilla Scholl, Bogura
                    </p>
                    <p>CGPA: 5 (5)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Education;