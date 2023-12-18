import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { IoPersonSharp, IoHome  } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { VscGraph } from "react-icons/vsc";

const Navbar=()=>{

    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)

    //     gsap.fromTo('.navbar', {y:'-200px', opacity:0}, {y:0, opacity:1, duration:.5})
    // }, [])

    const navElements = [
        {
            icon: <IoHome />,
            link: 'home'
        },
        {
            icon: <IoPersonSharp />,
            link: 'about'
        },
        {
            icon: <VscGraph />,
            link: 'skills'
        },
        {
            icon: <AiOutlineFundProjectionScreen  />,
            link: 'projects'
        },
    ]

    return(
    <ul className="flex fixed bottom-7 left-[50%] translate-x-[-50%] bg-white/70 rounded-full z-[99] py-2 px-8">
        {navElements.map((element, i)=>{
            return(
                <li key={i} className="text-black cursor-pointer bg-white/30 mx-3 md:mx-5 p-[10px] rounded-full text-[25px] md:text-[30px] group hover:text-[#966a43] hover:bg-black/10 transition-all duration-200">
                <Link to={element.link} smooth={true} className=" font-gruppo font-bold">{element.icon}</Link></li>
            )
        })}
    </ul>
    )
}

export default Navbar;