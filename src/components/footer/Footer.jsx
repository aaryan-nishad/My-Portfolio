import React from 'react'
import navigation from '../../data/navigation'

function Footer() {
  return (
    <footer className='bg-gray-700 rounded-lg shadow '>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm text-gray-200 sm:text-center'>
                2025 <a href="#" className='hover:underline'>Portfolio</a>
            </span>
            <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 '>
                {
                    navigation.map((item, index) =>(
                        <li key={index} className='me-4 md:me-6'>
                            <a href={item.href} className='hover:text-orange-400'>
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>

    </footer>
  )
}

export default Footer