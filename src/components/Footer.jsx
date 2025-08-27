import React from 'react'
import { motion } from 'motion/react'


export default function Footer() {
    return (
        <>
            <div className='max-w-[1100px] m-auto text-center py-4 border-t border-[#ffffffc3]'>
                <h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className='text-[#ffffffd0] text-[14px]'>© 2025 Divyansh Prajapat | MERN Stack Developer.</h1>
            </div>
        </>
    )
}
