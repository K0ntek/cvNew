import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

import viteReact from '/vite-react.png'
import dni from '/dni.png'
import kwt from '/kwt.png'
import lgthnk from '/lgthnk.png'
import dni2024 from '/dni2024.png'
import cardQuiz from '/cardQuiz.png'
import todo from '/todo.png'
import gymapp from '/gymapp.png'
import carpentry from '/carpentryImage.png'
import homesell from '/homesellBrzysky.png'
import uiConcept from '/uiConcept.png'
import kontekHeader from '/kontekHedaer.png'
import examplneLanding from '/examplneLanding.png'


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
            img: examplneLanding,
            link: 'https://designconpect2.onrender.com',
            title: 'Design concept',
            desc: '',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: uiConcept,
            link: 'https://designconcept.onrender.com',
            title: 'Design concept',
            desc: 'w trakcie budowy',
            secondary: '#ff9352',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
         {
            img: kontekHeader,
            link: 'https://jakubkontek.onrender.com',
            title: 'FREELANCE PORTFOLIO',
            desc: '',
            secondary: 'white',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
        {
            img: homesell,
            link: 'https://brzysky.onrender.com',
            title: 'PIOTR BRZYSKI',
            secondary: '#9b4722',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },
         {
            img: carpentry,
            link: 'https://carpentry.onrender.com',
            title: 'CARPENTRY',
            desc: '',
            secondary: '#9b4722',
            shadow: '0px 0px 20px #15633f',
            id: ""
        },  
        {
            img: gymapp,
            link: 'https://gym-uk87.onrender.com/',
            title: 'Gym app',
            desc: 'w trakcie budowy',
            secondary: '#7a3d17',
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
        //{
            //img: todo,
            //link: 'https://todoapp-du6a.onrender.com',
            //title: 'To-do app',
            //desc: 'W trakcie budowy',
            //secondary: '#20ff7d',
            //shadow: '0px 0px 20px #15633f',
            //id: ""
        //},
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
        //{
            //img: dni,
            //link: 'https://project2-fp6r.onrender.com',
            //title: 'DNI OTWARTE',
            //desc: '',
            //secondary: 'silver',
            //shadow: '0px 0px 20px silver',
            //id: "1"
        //},
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1200 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1200, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.projectTitle', { x: '-200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5, scrollTrigger: { trigger: '.projectsContainer', start: 'top 40%' } })

    }, [])

    return (
        <div className=" w-full projects bg-[#ffffff] shadow-[0px_0px_30px_0px] shadow-black/10" id='projects'>
            <div className=" py-10 max-w-[1400px] px-5 mx-auto">
                <div className="projectsContainer mx-auto rounded-[30px]">

                            <div className="w-fit ml-10 projectTitle pb-8 sm:pb-0">
                                <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                    bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)]
                                    inline-block text-transparent bg-clip-text'>PROJEKTY</h2>
                                
                                <h1 className=" text-2xl sm:text-4xl lg:text-6xl font-montserrat mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#111] to-[#000000] font-[600] tracking-[2px]">MOJE PROJEKTY</h1>
                            </div>

                    <div className="gd-carousel-wrapper">
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlaySpeed={5000}
                      autoPlay={true}
                      renderDotsOutside={true}
                      arrows={true}
                      showDots={true}
                      className="relative gd-carousel">
                        {projectNav.map((element, i) => {
                                return (
                                    <a href={element.link} key={i}>
                                        <div className={` project group rounded-3xl relative overflow-hidden  mx-1 transition-all duration-500`}>
                                                <div style={{
                                                    background: `linear-gradient(80deg, rgba(0,0,0,.7), rgba(0,0,0,.1)),url(${element.img})`,
                                                    aspectRatio: '16/9',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'cover',
                                                }} className="group-hover:scale-110 transition-all duration-300"></div>

                                                    <div className="group-hover:bg-black/80 w-full h-full z-40 transition-all absolute top-0 left-0">
                                                        <div className=" absolute bottom-10 left-6 -space-y-3">

                                                        <div className="flex gap-1">
                                                            <AiOutlineAntDesign className=" mt-[14px] text-[rgb(112,66,146)]"/> 
                                                            <p className="tracking-wide group-hover:tracking-widest transition-all duration-150 my-3 text-[14px] font-montserrat font-[600] bg-gradient-to-r from-[rgb(156,96,203)] via-[rgb(208,89,91)] to-[rgb(212,130,71)]
                                                                 inline-block text-transparent bg-clip-text">UI DESIGN</p>
                                                        </div>

                                                            <div className="w-fit">
                                                                <h2 className="text-lg md:text-xl xl:text-3xl font-montserrat font-[500] tracking-wide text-[rgb(207,207,207)]">{element.title}</h2>
                                                            </div>

                                                        </div>

                                                        <div className="absolute bottom-10 right-6 transition-all duration-200 flex gap-1">
                                                            <div className="w-fit overflow-hidden">
                                                                <p className="text-white font-montserrat font-[400] tracking-widest text-[10px] relative left-[100%] group-hover:left-0 transition-all duration-300">ZOBACZ</p>
                                                            </div>
                                                            <MdArrowOutward className=" text-white group-hover:text-[rgb(255,38,42)] text-xl" />
                                                        </div>
                                                    </div>
                                        </div>
                                    </a>
                                )
                            })}
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
