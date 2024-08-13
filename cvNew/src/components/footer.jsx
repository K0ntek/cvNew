import React from 'react'
import {  BsFacebook, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-scroll';
import { socials } from './Contact';
import { navElements } from './navbar';

const Footer = () => {

  return (
   <div className='w-full bg-white'>
        {/* <h1 className=' font-inter font-[700] text-2xl tracking-wider ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1> */}
     <div className=' py-5 pb-7 md:space-y-0 max-w-[1400px] px-10 mx-auto'>

            <div className="md:flex justify-between space-y-4">
            <div className=' text-black'>
                    <p className=' relative md:top-4 font-[600] font-inter text-black text-[12px] text-center'> © 2024 UI <span className=' font-[700]'><a href="https://jakubkontekcv.onrender.com">JAKUB KONTEK</a></span> - All rights reserved</p>
                </div>

                <div className=''>
                    <div className='w-fit mx-auto'>

                    <div className=' gap-4 flex flex-wrap mx-auto justify-center relative'>
                        {navElements.map((element, i)=>{
                            return(
                                <Link key={i} to={element.link} spy={true} smooth={true}><p className='cursor-pointer text-sm text-black font-[600] hover:text-[#ff904b] font-inter text-center transition-all duration-150'>{element.name}</p></Link>
                            )
                        })}
                    </div>
                    </div>
                </div>

                <div className=''>
                    <div className='w-fit mx-auto'>

                    <div className=' flex space-x-3 mx-auto justify-center'>
                        {socials.map((socialElement, i)=>{
                            return(
                                <a href={socialElement.link} key={i} className=' text-2xl text-black hover:text-[#c2703e] transition-all duration-150'>{socialElement.icon}</a>
                            )
                        })}
                    </div>
                    </div>
                </div>
          </div>
          <p className=' font-inter font-[600] text-[10px] pt-10 px-6'>Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji
             zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
              ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
               danych oraz uchylenia dyrektywy 95/46/WE (RODO).</p>

    </div>
   </div>
  )
}

export default Footer