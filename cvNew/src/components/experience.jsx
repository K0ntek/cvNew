import React from "react";
import {GiPlainSquare} from 'react-icons/gi'
import HorizontalBlocks from "./horizontal";
import VerticalBlocks from "./vertical";

const Experience =()=>{
    const skills =[
        {
            element: 'Bardzo dobra znajomość HTML, CSS3 oraz JavaScript'
        },
        {
            element: 'Bardzo dobra znajomość Tailwind.css'
        },
        {
            element: 'Dobra znajomość ReactJS'
        },
        {
            element: 'Doświadczenie w pracy z Bootstrap, JQuery oraz API'
        },
        {
            element: 'Znajomość systemów kontroli wersji, takich jak Git'
        },
        {
            element: 'Motywacja do ciągłego rozwoju w dziedzinie Front-endu'
        }
    ]
    return(
        <div>
            <div className="w-full h-[6px] bg-gradient-to-r from-black to-[#25160d]"></div>
        <div id='skills' className="exp bg-[silver] py-[100px] pb-[150px]">
            <div className="flex text-center align-middle justify-center mx-auto">
            <h1 className="text-[35px] sm:text-[55px] font-megrim font-extrabold"> UMIEJETNOSCI</h1></div>
            
               <div className="w-full">
                {skills.map((skill, i)=>{
                   return(
                    <p key={i} className=" justify-center flex my-[10px]"><GiPlainSquare className="mt-[10px] mx-[10px] text-[10px]"/><span className="text-[20px] font-questrial font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-[#25160d]">{skill.element}</span></p>
                   )
                })}
                </div>
           {/* <HorizontalBlocks className=" absolute right-0"/> */}
            
        </div>
        
        {/* <div className="w-full h-[10px] bg-[#000000]"></div> */}
        </div>
    )
}

export default Experience;