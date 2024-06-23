import React from "react";
import { BsFillTelephoneFill, BsFacebook, BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai'
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-scroll";

const Footer = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let tl = gsap.timeline({
            scrollTrigger: { trigger: '.footer', start: 'top 70%' }
        })

        tl.fromTo(".footerBorder", { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: .5, width: "100%" })
            .to('.footerBorder', { width: '80%', marginLeft: "10%", ease: 'ease-in-out' })

    }, [])

    const navElements = [
        {
            name: 'strona główna',
            link: 'home'
        },
        {
            name: 'o mnie',
            link: 'about'
        },
        {
            name: 'umiejętności',
            link: 'skills'
        },
        {
            name: 'moje projekty',
            link: 'projects'
        },

        {
            name: 'skontaktuj się',
            link: 'contact'
        },
    ]

    return (
        <div className="z-[99]">
            <div className="footer bg-zinc-950 pt-10">
                <h1 className=" mb-10 ml-[10%] text-6xl text-center sm:text-start font-inter font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[#1f1f1f] to-[silver]">BĄDŹ NA BIEŻĄCO</h1>
                <div className="grid sm:grid-cols-3 pb-10 space-y-10 sm:space-y-0">

                            <div className="text-white text-center py-[10px] space-y-[20px]">
                                <div className=" w-fit mx-auto">
                                    <h1 className=" text-4xl font-inter font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[#686868] to-white">JAKUB KONTEK</h1>
                                    <h3 className=" text-transparent bg-clip-text bg-gradient-to-r from-[#686868] to-white text-xl tracking-widest">front-end developer</h3>
                                    <div className=" mx-auto w-1/5 h-[1px] bg-gradient-to-r from-[#8d512b] to-[#130b06]"></div>
                                </div>

                                <div className=" text-white text-[20px] space-y-[10px] w-fit mx-auto">
                                <p className="font-questrial flex">   <BsFillTelephoneFill className="text-[#8d512b] mt-[5px] mx-[10px]" />790 839 086</p>

                                <p className="font-questrial flex text-[18px]">  <AiOutlineMail className="text-[#8d512b] mt-[5px] mx-[10px]" />jakub.kontek05@gmail.com</p>
                            </div>

                            </div>

                    <div className=" text-[#afafaf]">
                        <h2 className=" font-inter text-center text-2xl font-[500] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#acacac] to-white">Zaobserwuj!</h2>
                    <div className="flex space-x-[10px] py-[5px] pb-[20px] justify-center">
                            <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] hover:text-[#8d512b] transition-all duration-300" /></a>
                            <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] hover:text-[#8d512b] transition-all duration-300" /></a>
                            <a href="https://www.linkedin.com/in/jakub-kontek-33909b2a1/"><FaLinkedinIn className="text-[30px] hover:text-[#8d512b] transition-all duration-300" /></a>
                        </div>
                    </div>

                    <div>
                        <h2 className=" font-inter text-center text-2xl font-[500] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#acacac] to-white">Menu</h2>
                        <div className=" mx-auto w-fit space-y-2">
                        {navElements.map((element, i)=>{
                            return(
                                <Link to={element.link} smooth={true}><p className=" text-[#afafaf] cursor-pointer font-inter text-lg hover:text-white">{element.name}</p></Link>
                            )
                        })}
                        </div>
                    </div>

                </div>
                 <div className="w-full py-3 bg-black space-y-3">
                    <p className=" w-4/5 mx-auto text-justify font-inter text-[10px] font-[400] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#acacac] to-white">Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</p>
                    <p className=" font-inter text-center text-[12px] font-[600] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#acacac] to-white">©Jakub Kontek 2024</p>
                {/* <div className="bg-[#070707] w-full py-[20px]">
                    <p className="w-[80%] mx-auto text-[12px] text-[#b46636] font-inter font-[200] text-justify">Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie
                        z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                        fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</p>
                </div> */}
            </div>
        </div>
    )
}

export default Footer;
