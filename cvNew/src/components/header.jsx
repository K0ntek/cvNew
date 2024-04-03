import React from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { Link } from "react-scroll";

import { BsFillTelephoneFill, BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
const Header = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo('.selfImage', { x: '200px', opacity: 0 }, { x: 0, opacity: 1, duration: .5 })
        gsap.fromTo('.name', { y: '100px', opacity: 0 }, { y: 0, opacity: 1, duration: .5 })
    })

    return (
        <div id='home' className="header min-h-screen lg:grid grid-cols-2 mx-auto justify-center text-center">
            <div className="relative top-[50%] translate-y-[10%] sm:translate-y-0 lg:translate-y-[-30%] mx-auto md:w-[70%]">
                <h1 className="name text-[45px] sm:text-[60px] lg:text-[80px] font-inter font-[200] uppercase">Jakub Kontek</h1>
                <div className="h-[150px] w-full">
                    <TypeAnimation
                        sequence={[
                            'Programista',
                            2000,
                            'Front-end developer',
                            2000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className=" font-megrim font-bold text-[40px] sm:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-[#111111] to-[#643a20] w-full"
                    />
                </div>
                <Link to="about" spy={true} smooth={true}><button className=" bg-[#111] text-white px-4 py-2 rounded-full text-2xl font-inter font-[200]">Sprawdź więcej</button></Link>
                <div className="ml-[15%] md:ml-0">
                    <div className="flex text-[20px] my-[10px]"><BsFillTelephoneFill className="contactIcon" />
                        <p className="font-megrim font-bold">
                            <CountUp end={790} className=" font-megrim" />
                            <CountUp end={839} prefix=" " suffix=" " className=" font-megrim" />
                            0<CountUp end={86} className=" font-megrim" /></p></div>

                    <div className="flex text-[15px] sm:text-[20px] my-[10px]"><AiOutlineMail className="contactIcon" />
                        <TypeAnimation sequence={['jakub.kontek05@gmail.com', 2000]} className="font-megrim font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#181818] to-[#52280e]" /></div>

                    <div className="flex space-x-[10px] mt-[10px]">
                        <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] text-[#000000] hover:text-[#643a20] transition-all duration-300" /></a>
                        <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] text-[#000000] hover:text-[#643a20] transition-all duration-300" /></a>
                    </div>
                </div>
            </div>
            <img src="image.jpg" className=" selfImage my-auto mx-auto w-[40%] lg:w-[70%] mt-[15%] sm:mt-auto" alt="image" />
        </div>
    )
}

export default Header;
