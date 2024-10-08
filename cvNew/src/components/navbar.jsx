import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { IoPersonSharp, IoHome } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { VscGraph } from "react-icons/vsc";
import { RiContactsLine } from "react-icons/ri";

export const navElements = [
    {
        name: 'strona główna',
        icon: <IoHome />,
        link: 'home'
    },
    {
        name: 'o mnie',
        icon: <IoPersonSharp />,
        link: 'about'
    },
    // {
    //     icon: <VscGraph />,
    //     link: 'skills'
    // },
    {
        name: 'projekty',
        icon: <AiOutlineFundProjectionScreen />,
        link: 'projects'
    },

    {
        name: 'kontakt',
        icon: <RiContactsLine />,
        link: 'contact'
    },
]


const Navbar = () => {

    // useEffect(()=>{
    //     gsap.registerPlugin(ScrollTrigger)

    //     gsap.fromTo('.navbar', {y:'-200px', opacity:0}, {y:0, opacity:1, duration:.5})
    // }, [])


    return (
        <ul className="flex fixed top-7 left-[50%] translate-x-[-50%] bg-black/70 rounded-full z-[97] py-2 px-8 h-[65px]">
            {navElements.map((element, i) => {
                return (
                    <li className="navElement text-white cursor-pointer bg-black/30 mx-3 md:mx-5 rounded-full text-[25px] md:text-[30px] group hover:text-[#ff904b] hover:bg-black/10 transition-all duration-200">
                        <Link key={i} to={element.link} spy={true} smooth={true} className=" font-gruppo font-bold">
                            <p className="p-[10px]">{element.icon}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navbar;