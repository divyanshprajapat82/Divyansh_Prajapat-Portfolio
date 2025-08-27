import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react';
import { Link, Events } from 'react-scroll';
import { FaBarsStaggered } from 'react-icons/fa6';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mediaNav, setMediaNav] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Set up scroll spy events
        Events.scrollEvent.register('begin', function (to, element) {
            setActiveSection(to);
        });

        Events.scrollEvent.register('end', function (to, element) {
            setActiveSection(to);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'About', href: 'about' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' }
    ];



    return (
        <>
            <motion.div initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: false,
                }} s className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className={`backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transition-all duration-500 ${isScrolled
                        ? 'bg-black/40 shadow-purple-500/20'
                        : 'bg-white/10 shadow-white/10'
                        }`}>
                        <div className='px-6 py-4'>
                            <div className='flex justify-between items-center'>
                                {/* Logo/Brand */}
                                <div className='flex items-center space-x-3 group cursor-pointer'>
                                    <div className='relative'>
                                        {/* Glowing effect behind logo */}
                                        <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500'></div>

                                        {/* Logo circle */}
                                        <div className='relative w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                                            <span className='text-white font-bold text-lg'>D</span>
                                        </div>
                                    </div>

                                    {/* Brand name */}
                                    <div className='flex flex-col'>
                                        <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-300'>
                                            Divyansh
                                        </h1>
                                        <span className='text-xs text-gray-400 font-medium -mt-1'>Developer</span>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <nav className='hidden sm:flex items-center space-x-1'>
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            spy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            onSetActive={() => setActiveSection(item.name)}
                                            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group cursor-pointer ${activeSection === item.name
                                                ? 'text-white'
                                                : 'text-gray-300 hover:text-white'
                                                }`}
                                        >
                                            {/* Active background effect */}
                                            <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${activeSection === item.name
                                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                                                : 'bg-white/5 group-hover:bg-white/10'
                                                }`}></div>

                                            {/* Text */}
                                            <span className='relative z-10'>{item.name}</span>

                                            {/* Underline effect */}
                                            <div className={`absolute bottom-0 left-0 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${activeSection === item.name
                                                ? 'w-full bg-gradient-to-r from-purple-400 to-pink-400'
                                                : 'w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-400'
                                                }`}></div>
                                        </Link>
                                    ))}
                                </nav>

                                {/* Mobile menu button */}
                                <div className='sm:hidden' onClick={() => setMediaNav(true)}>
                                    <button className='p-2 rounded-lg text-[#fff] text-[20px] bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer'>
                                        {/* <div className='w-6 h-6 flex flex-col justify-center items-center space-y-1'>
                                            <div className='w-5 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-purple-400'></div>
                                            <div className='w-5 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-pink-400'></div>
                                            <div className='w-5 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:bg-blue-400'></div>
                                        </div> */}
                                        <FaBarsStaggered />
                                    </button>
                                </div>

                                {/* CTA Button */}
                                <div className='hidden md:block'>
                                    <a href="#inTouch" className='px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 relative overflow-hidden group'>
                                        <span className='relative z-10'>Get In Touch</span>
                                        <div className='absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating particles around header */}
                <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                    <div className='absolute top-4 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse'></div>
                    <div className='absolute top-6 right-1/3 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse' style={{ animationDelay: '1s' }}></div>
                    <div className='absolute top-2 right-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse' style={{ animationDelay: '2s' }}></div>
                </div>
            </motion.div>

            <div className={`fixed w-full h-[100vh] z-50 sm:hidden block ${mediaNav ? "right-0" : "right-[1000px]"} transition-all`}>
                <div onClick={() => setMediaNav(false)} className='absolute top-0 left-0 w-full h-[100%] bg-[#0000006e] -z-10'></div>
                <div className='h-full bg-[#fff] text-[#000] max-w-[300px] p-4'>
                    <h1 className='text-2xl font-semibold'>Divyansh Prajapat</h1>
                    <ul>
                        <nav className='flex flex-col  space-x-1 mt-4'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onSetActive={() => setActiveSection(item.name)}
                                    onClick={() => setMediaNav(false)}
                                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group cursor-pointer ${activeSection === item.name
                                        ? 'text-[#000]'
                                        : 'text-[#00000098] hover:text-[#000]'
                                        }`}
                                >
                                    {/* Active background effect */}
                                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 hover:bg-[#e4c8eb99]
                                                `}></div>
                                    <span className='relative z-10'>{item.name}</span>

                                    {/* Underline effect */}
                                    <div className={`absolute bottom-0 left-0 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${activeSection === item.name
                                        ? 'w-full bg-gradient-to-r from-purple-400 to-pink-400'
                                        : 'w-0 group-hover:w-full bg-gradient-to-r from-purple-400 to-pink-400'
                                        }`}></div>
                                </Link>
                            ))}
                        </nav>
                    </ul>
                </div>
            </div>
        </>
    )
}
