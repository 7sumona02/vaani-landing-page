import React from 'react'
import { TabsDemo } from './TabsDemo'

const Hero = () => {
  return (
     <div className='h-fit w-full bg-black pt-40 pb-54 relative'>
        <div className='container max-w-6xl mx-auto text-white/60 md:px-20 px-5 pt-14 pb-6 relative flex flex-col items-center -space-y-4'>
           <div className='md:text-[6rem] font-bold pb-12  md:leading-[6.5rem] text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500 tracking-wide text-center'>Vaanika India&apos;s <br className='hidden md:block' /> Voice AI Studio</div>
           <p className='text-2xl text-white/60 max-w-3xl text-center'>Studio-quality speech, effortless multilingual dubbing, and cinematic soundscapes already in 7 + Indian languages, with more on the way.</p>
           <TabsDemo />
        </div>
    </div>
  )
}

export default Hero