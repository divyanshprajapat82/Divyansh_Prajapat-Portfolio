import React, { useState } from 'react'
import { motion } from 'motion/react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'


export default function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ type: null, message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (status.type) setStatus({ type: null, message: '' })
    }

    // console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, message } = formData

        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: 'error', message: 'Please fill out all fields.' })
            return
        }
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/
        if (!emailRegex.test(email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email address.' })
            return
        }

        // EmailJS REST API (no SDK required)
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY



        if (!serviceId || !templateId || !publicKey) {
            setStatus({ type: 'error', message: 'Email service is not configured. Please set VITE_EMAILJS_* env variables and restart the dev server.' })
            return
        }

        try {
            setIsSubmitting(true)

            const payload = {
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                template_params: {
                    to_email: 'divyanshprajapat82@gmail.com',
                    from_name: name,
                    from_email: email,
                    message: message,
                },
            }

            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(errorText || 'Failed to send message')
            }

            setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
            setFormData({ name: '', email: '', message: '' })
        } catch (err) {
            setStatus({ type: 'error', message: `Failed to send. Please try again later.` })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div id='contact' className=' bg-[#000] px-4 '>
            <div className='max-w-[1000px] m-auto py-12'>
                <div className='flex flex-col items-center'>
                    <motion.h1 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: false,
                        }}
                        className='text-[#fff] text-[30px] font-semibold text-center border-b-2 border-[#ed501c] px-4'>
                        Contact Us
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className='text-[#bfbfbf] mt-3 text-center max-w-[700px]'>
                        Have a question, a project idea, or just want to say hi? Drop me a line and I’ll get back to you shortly.
                    </motion.p>
                </div>

                <div className='grid md:grid-cols-2 gap-6 mt-10'>
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} className='bg-[#0b0b0b] border border-white/10 rounded-2xl p-6'>
                        <h3 className='text-white text-xl font-semibold'>Contact Details</h3>
                        <div className='mt-4 space-y-3 text-[#d9d9d9]'>
                            <div>
                                <span className='text-[#a8a8a8] flex items-center gap-2'><IoCall className='text-[#0CC143]' /> Contact and WhatsApp No</span>
                                <p className='text-white pl-2'>7239884322</p>
                            </div>
                            <div>
                                <span className='text-[#a8a8a8] flex items-center gap-2'><MdEmail /> Email</span>
                                <p className='text-white pl-2'>divyanshprajapat82@gmail.com</p>
                            </div>
                            <div>
                                <span className='text-[#a8a8a8] flex items-center gap-2'><FaLocationDot className='text-[#bc1f1f]' /> Location</span>
                                <p className='text-white pl-2'>Rajasthan, India</p>
                            </div>
                        </div>

                        {/* <div className='mt-6'>
                            <h4 className='text-white font-medium mb-3'>Find me online</h4>
                            <div className='flex gap-3'>
                                <a href='https://github.com/' target='_blank' rel='noreferrer' className='px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition'>GitHub</a>
                                <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer' className='px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition'>LinkedIn</a>
                                <a href='mailto:divyansh@example.com' className='px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition'>Email</a>
                            </div>
                        </div> */}
                    </motion.div>

                    <motion.form initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className='bg-[#0b0b0b] border border-white/10 rounded-2xl p-6'>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[#cfcfcf] text-sm'>Name</label>
                                <input name='name' value={formData.name} onChange={handleChange} placeholder='Your name' className='bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-[#ed501c]' disabled={isSubmitting} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-[#cfcfcf] text-sm'>Email</label>
                                <input name='email' value={formData.email} onChange={handleChange} placeholder='you@example.com' className='bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-[#ed501c]' disabled={isSubmitting} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-[#cfcfcf] text-sm'>Message</label>
                            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='How can I help you?' rows={5} className='bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white outline-none focus:border-[#ed501c]' disabled={isSubmitting}></textarea>
                        </div>

                        {status.type && (
                            <div className={`mt-4 text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {status.message}
                            </div>
                        )}

                        <div className='mt-5'>
                            <button type='submit' className='px-6 py-2 bg-[#ed501c] text-white font-semibold rounded-full hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed' disabled={isSubmitting}>
                                {isSubmitting ? 'Sending…' : 'Send Message'}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}

