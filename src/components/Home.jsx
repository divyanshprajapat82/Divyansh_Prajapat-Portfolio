import React, { useState } from 'react'
import Header from './Header'
import { motion, useScroll, useTransform } from 'motion/react'
import { LuMouse } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";
import About from './About'


export default function Home() {
    

    return (
        <>
            {/* <div className='bg-[url("/images/background.jpg")] w-full h-[100vh] bg-cover bg-center bg-no-repeat' > */}
            <div id='home' className='bg-[#000] overflow-hidden'>
                <div className=' w-full h-[100vh]' >
                    <Header />
                    <div className='max-w-[600px] m-auto h-full'>
                        <div className='flex justify-center items-center h-full'>
                            {/* <div className='  shadow-lg shadow-[#2A0E61]/50 bg-[rgba(255, 255, 255, 0.15)] backdrop-blur-md z-50 px-10'

                    > */}
                            <div className='text-center flex flex-col items-center'>
                                <img src="/images/avatar.png" width={100} alt="" />
                                <div>
                                    <motion.h1 initial={{ opacity: 0, x: 100 }}
                                        whileInView={{ opacity: 1, x: 0 }} className='text-[40px] leading-13 font-bold text-[#fff]'>I am <span className=' text-[#e58e46]'>Divyansh Prajapat</span>
                                        <br />
                                        a <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text'>Web Developer</span>
                                    </motion.h1>
                                    <motion.p initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} className='text-[#d0cece] mt-1'>I build modern, responsive, and scalable web applications using the MERN stack. With expertise in frontend and backend, I focus on seamless user experiences, API integration, and clean, maintainable code.</motion.p>
                                    <div className='flex items-center justify-center gap-2 mt-6'>
                                        <motion.a initial={{ opacity: 0, x: -100 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            href="#contact"
                                            className='px-6 py-2 bg-[#fff] text-[#000] border-2 border-[#fff] font-semibold rounded-4xl hover:scale-[1.05] transition-all duration-300 cursor-pointer'>
                                            Get In Touch
                                        </motion.a>
<<<<<<< HEAD
                                        <a href="/images/Divyansh_Resume.jpg" download>
=======
                                        <a href="/images/Divyansh_Resume.pdf.jpg" download>
>>>>>>> b06ca6b3af0204b736d15774cf7f4acba779cc6c
                                            <motion.button initial={{ opacity: 0, x: 100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                className='px-6 py-2 bg-transparent text-[#fff] border-2 border-[#fff] font-semibold rounded-4xl hover:scale-[1.05] transition-all duration-300 cursor-pointer'>
                                                Download CV
                                            </motion.button>
                                        </a>
                                    </div>
                                </div>
                                <motion.div animate={{ y: [0, -10, 0] }} // Animate y from 0, to -20px (up), then back to 0
                                    transition={{
                                        duration: 1.5, // Duration of one complete jump cycle
                                        repeat: Infinity, // Repeat indefinitely
                                        ease: "easeInOut", // Smooth easing for the jump
                                        repeatType: "loop", // Loop the animation from start to end
                                    }}
                                    className='absolute bottom-4 text-[#fff] text-[25px]'>
                                    <LuMouse />
                                    <IoIosArrowDown className='mb-[-18px] mt-[-2px]' />
                                    <IoIosArrowDown />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
