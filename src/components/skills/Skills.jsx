import React from 'react'
import skills from '../../data/skills'

function Skills() {
    return (
        <div id='skills' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container flex flex-wrap px-5 py-24 mx-auto items-center'>
                <div data-aos='fade-up' data-aos-delay='200'
                    className='md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-0 md:mb-0 pd-10 border-b border-orange-400'>
                    <h1 data-aos='fade-right' data-aos-delay='500' className='sm:text-4xl text-2xl font-medium title-font mb-2 text-white '>Skills
                    </h1>
                    {skills.categories.map((category) => (
                        <h3
                            key={category.title}
                            data-aos='fade-right'
                            data-aos-delay='500'
                            className='sm:text-xl text-xl font-300h title-font mb-2 text-white '
                        >
                            {category.title} : &nbsp;
                            <span className='leading-relaxed text-base'>{category.items}</span>
                        </h3>
                    ))}
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
                    {skills.icons.map((icon) => (
                        <li key={icon.alt} className='lg:w-1/3 mb-4 w-1/2'>
                            <img src={icon.src} alt={icon.alt} className='rounded-full w-20 h-20 object-cover' />
                        </li>
                    ))}
                 </nav>
                </div>
            </div>
        </div>
    )
}

export default Skills