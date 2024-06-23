import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { Link } from "react-scroll";
import selfImage from "../../public/selfImage.jpg"

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
        gsap.fromTo('.name', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5 })

        const tl = new TimelineMax({repeat:-1})

        let border = document.querySelectorAll('.border')

        // tl.to(border, {x:'0%'})
        // .to(border, {x:'-20%', duration:2, stagger:1})
        // .to(border, {x:'0%', duration:2, stagger:1})
        // .to(border, {x:'20%', duration:2, stagger:1})
        // .to(border, {x:'0%', duration:2, stagger:1})

        gsap.fromTo(border, {x:'-20%'}, {x:'20%', duration:3, stagger:1, yoyo:true, repeat:-1})
    })

    return (
        <div id='home' className="header min-h-screen lg:grid grid-cols-2 mx-auto mt-[120px] lg:mt-0">
            <div className="relative sm:ml-[10%] align-center lg:top-[50%] my-10 lg:translate-y-[-25%] mx-auto space-y-3 text-center lg:text-start">
            <div className="w-full">
                    <TypeAnimation
                        sequence={[
                            'Programista',
                            2000,
                            'Front-end developer',
                            2000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className=" font-inter font-[300] text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#b1683b] w-full"
                    />
                </div>
                <h1 className="name text-[45px] sm:text-[60px] lg:text-[70px] font-inter font-[400] uppercase">Jakub Kontek</h1>
                <div className="ml-[15%] md:ml-0">
                    <div className="flex text-lg font-[500] my-[10px]"><BsFillTelephoneFill className="contactIcon mt-[-5px] text-[#8d512b]" />
                        <p className="font-inter">
                            <CountUp end={790} className=" font-inter" />
                            <CountUp end={839} prefix=" " suffix=" " className="  font-inter" />
                            0<CountUp end={86} className=" font-inter" /></p></div>

                    <div className="flex text-lg my-[10px]"><AiOutlineMail className="contactIcon mt-[-3px] text-[#b1683b]" />
                        <TypeAnimation sequence={['jakub.kontek05@gmail.com', 2000]} className=" font-inter font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#181818] to-[#52280e]" /></div>

                    <div className="flex space-x-[10px] my-6">
                        <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] text-[#000000] hover:text-[#b1683b] transition-all duration-300" /></a>
                        <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] text-[#000000] hover:text-[#b1683b] transition-all duration-300" /></a>
                        <a href="https://www.linkedin.com/in/jakub-kontek-33909b2a1/"><FaLinkedinIn className="text-[30px] text-[#000000] hover:text-[#b1683b] transition-all duration-300" /></a>
                    </div>
                </div>
               <div className=" sm:flex">
                    <Link to="about" spy={true} smooth={true}><button className=" m-2 bg-[#b1683b] border-[1px] border-[#b1683b] text-white px-4 py-2 rounded-full text-xl font-inter font-[200] hover:bg-[#8b5636] hover:text-white transition-all duration-200 hover:tracking-wider">SPRAWDŹ WIĘCEJ</button></Link>
                    <Link to="contact" spy={true} smooth={true}><button className=" m-2 bg-transparent border-[1px] border-[#111] text-black px-4 py-2 rounded-full text-xl font-inter font-[500] hover:bg-[#111] hover:text-white transition-all duration-200 hover:font-[300] hover:tracking-wider">SKONTAKTUJ SIĘ</button></Link>
               </div>
            </div>
            <div className=" my-auto mx-auto w-3/5 mt-[15%] sm:mt-auto space-y-2">
                <div className="border w-1/3 h-[4px] bg-black mx-auto"></div>
                <img src={selfImage} className=" selfImage" alt="image" />
                <div className="border w-1/3 h-[4px] bg-black mx-auto"></div>
            </div>
        </div>
    )
}

export default Header;
