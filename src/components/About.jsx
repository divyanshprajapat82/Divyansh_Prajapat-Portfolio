import React, { useState } from 'react'
import Header from './Header'
import { motion, useScroll, useTransform } from 'motion/react'
import { LuMouse } from 'react-icons/lu'
import { IoIosArrowDown } from 'react-icons/io'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";

export default function About() {
    const { scrollYProgress } = useScroll()

    const [isHovered, setIsHovered] = useState(false)

    // Create a transform for the image zoom effect
    const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1])

    const floatingVariants = {
        float1: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        },
        float2: {
            y: [0, -15, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
            }
        },
        float3: {
            y: [0, -25, 0],
            transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
            }
        }
    }

    return (
        <>
            <div className='sticky -top-70 z-0'>
                <div className='relative bg-[#000] pb-8'>
                    <motion.div
                        variants={floatingVariants}
                        animate="float1"
                        className='absolute md:top-10 -top-12 left-7 md:left-10 text-3xl md:text-4xl text-blue-400 opacity-60'
                    >
                        <FaReact />
                    </motion.div>
                    <motion.div
                        variants={floatingVariants}
                        animate="float2"
                        className='absolute md:top-20 -top-8 right-4 md:right-20 text-3xl md:text-4xl text-green-400 opacity-60'
                    >
                        <FaNodeJs />
                    </motion.div>
                    <motion.div
                        variants={floatingVariants}
                        animate="float3"
                        className='absolute md:bottom-20 bottom-8 left-4 md:left-20 text-3xl md:text-4xl text-yellow-400 opacity-60'
                    >
                        <SiMongodb />
                    </motion.div>
                    <motion.div
                        variants={floatingVariants}
                        animate="float1"
                        className='absolute md:bottom-10 bottom-5 right-4 md:right-10 text-3xl md:text-4xl text-gray-400 opacity-60'
                    >
                        <SiExpress />
                    </motion.div>

                    <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className='absolute w-1 h-1 bg-white rounded-full opacity-30'
                                style={{
                                    left: `${10 + Math.random() * 80}%`,
                                    top: `${10 + Math.random() * 80}%`,
                                }}
                                animate={{
                                    y: [0, -50, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    <div id='about' className='relative z-10'>
                        <motion.div
                            className='max-w-[800px] backdrop-blur-md m-auto bg-gradient-to-br from-[#ffffff20] to-[#ffffff10] p-4 rounded-3xl shadow-2xl border border-[#ffffff30]'
                            style={{
                                scale: imageScale,
                                opacity: imageOpacity
                            }}
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                        >
                            <motion.div
                                className='absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0'
                                animate={{
                                    opacity: isHovered ? 0.3 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                            />

                            <div className='relative overflow-hidden rounded-2xl'>
                                <motion.img
                                    src="/images/MERN.png"
                                    alt="MERN Stack"
                                    className='w-full h-auto shadow-lg'
                                    animate={{ scale: isHovered ? 1.05 : 1 }}
                                    transition={{ duration: 0.3 }}
                                />

                                <motion.div
                                    className='absolute inset-0 bg-black bg-opacity-0 rounded-2xl flex items-center justify-center'
                                    animate={{
                                        backgroundColor: isHovered ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className='text-white text-center opacity-0'
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            y: isHovered ? 0 : 20,
                                        }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text'>
                                            MERN Stack Expertise
                                        </h3>
                                        <div className='grid grid-cols-2 gap-4 text-sm'>
                                            <div className='flex items-center gap-2'>
                                                <FaReact className='text-blue-400' />
                                                <span>React.js</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <FaNodeJs className='text-green-400' />
                                                <span>Node.js</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <SiMongodb className='text-green-500' />
                                                <span>MongoDB</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <SiExpress className='text-gray-400' />
                                                <span>Express.js</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>


                        <motion.div

                            // className='flex justify-center flex-wrap gap-4 md:gap-8 mt-8 px-4'
                            className='flex justify-center flex-wrap gap-8 mt-8 px-4'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {[
                                { icon: FaReact, name: 'React', color: 'text-blue-400' },
                                { icon: FaNodeJs, name: 'Node.js', color: 'text-green-400' },
                                { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
                                { icon: SiExpress, name: 'Express', color: 'text-gray-400' },
                                { icon: SiNextdotjs, name: 'NextJs', color: 'text-[#fff]' },
                                { icon: RiTailwindCssFill, name: 'TailwindCSS', color: 'text-[#15B8C5]' },
                                { icon: FaGitAlt, name: 'Git', color: 'text-[#E84D31]' }
                            ].map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    className='flex flex-col items-center gap-2'
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div
                                        className={`text-3xl ${tech.color}`}
                                    // animate={{
                                    //     rotate: [0, 360],
                                    // }}
                                    // transition={{
                                    //     duration: 20,
                                    //     repeat: Infinity,
                                    //     delay: index * 0.5,
                                    // }}
                                    >
                                        <tech.icon />
                                    </div>
                                    <span className='text-white text-xs md:text-sm font-medium'>{tech.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
