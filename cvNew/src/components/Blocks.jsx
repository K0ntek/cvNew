import React, { useEffect } from 'react'
import gsap from 'gsap'

const Blocks = () => {
    useEffect(()=>{
        gsap.fromTo('.blockV', {y:0}, {y:-30, duration:3, stagger:.1, repeat:-1, yoyo:true})
        gsap.fromTo('.blockH', {x:0}, {x:-30, duration:3, stagger:.1, repeat:-1, yoyo:true})
        // gsap.fromTo('.block', {y:-10}, {y:10, duration:1, stagger:.1, repeat:Infinity, direction:'both'})
    },[])
  return (
    <div className=''>
        <div className=" blockV w-5 h-5 rounded-full border-[1px] border-black absolute top-7 left-5"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-black to-transparent absolute top-[10%] right-[30%] rotate-45 hidden sm:block"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-black to-transparent absolute bottom-[20%] right-[20%] rotate-45"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-[silver] to-transparent absolute top-[20%] right-[50%] rotate-45"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-black to-transparent absolute bottom-[40%] left-[20%] rotate-45 hidden sm:block"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-[silver] to-transparent absolute top-[40%] right-[1%] rotate-45"></div>
        <div className=" blockH w-8 h-[1px] bg-gradient-to-r from-black to-transparent absolute top-[30%] left-[2%] rotate-90"></div>
        <div className=" blockV w-6 h-6 rounded-full border-[1px] border-black absolute top-[50%] left-[30%] hidden sm:block"></div>
        <div className=" blockH w-5 h-5 rounded-full border-[1px] border-black absolute top-[20%] left-[10%] hidden sm:block"></div>
        <div className=" blockV w-5 h-5 rounded-full border-[1px] border-black absolute bottom-[10%] left-10"></div>
        <div className=" blockH w-5 h-5 rounded-full border-[1px] border-black absolute top-7 right-5"></div>
        <div className=" blockV w-5 h-5 rounded-full border-[1px] border-black absolute bottom-2 right-7 hidden sm:block"></div>
        <div className=" blockV w-5 h-5 rounded-full border-[1px] border-black absolute bottom-[5%] right-[20%] hidden sm:block"></div>
        <div className=" blockV w-8 h-[1px] bg-gradient-to-r from-black to-transparent absolute bottom-[10%] left-[30%] rotate-90 hidden sm:block"></div>
        <div className=" blockH w-6 h-6 rounded-full border-[1px] border-black absolute top-[60%] left-[50%]"></div>
    </div>
  )
}

export default Blocks