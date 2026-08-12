import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import projects from '../../data/projects'
import ProjectCard from './ProjectCard'

function NextArrow({ onClick }) {
    return (
        <button
            aria-label="Next projects"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/6 hover:bg-white/10 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={onClick}
        >
            ›
        </button>
    )
}

function PrevArrow({ onClick }) {
    return (
        <button
            aria-label="Previous projects"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/6 hover:bg-white/10 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={onClick}
        >
            ‹
        </button>
    )
}

function Projects() {
    const [current, setCurrent] = useState(0)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 700,
                settings: { slidesToShow: 1 }
            }
        ],
        afterChange: (index) => setCurrent(index),
        accessibility: true
    }

    return (
        <section data-aos="fade-up" data-aos-delay="400" className="relative overflow-hidden flex flex-col text-white body-font" id="projects">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>

                <div className="relative">
                    <Slider ref={sliderRef} {...settings} className="-mx-4">
                        {projects.map((p) => (
                            <div key={p.id} className="px-4">
                                <ProjectCard project={p} />
                            </div>
                        ))}
                    </Slider>

                    <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/70">
                        <button
                            onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
                            className="px-3 py-1 bg-white/6 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            aria-label="Previous slide"
                        >
                            Prev
                        </button>

                        <span aria-live="polite">{`Slide ${current + 1} of ${projects.length}`}</span>

                        <button
                            onClick={() => sliderRef.current && sliderRef.current.slickNext()}
                            className="px-3 py-1 bg-white/6 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            aria-label="Next slide"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects