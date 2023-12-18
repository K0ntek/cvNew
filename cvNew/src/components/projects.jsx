import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import viteReact from '/vite-react.png'
import dni from '/dni.png'
import kwt from '/kwt.png'
import lgthnk from '/lgthnk.png'

const Projects =()=>{
    const projectNav=[
        {
            img: viteReact,
            link: 'https://project1-7qx9.onrender.com',
            title: ' DESIGN',
            secondary: '#DAA520',
            shadow: '0px 0px 20px #DAA520'
        },
        {
            img: dni,
            link: 'https://project2-fp6r.onrender.com',
            title: 'DNI OTWARTE',
            secondary: 'silver',
            shadow: '0px 0px 20px silver'
        },
        {
            img: kwt,
            link: 'https://project3-nf09.onrender.com',
            title: 'KWT',
            secondary:'#052604',
            shadow: '0px 0px 20px #053c04'
        },
    ]

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        // gsap.fromTo('.projectsContainer', {y:'400px', opacity:0}, {y:0, opacity:1, duration:.6, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.project', {y:'200px', opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.projectTitle', {x:'-200px', opacity:0}, {x:0, opacity:1, duration:.5, scrollTrigger:{trigger:'.projects', start:'top 40%'}})
        gsap.fromTo('.projectBorder', {width:'8px', opacity:0}, {width:'40%', opacity:1, duration:.5, delay:.4, scrollTrigger:{trigger:'.projects', start:'top 40%'}})

    },[])

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    return(
       <div className=" bg-black projects">
             <div className="projectsContainer py-[100px] bg-black w-[90%] relative top-[-60px] mx-auto rounded-[60px]" id='projects'>
        <div className=" w-[90%] grid md:grid-cols-2 mx-auto gap-y-[40px]">
            <div className="projectTitle mx-auto my-auto text-center sm:w-[60%] space-y-[30px]">
                <div className="w-fit mx-auto ">
                    <h1 className=" text-[40px] lg:text-[60px] font-megrim tracking-[10px] font-bold"><span className="text-[80px] lg:text-[120px] font-megrim">MOJE</span><br/>PROJEKTY</h1>

                    <div className="projectBorder w-[40%] h-[8px] bg-gradient-to-r from-[#ffffff] to-black rounded-full mx-auto"></div>
                </div>
            </div>

                {projectNav.map((element, i)=>{
                    return(
                            <a href={element.link} key={i}>
                                    <div className={`project group rounded-3xl relative overflow-hidden w-[95%] md:w-[80%] my-auto mx-auto mt-[-20px] hover:shadow-[0px_0px_20px] transition-all duration-500`}
                                    style={{boxShadow: isHovering ? element.shadow : 'none'}}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="group-hover:scale-125 transition-all duration-300">
                                    <div style={{background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${element.img})`,
                                         aspectRatio:'16/9',
                                         backgroundRepeat:'no-repeat',
                                          backgroundSize:'cover'}}>
                                     
                                     <div className="group-hover:bg-black/90 w-full h-full z-40 transition-all">
                                         <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[50%] translate-y-[-45%] lg:translate-y-[-15%] transition-all duration-300 delay-50">
                                             <div className="w-fit opacity-0 group-hover:opacity-100">
                                                 <h2 className=" text-[25px] md:text-[25px] xl:text-[30px] font-orbitron" style={{color: element.secondary}}>{element.title}</h2>
                                                 <div className={`w-[4px] h-[4px] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200`} style={{background: element.secondary}} ></div>
                                             </div>
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

        <div className="w-fit mx-auto ">
                    <h1 className="projectTitle text-[50px] font-megrim text-[silver] text-center">OSTATNI PROJEKT<br/>(w trakcie budowy)</h1>

                    <div className="projectBorder w-[60%] h-[4px] bg-gradient-to-r from-[#ffffff] to-black rounded-full mx-auto"></div>
                </div>
                <div className=" w-[80%] lg:w-1/2 mx-auto py-10">
                <a href="https://project-z4xl.onrender.com" >
                                    <div className="project group rounded-3xl relative overflow-hidden w-[95%] md:w-[80%] my-auto mx-auto mt-[-20px] hover:shadow-[0px_0px_20px] hover:shadow-[#25160d] transition-all duration-300">
                                    <div className="group-hover:scale-125 transition-all duration-300">
                                    <div style={{background: `linear-gradient(80deg, rgba(0,0,0,.1), black),url(${lgthnk})`,
                                         aspectRatio:'16/9',
                                         backgroundRepeat:'no-repeat',
                                          backgroundSize:'cover'}}>
                                     
                                     <div className="group-hover:bg-black/90 w-full h-full z-40 transition-all">
                                         <div className="relative w-[60%] top-[100%] left-[20%] group-hover:top-[50%] translate-y-[-45%] lg:translate-y-[-15%] transition-all duration-300 delay-50">
                                             <div className="w-fit opacity-0 group-hover:opacity-100">
                                                 <h2 className=" text-[25px] md:text-[25px] xl:text-[30px] font-orbitron text-[#502f1b]">LGTHNK</h2>
                                                 <div className="w-[4px] h-[4px] bg-[#502f1b] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200"></div>
                                             </div>
                                         </div>
                                     </div>
                                     </div>
                                    </div>
                                 </div>
                            </a>
                </div>
            {/* <video controls autoplay className="w-[80%] xl:w-[50%] rounded-3xl overflow-hidden mx-auto mt-6">
                <source src={project} type="video/mp4" className=" scale-150" />
            </video> */}

       </div>
    )
}

export default Projects;
