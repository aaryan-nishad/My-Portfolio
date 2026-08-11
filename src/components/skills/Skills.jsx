import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongo.png'
import react from '../../assets/react.png'
import express from '../../assets/express.png'

function Skills() {
    return (
        <div id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
                <div data-aos='fade-up' data-aos-delay='200'
                    className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-0 md:mb-0 pd-10 border-b border-orange-400'>
                    <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills
                    </h1>
                    <h3 data-aos='fade-right' data-aos-delay='500' className='sm:text-xl text-xl font-300h title-font mb-2 text-white '>Frontend : &nbsp;
                     <span className='leading-relaxed text-base'>React.js, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap</span>
                    </h3>
                    <h3 data-aos='fade-right' data-aos-delay='500' className='sm:text-xl text-xl font-300h title-font mb-2 text-white '>Backend : &nbsp;
                     <span className='leading-relaxed text-base'>Node.js, Express.js</span>
                    </h3>
                    <h3 data-aos='fade-right' data-aos-delay='500' className='sm:text-xl text-xl font-300h title-font mb-2 text-white '>Database : &nbsp;
                     <span className='leading-relaxed text-base'>MongoDB</span>
                    </h3>
                    <h3 data-aos='fade-right' data-aos-delay='500' className='sm:text-xl text-xl font-300h title-font mb-2 text-white '>Tools : &nbsp;
                     <span className='leading-relaxed text-base'>Git, GitHub, VS Code, Postman</span>
                    </h3>
                    <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                       I'm skilled in building full-stack web applications using the MERN stack. 
                       I create responsive and modern UIs with React, Tailwind CSS, and Bootstrap, 
                       and develop robust backend systems using Node.js and Express. 
                       With a strong grip on JavaScript, I focus on writing clean code and building user-friendly, 
                       scalable solutions.
                    </p>
                </div>

                <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
                 <nav className='flex flex-wrap list-none -mb-1'> 
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={html} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={css} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={javascript} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={react} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                  
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={node} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={mongo} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                    <li className='lg:w-1/3 mb-4 w-1/2'>
                       <img src={express} alt="" className='rounded-full w-20 h-20 object-cover' />
                    </li>
                 </nav>
                </div>
            </div>
        </div>
    )
}

export default Skills