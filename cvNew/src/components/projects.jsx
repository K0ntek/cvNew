import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            img: uiConcept,
            link: 'https://designconcept.onrender.com',
            title: 'Design concept',
            desc: 'w trakcie budowy',
            secondary: '#ff9352',
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
        <div className="w-[90%] mx-auto rounded-[50px] mb-10 projects bg-[#ffffff]" id='projects'>
            <div className=" py-10">
                <div className="projectsContainer p-[20px] mx-auto rounded-[30px]">

                            <div className="w-fit mx-auto projectTitle">
                                <h1 className=" text-2xl sm:text-3xl lg:text-5xl font-inter mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#111] to-[#634533] font-[400] tracking-[10px]">MOJE PROJEKTY</h1>
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
                                        <div className={` project group rounded-3xl relative overflow-hidden w-[98%] mx-auto transition-all duration-500`}>
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
                                                                <h2 className="text-lg md:text-xl xl:text-3xl font-inter font-[400]" style={{ color: element.secondary }}>{element.title}</h2>
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
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
