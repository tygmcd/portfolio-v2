import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {
        y: "100vh"
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.25,
            when: "beforeChildren",
        }
    }    
};

const Contact = () => {
    const form = useRef();

    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dr5srbo', 'template_4yiq0nk', form.current, {
            publicKey: 'djMbUMKsbPmbNk29X',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccess(true);
              form.current.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
              setFailure(true);
              form.current.reset()
            },
          );
      };

    return (
        <motion.div
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className='flex flex-col w-full justify-center items-center gap-10 my-16'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-4xl md:text-6xl'><b>Contact Me</b></h1>
                    <h3 className='text-xl sm:text-2xl text-center'>Let me know what's on your mind</h3>
                </div>
            
                <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full justify-center items-center gap-6">
                    <input className='w-2/3 md:w-1/2 bg-transparent border-b-2 border-black placeholder-black text-xl p-2 focus:outline-none' placeholder='Name' name='from_name'></input>
                    <input className='w-2/3 md:w-1/2 bg-transparent border-b-2 border-black placeholder-black text-xl p-2 focus:outline-none' placeholder='Email' name='from_email'></input>
                    <textarea className='w-2/3 md:w-1/2 h-52 bg-transparent border-2 border-black placeholder-black text-xl rounded-md p-3 mt-2 focus:outline-none' placeholder='Enter your message here...' name='message'></textarea>
                    <motion.input whileHover={{ opacity: 0.7 }} className='w-2/3 md:w-1/2 h-14 bg-neutral-200 rounded-md shadow-md text-xl cursor-pointer' type="submit" value="Send"></motion.input>
                </form>

                { success && <motion.p initial="hidden" animate="visible" variants={containerVariants} className='text-xl text-green-600 font-bold'>Message sent successfully!</motion.p> }
                { failure && <motion.p initial="hidden" animate="visible" variants={containerVariants} className='text-xl text-red-600 font-bold'>Failed to send message!</motion.p> }

        </motion.div>
    );
}
 
export default Contact;