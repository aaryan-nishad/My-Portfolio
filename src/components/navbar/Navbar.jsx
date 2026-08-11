import React from 'react'
import navigation from '../../data/navigation'

function Navbar() {
  return (
    <header data-aos='fade-up' className='text-gray-600 body-font z-10'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <span className='ml-3 text-3xl font-bold text-white'>AARYAN</span>
            </a>
            <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
                {
                    navigation.map((item, index) =>(
                        <a key={index} href={item.href} className='mr-5 hover:text-yellow-300'>
                            {item.label}
                        </a>
                    ))
                }
            </nav>

            <a href='#contacts' className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4 md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900'>
                Contact Me
            </a>
        </div>
    </header>
  )
}

export default Navbar