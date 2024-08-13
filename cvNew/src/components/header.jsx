import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { Link } from "react-scroll";
import selfImage from "../../public/selfImage.png"
import { socials } from "./Contact";

import { BsFillTelephoneFill, BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";
import Blocks from "./Blocks";
const Header = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.selfImage', { x: '200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5 })
        gsap.fromTo('.name', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger:.2, delay:.3 })
        gsap.fromTo('.headerBorder', {width:0}, {width:'40%', duration:.5, delay:.9})
        gsap.fromTo('.headerTag', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, delay:1.3 })
        gsap.fromTo('.buttonWrapper', { y: '50px', opacity: 0 }, { y: 0, opacity: 1, duration: .5, stagger:.2 })
        gsap.fromTo('.socials', { x: '-100px', opacity: 0 }, { x: 0, opacity: 1, duration: .5 })

        const tl = new TimelineMax({repeat:-1})

        let border = document.querySelectorAll('.border')


        gsap.fromTo(border, {x:'-20%'}, {x:'20%', duration:3, stagger:1, yoyo:true, repeat:-1})
    })

    return (
        <div className=" w-full min-h-screen relative">
            <div className="w-full opacity-35 h-full absolute" style={{background: 'linear-gradient(180deg, transparent, transparent, white),url("https://img.freepik.com/free-vector/abstract-3d-perspective-indoor-wireframe-vector-design_1017-39916.jpg?w=1480&t=st=1721340069~exp=1721340669~hmac=92b75fdf85fd2ddcebeff1d58d6dd249ff16a456a98f1f0522571d755edaf98e")', backgroundPositionX:'50%',  backgroundRepeat:'no-repeat', backgroundSize:'cover'}}></div>
            <div id='home' className="header min-h-screen lg:grid grid-cols-2 mx-auto pt-[120px] max-w-[1500px] lg:pt-0 bg-no-repeat bg-cover relative">
            <div className="">
            <div className="relative px-10 lg:px-0 lg:ml-[10%] align-center lg:top-[50%] my-10 lg:translate-y-[-50%] mx-auto text-center lg:text-start">

                <h2 className='name font-inter text-xl font-[600] tracking-tight
                                    bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(208,89,91)]
                                    inline-block text-transparent bg-clip-text'>FRONT-END DEVELOPER</h2>
                <h1 className="name text-5xl lg:text-6xl xl:text-7xl font-inter tracking-tighter font-[600] uppercase m-0 w-full">Jakub Kontek</h1>

                <div className="flex mb-5 gap-2 mx-auto justify-center lg:justify-start">
                    <div className="headerBorder w-2/5">
                        <div className="w-full h-[2px] bg-[rgb(156,96,203)] relative top-[50%] translate-y-[-50%]"></div>
                    </div>
                    <p className="headerTag font-inter font-[700] bg-gradient-to-r from-[rgb(156,96,203)] via-[rgb(208,89,91)] to-[rgb(212,130,71)]
                                                                inline-block text-transparent bg-clip-text">WEB DESIGNER</p>
                </div>

                <div className="flex gap-4 mt-5 justify-center lg:justify-start">
                    <div className="buttonWrapper">
                        <Link to="about" spy={true} smooth={true}><button className=" bg-gradient-to-tr from-[rgb(255,161,94)] to-[rgb(255,106,0)] border-[1px] border-transparent text-black font-[500] px-2 py-3 rounded-xl text-lg font-inter transition-all duration-200 hover:tracking-wider">SPRAWDŹ WIĘCEJ</button></Link>
                    </div>
                    <div className="buttonWrapper">
                        <Link to="contact" spy={true} smooth={true}><button className=" bg-transparent border-[1px] border-[#111] text-black px-2 py-3 rounded-xl text-lg font-inter font-[500] hover:bg-[#111] hover:text-white transition-all duration-200 hover:font-[300] hover:tracking-wider">SKONTAKTUJ SIĘ</button></Link>
                    </div>
                </div>

                <div className="flex gap-3 my-6 justify-center lg:justify-start lg:ml-10">
                    {socials.map((socialElement, i)=>{
                      return(
                        <div key={i}>
                          <a href={socialElement.link}  className=' text-3xl text-black hover:text-[rgb(212,130,71)] transition-all duration-150'> {socialElement.icon}</a>
                        </div>
                      )
                    })}
                </div>

                </div>
            </div>
            <div className=" my-auto mx-auto w-4/5 sm:w-3/5 lg:w-4/5 mt-[15%] sm:mt-auto space-y-2">
                <div className="border w-1/3 h-[4px] bg-black mx-auto"></div>
                <img src={selfImage} className=" selfImage aspect-[9/10] object-cover" alt="image" />
                <div className="border w-1/3 h-[4px] bg-black mx-auto"></div>
            </div>
        </div>
        </div>
    )
}

export default Header;
