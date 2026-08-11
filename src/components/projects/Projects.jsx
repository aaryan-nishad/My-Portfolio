import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/imagep1.png'
import image2 from '../../assets/imagep2.png'
import image3 from '../../assets/imagep3.png'
import image4 from '../../assets/imagep4.png'

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const data = [
        {
            name: 'Project 1',
            img: image1,
            desc: 'About the Project Ive Build'
            
        },
        {
            name: 'Project 2',
            img: image3,
            desc: 'About the Project Ive Build'
        },
        {
            name: 'Project 3',
            img: image2,
            desc: 'About the Project Ive Build'
        },
        {
            name: 'Project 4',
            img: image4,
            desc: 'About the Project Ive Build'
        },
    ]
    return (
        <section data-aos="fade-up" data-aos-delay='400' className='relative overflow-hidden flex flex-col text-white body-font' id='projects'>
            <div className='container px-5 py-24 mx-auto '>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {data.map((a) => (
                        <div className='p-4'>
                            <div className='h-full border-2 border-gray-600 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                <img src={a.img} alt="" className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center ' />

                                <div className='p-6'>
                                    <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{a.name}</h2>
                                    <p className='leading-relaxed mb-3'>{a.desc}</p>
                                    <button class="bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded" href=''>
                                        <a href="#" target='null'>See More</a>
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Projects