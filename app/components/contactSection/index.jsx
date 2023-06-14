import { raleway } from '@/app/font'
import Link from 'next/link'
import React from 'react'
import letterBox from "../../assets/png/letter_box.png"
import Image from 'next/image'

const ContactSection = () => {
  return (
    <section className='w-full bg-primary text-white px-[50px] py-[80px] flex flex-wrap relative'>
        <div className='w-full lg:w-[33%]'>

        <h2 className='text-4xl text-secondary font-semibold'>
        HOW CAN WE HELP?
        </h2>
        <p className={`text-2xl text-white ${raleway.className}`}>
        We&apos;d love to hear from you!
        </p>
        </div>
        <div className='w-full lg:w-[33%] flex flex-row items-center justify-center'>
            <Link href="/contact" className='bg-secondary text-white px-4 py-3 rounded'>Contact Us</Link>

        </div>
    <Image src={letterBox} alt="letter box" width={"30%"} height={"auto"} className='absolute -bottom-2 right-0'/>
    </section>
  )
}

export default ContactSection