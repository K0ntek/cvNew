import React from "react";
import VerticalBlocks from "./vertical";


const About =()=>{
    return(
        <>
        {/* <div className="w-full h-[150px] mt-[5px] bg-gradient-to-t from-black to-transparent"></div> */}
        <div id='about' className="bg-[#020202] h-fit py-[50px] xl:grid grid-cols-[35%_65%] z-[99]">
            <VerticalBlocks />

                <div className=" w-full xl:w-[80%] p-[20px] text-white xl:ml-[20%]">
                    <div className="my-[10%] element">
                        <h1 className="text-[35px] sm:text-[60px] font-megrim font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">O MNIE</h1>

                        <p className="text-[20px] text-justify w-[80%] mx-auto font-questrial">Początkujący Front-end Developer w tworzeniu stron internetowych ubiegający o staż na tym stanowisku.
                            Ambitny, komunikatywny, punktualny, dobrze pracujący w zespole. Specjalizuję się w tworzeniu intuicyjnych,
                            responsywnych i łatwych w obsłudze interfejsów użytkownika, które poprawiają doświadczenie użytkownika.
                            Jestem zmotywowany i chętny do dalszego rozwoju w tej dziedzinie.</p>
                    </div>
                        <div className="my-[10%] element" >
                        <h1 className="text-[35px] sm:text-[60px] font-megrim font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">WYKSZTALCENE</h1>
                            <div className="text-[20px] text-justify w-[80%] mx-auto">
                                <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#80573e] to-[#25160d]">09.2020 - obecnie</p>
                                <p className=" font-questrial">Zespół Szkół Technicznych i Ogólnokształcących w Jarosławiu</p>
                            <div className="flex">
                            <p className="flex"><span className=" font-bold">Kierunek: </span></p>
                                <div><p><span className=" font-orbitron text-transparent text-white mx-[10px]">Programista</span></p>
                                <div className="mx-auto w-[69%] h-[3px] bg-[#25160d] rounded-full"></div></div>
                            </div>
                            </div>
                        </div>
                    <div className="my-[10%] element">
                    <h1 className="text-[35px] sm:text-[55px] font-megrim font-extrabold sm:font-normal text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]">DOSWIADCZENIE ZAWODOWE</h1>
                        <div className="text-[20px] text-justify w-[80%] mx-auto">
                            <p className=" font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#80573e] to-[#25160d]">03.2023 </p>
                            <p className="text-[20px] text-justify mx-auto font-questrial" >Stworzenie strony internetowej na dni otwarte szkoły pod kątem wizualnym</p>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default About;