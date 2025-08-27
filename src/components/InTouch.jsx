import React, { useState } from 'react'
import { motion } from 'motion/react'
import { MdEmail } from 'react-icons/md'
import { FaFileAlt, FaLinkedin } from 'react-icons/fa'


export default function InTouch() {


    return (
        <div id='inTouch' className=' bg-[#000] px-4 '>
            <div className='max-w-[1000px] m-auto py-12'>
                <div className='flex flex-col items-center'>
                    <motion.h1 initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: false,
                        }}
                        className='text-[#fff] sm:text-[32px] text-[30px] font-semibold text-center'>
                        Get In Touch
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-[#bfbfbf] sm:text-[18px] text-[16px] mb-2 text-center max-w-[700px]'>
                        {/* i'm <span className='text-[#22d06a]'> MERN Stake Developer </span> <br /> get in touch today. */}
                        iI craft modern web apps with the  <span className='text-[#22d06a]'> MERN Stake </span> <br /> get in touch today.
                    </motion.p>
                    {/* <img src="/images/MERN.png" className='hidden' alt="" /> */}
                    <motion.div initial={{ opacity: 0,y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='text-[#bfbfbf] mt-3 text-center sm:max-w-[700px] max-w-[100%]'>
                        <ul className='grid sm:grid-cols-3 grid-cols-1 items-center gap-3'>
                            <a href="mailto:divyanshprajapat82@gmail.com">
                                <button className='w-full bg-[#fff] text-[#000] text-[17px] font-semibold py-2 px-4 rounded-[10px] flex items-center gap-1 cursor-pointer'><MdEmail className='text-[24px]' /> Email</button>
                            </a>
                            <a href="https://www.linkedin.com/in/divyansh-prajapat-b78055296/" target='_blank'>
                                <button className='w-full bg-[#fff] text-[#000] text-[17px] font-semibold py-2 px-4 rounded-[10px] flex items-center gap-1 cursor-pointer'><FaLinkedin className='text-[24px]' /> LinkedIn</button>
                            </a>
                            <a href="/images/Divyansh_Resume.pdf.jpg" download>
                                <button className='w-full bg-[#fff] text-[#000] text-[17px] font-semibold py-2 px-4 rounded-[10px] flex items-center gap-1 cursor-pointer'><FaFileAlt className='text-[24px]' /> Resume</button>
                            </a>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

