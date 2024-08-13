 import React from "react";
import VerticalBlocks from "./vertical";
import Experience from "./experience";
import { SiAboutdotme } from "react-icons/si";
import { FaBuromobelexperte } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";


const About = () => {
    return (
        <>
            {/* <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div> */}
            <div id='about' className="bg-zinc-950 w-full mx-auto px-5 sm:px-10 h-fit py-[50px] z-[99]">
                <div className="max-w-[1400px] px-5 mx-auto">
                <div className="grid lg:grid-cols-[35%_65%]">
                <VerticalBlocks />

                    <div className=" w-full xl:w-[80%] p-[20px] text-white xl:ml-[20%]">
                        <div className="my-[10%] element">
                            <SiAboutdotme className=" text-[20px] relative top-[10px] sm:top-[20px]"/>
                            <h1 className="text-[35px] sm:text-[60px] font-inter font-[400] text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">O MNIE</h1>

                            <p className="text-[20px] text-justify w-[95%] sm:w-[80%] mx-auto font-questrial">Początkujący Front-end Developer w tworzeniu stron internetowych ubiegający się o staż/pracę na tym stanowisku.
                                Ambitny, komunikatywny, punktualny, dobrze pracujący w zespole. Specjalizuję się w tworzeniu intuicyjnych,
                                responsywnych i łatwych w obsłudze interfejsów użytkownika, które poprawiają doświadczenie użytkownika.
                                Jestem zmotywowany i chętny do dalszego rozwoju w tej dziedzinie.</p>
                        </div>
                        <div className="my-[10%] element" >
                        <MdCastForEducation className=" text-[20px] relative  sm:top-[20px]"/>
                            <h1 className="text-[35px] sm:text-[60px] font-inter font-[400] sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">WYKSZTAŁCENIE</h1>
                            <div className="text-[20px] text-justify  w-[95%] sm:w-[80%] mx-auto">
                                <p className=" font-megrim font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(255,109,5)]">09.2020 - obecnie</p>
                                <p className=" font-questrial">Zespół Szkół Technicznych i Ogólnokształcących w Jarosławiu</p>
                                <div className="flex">
                                    <p className="flex"><span className=" font-bold">Kierunek: </span></p>
                                    <div><p><span className="font-megrim font-bold text-2xl text-transparent text-white mx-[10px]">Programista</span></p>
                                        <div className="mx-auto w-[69%] h-[3px] bg-[#25160d] rounded-full"></div></div>
                                </div>
                            </div>
                        </div>

                        <div className="my-[10%] element space-y-6">
                        <FaBuromobelexperte className=" text-[20px] relative top-[20px]"/>
                            <h1 className="text-[35px] sm:text-[55px] font-inter font-[400] sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">DOŚWIADCZENIE ZAWODOWE</h1>
                            <div className="text-[20px] text-justify w-[95%] sm:w-[80%] mx-auto">
                                <div className="w-fit ml-6">
                                    <p className=" font-megrim font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(255,109,5)]">09.2022 - 11.2022 </p>
                                    <div className=" mx-auto w-1/2 h-[3px] rounded-full bg-gradient-to-r from-transparent to-[rgb(255,109,5)]"></div>
                                </div>
                                <p className="text-[20px] text-justify mx-auto font-questrial text-[silver] mt-5" >Stworzenie <span className="font-bold">UI oraz UX</span> dla strony internetowej  <span className="font-bold">KWT</span></p>
                            </div>

                            <div className="text-[20px] text-justify  w-[95%] sm:w-[80%] mx-auto">
                                <div className="w-fit ml-6">
                                    <p className=" font-megrim font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,149,73)] to-[rgb(255,109,5)]">03.2023 <span className=" font-inter font-[400]">oraz</span> 03.2024 </p>
                                    <div className=" mx-auto w-1/2 h-[3px] rounded-full bg-gradient-to-r from-transparent to-[rgb(255,109,5)]"></div>
                                </div>
                                <p className="text-[20px] text-justify mx-auto font-questrial text-[silver] mt-5" >Stworzenie <span className="font-bold">UI oraz UX</span> dla strony internetowej na <span className="font-bold">Dni Otwarte szkoły</span></p>
                            </div>

                            {/* <div className="text-[20px] text-justify w-[80%] mx-auto">
                                <div className="w-fit ml-6">
                                    <p className=" font-megrim font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#996c50] to-[#692f0b]">03.2024  </p>
                                    <div className=" mx-auto w-1/2 h-[3px] rounded-full bg-gradient-to-r from-black to-[#3d281b]"></div>
                                </div>
                                <p className="text-[20px] text-justify mx-auto font-questrial text-[silver] mt-5" >Stworzenie <span className="font-bold">UI oraz UX</span> dla strony internetowej na dni otwarte szkoły</p>
                            </div> */}
                        </div>


                    </div>
                </div>

                    {/* <div className="w-5/6 h-1 rounded-full bg-gradient-to-r from-[rgb(255,109,5)] to-transparent  mx-auto mb-10"></div> */}
                
                    <Experience/>
                </div>

            </div>
        </>
    )
}

export default About;
