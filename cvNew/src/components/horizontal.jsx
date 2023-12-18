import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const HorizontalBlocks=()=>{

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo('.hElement', {x:'100%', opacity:0}, {x:0, opacity:1, duration:.5, stagger:.2, scrollTrigger:{trigger:'.exp', start:'top 60%'}})
    })

    return(
        <div className="md:grid grid-rows-6 w-[100%] hidden">
            <div className="hElement w-[80%] ml-[20%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
            <div className="hElement hElement w-[100%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
            <div className="hElement w-[60%] ml-[40%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
            <div className="hElement w-[70%] ml-[30%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
            <div className="hElement w-[80%] ml-[20%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
            <div className="hElement w-[40%] ml-[60%] h-[90%] bg-gradient-to-r from-transparent to-[#25160d] rounded-l-lg"></div>
        </div>
    
    )
}

export default HorizontalBlocks;