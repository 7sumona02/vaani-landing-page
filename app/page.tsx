'use client'
import Beats from '@/components/Beats'
import Choose from '@/components/Choose'
import CTA from '@/components/CTA'
import { FAQ } from '@/components/FAQ'
import Footer from '@/components/Footer'
import Get from '@/components/Get'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import Uses from '@/components/Uses'
import Works from '@/components/Works'
import React from 'react'

const page = () => {
    const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current as HTMLElement,
  //     smooth: true
  //   });
  // });
  return (
    <div className='overflow-hidden h-screen bg-black'>
      <div className='scroll' ref={scrollRef as React.RefObject<HTMLDivElement>}>
        <Hero />
        <Choose />
        <Get />
        <Beats />
        <Works />
        <Uses />
        <Pricing />
        <Testimonial />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default page