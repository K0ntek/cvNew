import React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import Blocks from './Blocks'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) =>{
      e.preventDefault();

      //emailjs templates
      const serviceID = 'service_ctjauxn'
      const templateID = 'template_lls2shr'
      const publicKey = 'OrU4sSzJwY303AR90'

      const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: {
          user_name: name,
          user_mail: email,
          message: message,
          to_name: 'Kuba'
        }
      }


      try{
        const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        console.log(res.data);
        setName('')
        setEmail('')
        setMessage('')

      } catch (error){
        console.error(error)
      }
    }

  return (
    <div className='w-[90%] relative mx-auto my-7 rounded-[30px] bg-gradient-to-t from-[#efefef] to-transparent grid md:grid-cols-2 py-10' id='contact'>
      {/* <div className="absolute w-full h-full z-[-1]"> */}
        {/* <Blocks/> */}
      {/* </div> */}
      <div>
        <h2 className=' text-sm font-inter font-[500] text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-[#8b8b8b]'>KONTAKT</h2>
        <h1 className=' text-2xl font-inter font-[500] text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-[#8b8b8b]'>NAPISZ DO MNIE!</h1>

            <div className='w-5/6 mx-auto text-black'>
                <form onSubmit={handleSubmit} className='space-y-5'>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>IMIĘ</h1>
                    <input type="text" onChange={(e)=> setName(e.target.value)} id="name" required  className=' w-full p-3 rounded-2xl focus:outline-none' value={name}/><br />
                </div>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>E-MAIL</h1>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} id="email" required  className=' w-full p-3 rounded-2xl focus:outline-none' value={email}/><br />
                </div>
                <div className=''>
                    <h1 className=' font-inter font-[500] text-[12px] ml-10'>WIADOMOŚĆ</h1>
                    <textarea onChange={(e)=> setMessage(e.target.value)} id="message" required cols="30" rows="10" className=' p-3 w-full rounded-2xl focus:outline-none' value={message}></textarea><br />
                </div>
                <div className=' ml-10'><button type='submit' className='bg-black px-5 py-2 text-white rounded-xl hover:tracking-wider transition-all duration-200 hover:bg-[#161616]'> WYŚLIJ</button></div>
                </form>
            </div>
      </div>

        <div className='md:grid lg:grid-cols-2 gap-5 mx-auto hidden max-h-[600px]'>
            <div className=" lg:col-span-2 overflow-hidden rounded-[30px] "><img src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='w-full object-cover h-full' /></div>
            <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D" alt="image" className='rounded-[30px] hidden lg:block'/>
            <img src="https://images.unsplash.com/photo-1653289755854-a41949e96282?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="image" className='rounded-[30px]'/>
        </div>

    </div>
  )
}

export default Contact
