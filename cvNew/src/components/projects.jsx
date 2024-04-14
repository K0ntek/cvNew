import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import viteReact from '/vite-react.png'
import dni from '/dni.png'
import kwt from '/kwt.png'
import lgthnk from '/lgthnk.png'
import dni2024 from '/dni2024.png'
import cardQuiz from '/cardQuiz.png'
import todo from '/todo.png'

const Projects = () => {
    const projectNav = [
        {
            img: lgthnk,
            link: 'https://project-z4xl.onrender.com/',
            title: 'LGTHNK',
            desc: 'w trakcie budowy',
            secondary: 'white',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: dni2024,
            link: 'https://dni2024.onrender.com/',
            title: 'DNI OTWARTE 2024',
            desc: '',
            secondary: 'crimson',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: todo,
            link: 'https://todoapp-du6a.onrender.com',
            title: 'To-do app',
            desc: 'W trakcie budowy',
            secondary: '#20ff7d',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: cardQuiz,
            link: 'https://cardquiz.onrender.com',
            title: 'CARD QUIZ',
            desc: '',
            secondary: '#f24602',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: kwt,
            link: 'https://project3-nf09.onrender.com',
            title: 'KWT',
            desc: '',
            secondary: '#15633f',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: viteReact,
            link: 'https://project1-7qx9.onrender.com',
            title: ' DESIGN',
            desc: '',
            secondary: '#DAA520',
            shadow: '0px 0px 20px #DAA520',
            id: "0"
        },
        {
            img: dni,
            link: 'https://project2-fp6r.onrender.com',
            title: 'DNI OTWARTE',
            desc: '',
            secondary: 'silver',
            shadow: '0px 0px 20px silver',
            id: "1"
        },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        // gsap.fromTo('.projectsContainer', {y:'400px', opacity:0}, {y:0, opacity:1, duration:.6, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.project', { y: '200px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger: .2, scrollTrigger: { trigger: '.projects', start: 'top 40%' } })
        gsap.fromTo('.projectTitle', { x: '-200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5, scrollTrigger: { trigger: '.projects', start: 'top 40%' } })
        gsap.fromTo('.projectBorder', { width: '8px', opacity: 0 }, { width: '40%', opacity: 1, duration: .5, delay: .4, scrollTrigger: { trigger: '.projects', start: 'top 40%' } })

    }, [])

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (i) => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className=" bg-black projects min-h-screen" id='projects'>
            <div className=" py-10">
                <div className="projectsContainer py-[100px] bg-[#090909] w-[90%] mx-auto rounded-[30px]">
                    <div className=" w-[90%] grid md:grid-cols-2 mx-auto gap-y-[40px]">
                        <div className="projectTitle mx-auto my-auto text-center sm:w-[60%] space-y-[30px]">
                            <div className="w-fit mx-auto ">
                                <h1 className=" text-[40px] lg:text-[60px] font-inter font-[200] tracking-[10px]"><span className="text-[80px] lg:text-[120px] font-inter font-[200]">MOJE</span><br />PROJEKTY</h1>

                                <div className="projectBorder w-[40%] h-[8px] bg-gradient-to-r from-gray-100 to-black rounded-full mx-auto"></div>
                            </div>
                        </div>

                        {projectNav.map((element, i) => {
                            return (
                                <a href={element.link} key={i}>
                                    <div className={` project group rounded-3xl relative overflow-hidden w-[95%] md:w-[80%] my-auto mx-auto mt-[-20px] hover:shadow-[0px_0px_30px] hover:shadow-gray-900/80 transition-all duration-500`}>
                                        <div className="group-hover:scale-125 transition-all duration-300">
                                            <div style={{
                                                background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${element.img})`,
                                                aspectRatio: '16/9',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: 'cover',
                                            }}>

                                                <div className="group-hover:bg-black/80 w-full h-full z-40 transition-all">
                                                    <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[50%] translate-y-[-45%] lg:translate-y-[-15%] transition-all duration-300 delay-50">
                                                        <div className="w-fit opacity-0 group-hover:opacity-100">
                                                            <h2 className=" text-[25px] md:text-[25px] xl:text-[30px] font-inter font-[400]" style={{ color: element.secondary }}>{element.title}</h2>
                                                            <div className={`w-[4px] h-[2px] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200`} style={{ background: element.secondary }} ></div>
                                                        </div>
                                                        <p className=" my-3 opacity-70 text-white text-[10px] font-inter font-[100]">{element.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
