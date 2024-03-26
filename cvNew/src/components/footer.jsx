import React from "react";
import { BsFillTelephoneFill, BsFacebook, BsGithub } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

const Footer = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let tl = gsap.timeline({
            scrollTrigger: { trigger: '.footer', start: 'top 70%' }
        })

        tl.fromTo(".footerBorder", { x: '-100%', opacity: 0 }, { x: 0, opacity: 1, duration: .5, width: "100%" })
            .to('.footerBorder', { width: '80%', marginLeft: "10%", ease: 'ease-in-out' })

    }, [])

    return (
        <div className="z-[99]">
            {/* <div className="bg-black"> <div className="w-[85%] mx-auto rounded-full h-[10px] bg-gradient-to-r from-[#1b003d] to-[#42088f] "></div></div> */}
            <div className="bg-black"> <div className="footerBorder w-[80%] mx-auto rounded-full h-[6px] bg-gradient-to-r from-black to-[#25160d] "></div></div>
            <div className="footer bg-black pt-[50px]">
                <div className="text-white text-center py-[10px] space-y-[20px]">
                    <h1 className=" text-[40px] lg:text-[70px] font-megrim">JAKUB KONTEK</h1>
                    <div className="w-fit mx-auto h-[120px] sm:h-fit">
                        <TypeAnimation
                            sequence={[
                                'Front-end developer',
                                3000,
                                '',
                                100
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-[35px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-white"
                        />

                        {/* <h2 className="text-[35px] font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#4702a0] to-[#1282f1]">FRONT-END DEVELOPER</h2> */}
                        <div className="w-[50%] h-[4px] bg-[#25160d] rounded-full mx-auto group-hover:w-[50%] transition-all duration-1000 delay-200"></div>
                    </div>
                </div>
                <div className="flex space-x-[10px] text-white py-[5px] pb-[20px] justify-center">
                    <a href="https://www.facebook.com/profile.php?id=100009894456441"><BsFacebook className="text-[30px] hover:text-[#8d512b] transition-all duration-300" /></a>
                    <a href="https://github.com/k0ntek"><BsGithub className="text-[30px] hover:text-[#8d512b] transition-all duration-300" /></a>
                </div>
                <div className=" text-white text-[20px] text-center py-[20px] justify-center space-y-[10px] sm:space-y-0 sm:flex sm:space-x-[50px]">
                    <p className="font-questrial flex justify-center">   <BsFillTelephoneFill className="text-[#8d512b] mt-[5px] mx-[10px]" />790 839 086</p>

                    <p className="font-questrial flex justify-center text-[18px]">  <AiOutlineMail className="text-[#8d512b] mt-[5px] mx-[10px]" />jakub.kontek05@gmail.com</p>
                </div>
                <div className="bg-[#010101] py-[20px]">
                    <p className="w-[80%] mx-auto text-[16px] text-[#8d512b] font-gruppo text-justify">Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie
                        z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                        fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;