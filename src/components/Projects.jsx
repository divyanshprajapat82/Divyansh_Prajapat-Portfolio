import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { FaBootstrap, FaHtml5 } from 'react-icons/fa'
import { RxExternalLink } from 'react-icons/rx'
import { FiGithub } from 'react-icons/fi'
import { IoLogoCss3 } from 'react-icons/io'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si'


export default function Projects() {

    let projectData = [
        {
            title: "Urbannest Realty",
            img: "/images/web2.png",
            demo: "https://urbannest-realty.vercel.app/",
            gitub: "https://github.com/divyanshprajapat82/urbannest-realty/tree/main",
            description: "A full-stack property listing platform built with Next.js, MongoDB, Express, and Node.js featuring property posting, search, and filtering",
            languages: [
                { name: "Next.Js", icon: <SiNextdotjs />, color: "#fff" },
                { name: "Express", icon: <SiExpress />, color: "#9a9da3" },
                { name: "MongoDB", icon: <SiMongodb />, color: "#4AA349" },
                { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#36B7F0" },
            ]
        },
        {
            title: "Lawprep Clone",
            img: "/images/web1.png",
            demo: "https://lawprep-divyansh.vercel.app/",
            gitub: "https://github.com/divyanshprajapat82/Lawprep-Divyansh",
            description: "A responsive frontend clone of the Lawprep Tutorial website built with modern web technologies. Focused on clean UI, mobile-friendly design, and component-based development",
            languages: [
                { name: "HTML", icon: <FaHtml5 />, color: "#ff3300" },
                { name: "CSS", icon: <IoLogoCss3 />, color: "#2a52f1" },
                { name: "JavaScript", icon: <RiJavascriptFill />, color: "#EFD81D" },
                { name: "Bootstrap", icon: <FaBootstrap />, color: "#8411F6" },
            ]
        },

    ]

    return (
        <>
            <div id='projects' className='relative mt-4 w-full bg-[#000] py-10 overflow-x-hidden'>
                <div className='absolute w-full inset-0 pointer-events-none overflow-hidden '>
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
                <div className='max-w-[1100px] m-auto p-2'>
                    {/* <h1 className='text-[#EF6F46] text-[35px] font-bold uppercase'>Projects</h1> */}
                    <h1 className='bg-gradient-to-b from-[#fff] to-60% to-[#EF6F46] text-transparent bg-clip-text text-center text-[35px] font-bold uppercase'>Projects</h1>

                    <div className='mt-2 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 overflow-hidden'>
                        {/* <div className='bg-[#2A2A2A] rounded-[10px] overflow-hidden'>
                            <img src="/images/web1.png" alt="Lawprep clone preview" loading="lazy" />
                            <div className='p-3'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-[#fff] text-[20px] font-semibold'>Lawprep Clone</h2>
                                    <div className='text-[#fff] flex items-center gap-3'>
                                        <a
                                            href="https://lawprep-divyansh.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='flex items-center gap-1 transition-colors duration-200 hover:text-[#EF6F46] focus:text-[#EF6F46] outline-none focus-visible:ring-2 focus-visible:ring-[#EF6F46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A2A2A] rounded'
                                            aria-label='Open demo in a new tab'
                                        >
                                            <RxExternalLink />
                                            <span>Demo</span>
                                        </a>
                                        <a
                                            href="https://github.com/divyanshprajapat82/Lawprep-Divyansh"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='flex items-center gap-1 transition-colors duration-200 hover:text-[#EF6F46] focus:text-[#EF6F46] outline-none focus-visible:ring-2 focus-visible:ring-[#EF6F46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A2A2A] rounded'
                                            aria-label='Open GitHub repository in a new tab'
                                        >
                                            <FiGithub />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                                <p className='text-[#ffffffb6] text-[14px] line-clamp-3 my-2'>A responsive frontend clone of the Lawprep Tutorial website built with modern web technologies. Focused on clean UI, mobile-friendly design, and component-based development</p>
                                <div className='flex items-center flex-wrap gap-2'>
                                    <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#ff3300] hover:bg-[#ff3300]/10'>
                                        <FaHtml5 className='text-[#ff3300] text-[15px]' />
                                        <span>HTML</span>
                                    </div>
                                    <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#2a52f1] hover:bg-[#2a52f1]/10'>
                                        <IoLogoCss3 className='text-[#2a52f1] text-[15px]' />
                                        <span>CSS</span>
                                    </div>
                                    <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#EFD81D] hover:bg-[#2a52f1]/10'>
                                        <RiJavascriptFill className='text-[#EFD81D] text-[15px]' />
                                        <span>JavaScript</span>
                                    </div>
                                    <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#8411F6] hover:bg-[#36B7F0]/10'>
                                        <FaBootstrap className='text-[#8411F6] text-[15px]' />
                                        <span>Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {projectData.map((items, index) => (
                            <div className='bg-[#2A2A2A] rounded-[10px] overflow-hidden'>
                                <img className='w-full h-auto block' src={items.img} alt="Lawprep clone preview" loading="lazy" />
                                <div className='p-3'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-[#fff] text-[20px] font-semibold'>{items.title}</h2>
                                        <div className='text-[#fff] flex items-center gap-3'>
                                            <a
                                                href={items.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-1 transition-colors duration-200 hover:text-[#EF6F46] focus:text-[#EF6F46] outline-none focus-visible:ring-2 focus-visible:ring-[#EF6F46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A2A2A] rounded'
                                                aria-label='Open demo in a new tab'
                                            >
                                                <RxExternalLink />
                                                <span>Demo</span>
                                            </a>
                                            <a
                                                href={items.gitub}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-1 transition-colors duration-200 hover:text-[#EF6F46] focus:text-[#EF6F46] outline-none focus-visible:ring-2 focus-visible:ring-[#EF6F46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A2A2A] rounded'
                                                aria-label='Open GitHub repository in a new tab'
                                            >
                                                <FiGithub />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                    </div>
                                    <p className='text-[#ffffffb6] text-[14px] line-clamp-3 my-2'>{items.description}</p>
                                    <div className='flex items-center flex-wrap gap-2'>
                                        {/* <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#ff3300] hover:bg-[#ff3300]/10'>
                                            <FaHtml5 className='text-[#ff3300] text-[15px]' />
                                            <span>HTML</span>
                                        </div>
                                        <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#2a52f1] hover:bg-[#2a52f1]/10'>
                                            <IoLogoCss3 className='text-[#2a52f1] text-[15px]' />
                                            <span>CSS</span>
                                        </div>
                                        <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#EFD81D] hover:bg-[#2a52f1]/10'>
                                            <RiJavascriptFill className='text-[#EFD81D] text-[15px]' />
                                            <span>JavaScript</span>
                                        </div>
                                        <div className='group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[#8411F6] hover:bg-[#36B7F0]/10'>
                                            <FaBootstrap className='text-[#8411F6] text-[15px]' />
                                            <span>Bootstrap</span>
                                        </div> */}
                                        {/* {items.languages.map((lang, index) => (
                                            <div className={`group flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1 text-[12px] font-semibold text-white/90 transition-colors duration-200 hover:border-[${lang.color}] hover:bg-[${lang.color}]/10`}>
                                                <span className={`text-[15px]`} style={{ color: lang.color }}>
                                                    {lang.icon}
                                                </span>
                                                <span>{lang.name}</span>
                                            </div>
                                        ))} */}
                                        {items.languages.map((lang, index) => (
                                            <div
                                                key={lang.name}
                                                className="group flex items-center gap-1 rounded-2xl border bg-white/10 px-3 py-1 text-[12px] font-semibold border-white/15 text-white/90 transition-colors duration-200"
                                                // style={{ borderColor: lang.color }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = lang.color
                                                    e.currentTarget.style.backgroundColor = `${lang.color}1A` // ~10% opacity for hex colors
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.10)'
                                                }}
                                            >
                                                <span className="text-[15px]" style={{ color: lang.color }}>
                                                    {lang.icon}
                                                </span>
                                                <span>{lang.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
